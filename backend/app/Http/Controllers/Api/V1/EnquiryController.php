<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\ContactEnquiry;

class EnquiryController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'company' => 'nullable|string|max:255',
            'enquiry_type' => 'required|string|in:Start a Project,General Enquiry,Partnership,Consulting,Support,Careers',
            'service' => 'nullable|string|max:255',
            'timeline' => 'nullable|string|max:100',
            'budget_range' => 'nullable|string|max:100',
            'message' => 'required|string|min:10|max:5000',
            'source' => 'nullable|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed. Please verify your inputs.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $enquiry = ContactEnquiry::create([
                'name' => strip_tags($request->input('name')),
                'email' => filter_var($request->input('email'), FILTER_SANITIZE_EMAIL),
                'phone' => strip_tags($request->input('phone')),
                'company' => strip_tags($request->input('company')),
                'enquiry_type' => $request->input('enquiry_type'),
                'service' => strip_tags($request->input('service')),
                'timeline' => strip_tags($request->input('timeline')),
                'budget_range' => strip_tags($request->input('budget_range')),
                'message' => strip_tags($request->input('message')),
                'source' => strip_tags($request->input('source')),
                'status' => 'new'
            ]);

            // DirectAdmin SMTP internal notification log
            Log::info("New Corporate Enquiry [ID: {$enquiry->id}] received from {$enquiry->name} ({$enquiry->email}) for '{$enquiry->service}'.");

            return response()->json([
                'success' => true,
                'message' => 'Your enquiry has been successfully logged. Our technical team will reach out within 24 hours.',
                'data' => [
                    'id' => $enquiry->id,
                    'reference' => 'STL-ENQ-' . str_pad($enquiry->id, 5, '0', STR_PAD_LEFT)
                ]
            ], 201);
        } catch (\Exception $e) {
            Log::error("Failed to persist enquiry: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An unexpected server error occurred while logging your enquiry. Please reach us directly at contact@sardaunatechlabs.com.ng.'
            ], 500);
        }
    }
}
