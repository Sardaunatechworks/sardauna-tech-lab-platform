'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Upload, X, Image as ImageIcon, Link as LinkIcon, Check } from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  value?: string;
  onChange: (urlOrBase64: string) => void;
  aspectRatio?: 'square' | 'video' | 'wide' | 'banner';
  helperText?: string;
}

export const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  label,
  value,
  onChange,
  aspectRatio = 'square',
  helperText
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value || '');

  const aspectClasses = {
    square: 'w-24 h-24 sm:w-28 sm:h-28',
    video: 'w-full aspect-[16/9] max-h-48',
    wide: 'w-full aspect-[16/10] max-h-52',
    banner: 'w-full aspect-[21/9] max-h-44'
  }[aspectRatio];

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP, SVG).');
      return;
    }

    // Compress & resize image to maintain fast localStorage performance
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (!result) return;

      // If svg, use as is
      if (file.type === 'image/svg+xml' || file.size < 400 * 1024) {
        onChange(result);
        setUrlInput(result);
        return;
      }

      // Resize via HTML5 Canvas for optimal localStorage persistence
      const img = new (window as any).Image();
      img.src = result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDimension = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
          onChange(compressedDataUrl);
          setUrlInput(compressedDataUrl);
        } else {
          onChange(result);
          setUrlInput(result);
        }
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="font-bold text-[#475569] text-xs flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-[#F5A623]" />
          {label}
        </label>
        <div className="flex items-center gap-1 text-[11px]">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`px-2 py-0.5 rounded font-medium transition-colors ${
              mode === 'upload' ? 'bg-[#06101E] text-white' : 'text-[#64748B] hover:bg-neutral-100'
            }`}
          >
            Upload from PC
          </button>
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`px-2 py-0.5 rounded font-medium transition-colors ${
              mode === 'url' ? 'bg-[#06101E] text-white' : 'text-[#64748B] hover:bg-neutral-100'
            }`}
          >
            Path / URL
          </button>
        </div>
      </div>

      {mode === 'upload' ? (
        <div className="space-y-2">
          {value ? (
            <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              {/* Preview Box */}
              <div className={`relative ${aspectClasses} rounded-lg overflow-hidden bg-neutral-900 border border-neutral-300 shrink-0 flex items-center justify-center`}>
                <Image
                  src={value}
                  alt="Uploaded preview"
                  fill
                  className="object-cover"
                  unoptimized={value.startsWith('data:')}
                />
              </div>

              {/* Details & Actions */}
              <div className="flex-1 space-y-1.5 min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Image Loaded &amp; Synced</span>
                </div>
                <p className="text-[11px] text-[#64748B] truncate">
                  {value.startsWith('data:') ? 'Local file uploaded (Base64 optimized)' : value}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 text-xs font-semibold bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg text-[#0F172A] transition-colors"
                  >
                    Replace Image
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onChange('');
                      setUrlInput('');
                    }}
                    className="px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                isDragging
                  ? 'border-[#F5A623] bg-[#F5A623]/5 scale-[1.01]'
                  : 'border-[#CBD5E1] hover:border-[#F5A623] bg-neutral-50/70 hover:bg-neutral-50'
              }`}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#06101E] text-[#F5A623] flex items-center justify-center shadow-sm">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">
                    Click to browse from your computer
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    or drag and drop PNG, JPG, WEBP, SVG (up to 10MB)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Hidden HTML5 File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8]" />
            <input
              type="text"
              value={urlInput}
              onChange={(e) => {
                setUrlInput(e.target.value);
                onChange(e.target.value);
              }}
              placeholder="e.g. /team/photo.png or https://..."
              className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-[#CBD5E1] bg-white"
            />
          </div>
          {value && (
            <button
              type="button"
              onClick={() => {
                onChange('');
                setUrlInput('');
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              title="Clear"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {helperText && (
        <p className="text-[10px] text-[#64748B]">{helperText}</p>
      )}
    </div>
  );
};
