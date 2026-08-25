<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Models\CareerApplication;

class CareerApplicationController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'career_id' => 'nullable|integer',
            'career_title' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'location' => 'required|string|max:255',
            'portfolio_url' => 'nullable|url|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'cover_note' => 'nullable|string|max:3000',
            'cv' => 'nullable|file|mimes:pdf,doc,docx|max:5120' // 5MB max
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed for application.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $cvPath = null;
            if ($request->hasFile('cv')) {
                $file = $request->file('cv');
                $filename = 'cv_' . time() . '_' . Str::random(10) . '.' . $file->getClientOriginalExtension();
                $cvPath = $file->storeAs('applications/cvs', $filename, 'local');
            }

            $application = CareerApplication::create([
                'career_id' => $request->input('career_id'),
                'career_title' => strip_tags($request->input('career_title')),
                'name' => strip_tags($request->input('name')),
                'email' => filter_var($request->input('email'), FILTER_SANITIZE_EMAIL),
                'phone' => strip_tags($request->input('phone')),
                'location' => strip_tags($request->input('location')),
                'portfolio_url' => strip_tags($request->input('portfolio_url')),
                'linkedin_url' => strip_tags($request->input('linkedin_url')),
                'cv_path' => $cvPath,
                'cover_note' => strip_tags($request->input('cover_note')),
                'status' => 'new'
            ]);

            Log::info("Career application logged [ID: {$application->id}] for '{$application->career_title}' by {$application->name}.");

            return response()->json([
                'success' => true,
                'message' => 'Your application has been received successfully. Our engineering recruitment team will review your profile.',
                'data' => [
                    'id' => $application->id
                ]
            ], 201);
        } catch (\Exception $e) {
            Log::error("Failed to process career application: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while saving your application. Please email your CV to contact@sardaunatechlabs.com.ng.'
            ], 500);
        }
    }
}
