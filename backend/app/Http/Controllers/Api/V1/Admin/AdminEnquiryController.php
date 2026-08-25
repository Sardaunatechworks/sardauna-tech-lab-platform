<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\ContactEnquiry;

class AdminEnquiryController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = ContactEnquiry::query();

        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $enquiries = $query->latest()->paginate(20);

        return response()->json([
            'success' => true,
            'data' => $enquiries
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $enquiry = ContactEnquiry::findOrFail($id);
        return response()->json(['success' => true, 'data' => $enquiry]);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $enquiry = ContactEnquiry::findOrFail($id);

        $enquiry->update($request->only([
            'status',
            'admin_notes'
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Enquiry updated successfully.',
            'data' => $enquiry
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $enquiry = ContactEnquiry::findOrFail($id);
        $enquiry->delete();

        return response()->json([
            'success' => true,
            'message' => 'Enquiry archived/deleted successfully.'
        ]);
    }
}
