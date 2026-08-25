<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use App\Models\Service;
use App\Models\Product;
use App\Models\Project;
use App\Models\Article;
use App\Models\CareerOpening;
use App\Models\SiteSetting;
use App\Models\Media;

class AdminServiceController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['success' => true, 'data' => Service::orderBy('sort_order')->get()]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string',
            'full_description' => 'required|string',
            'icon' => 'nullable|string',
            'status' => 'required|in:active,inactive',
            'sort_order' => 'integer'
        ]);

        $data['slug'] = Str::slug($data['title']);
        $service = Service::create($data);

        return response()->json(['success' => true, 'message' => 'Service created.', 'data' => $service], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $service = Service::findOrFail($id);
        $service->update($request->all());

        return response()->json(['success' => true, 'message' => 'Service updated.', 'data' => $service]);
    }

    public function destroy(int $id): JsonResponse
    {
        Service::findOrFail($id)->delete();
        return response()->json(['success' => true, 'message' => 'Service deleted.']);
    }
}
