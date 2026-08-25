<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Models\Project;
use App\Models\Article;
use App\Models\CareerOpening;
use App\Models\SiteSetting;
use App\Models\Media;

class AdminProductController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['success' => true, 'data' => Product::all()]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'tagline' => 'required|string',
            'short_description' => 'required|string',
            'description' => 'required|string',
            'status' => 'required|in:in_development,live,beta'
        ]);

        $data['slug'] = Str::slug($data['name']);
        $product = Product::create($data);

        return response()->json(['success' => true, 'data' => $product], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return response()->json(['success' => true, 'data' => $product]);
    }

    public function destroy(int $id): JsonResponse
    {
        Product::findOrFail($id)->delete();
        return response()->json(['success' => true, 'message' => 'Product removed.']);
    }
}

class AdminProjectController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['success' => true, 'data' => Project::all()]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'client_name' => 'required|string',
            'industry' => 'required|string',
            'service_category' => 'required|string',
            'short_description' => 'required|string',
            'overview' => 'required|string',
            'challenge' => 'required|string',
            'solution' => 'required|string',
            'outcome' => 'required|string'
        ]);

        $data['slug'] = Str::slug($data['title']);
        $project = Project::create($data);

        return response()->json(['success' => true, 'data' => $project], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $project = Project::findOrFail($id);
        $project->update($request->all());
        return response()->json(['success' => true, 'data' => $project]);
    }

    public function destroy(int $id): JsonResponse
    {
        Project::findOrFail($id)->delete();
        return response()->json(['success' => true, 'message' => 'Case study removed.']);
    }
}

class AdminArticleController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['success' => true, 'data' => Article::latest()->get()]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'category' => 'required|string',
            'status' => 'required|in:draft,published,archived'
        ]);

        $data['slug'] = Str::slug($data['title']);
        $data['author_name'] = $request->input('author_name', 'Muhammad Auwal Abubakar');
        $data['author_role'] = $request->input('author_role', 'Founder & CEO');
        $data['published_at'] = now();

        $article = Article::create($data);

        return response()->json(['success' => true, 'data' => $article], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return response()->json(['success' => true, 'data' => $article]);
    }

    public function destroy(int $id): JsonResponse
    {
        Article::findOrFail($id)->delete();
        return response()->json(['success' => true, 'message' => 'Article removed.']);
    }
}

class AdminCareerController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['success' => true, 'data' => CareerOpening::all()]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'required|string',
            'location' => 'required|string',
            'employment_type' => 'required|string',
            'description' => 'required|string',
            'responsibilities' => 'required|array',
            'requirements' => 'required|array'
        ]);

        $data['slug'] = Str::slug($data['title']);
        $career = CareerOpening::create($data);

        return response()->json(['success' => true, 'data' => $career], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $career = CareerOpening::findOrFail($id);
        $career->update($request->all());
        return response()->json(['success' => true, 'data' => $career]);
    }

    public function destroy(int $id): JsonResponse
    {
        CareerOpening::findOrFail($id)->delete();
        return response()->json(['success' => true, 'message' => 'Career opening removed.']);
    }
}

class AdminMediaController extends Controller
{
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'file' => 'required|file|mimes:jpg,jpeg,png,webp,svg,pdf|max:10240' // 10MB
        ]);

        $file = $request->file('file');
        $filename = 'media_' . time() . '_' . Str::random(8) . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('public/media', $filename);

        $media = Media::create([
            'name' => $file->getClientOriginalName(),
            'file_path' => $path,
            'mime_type' => $file->getClientMimeType(),
            'file_size' => $file->getSize(),
            'disk' => 'public'
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Media asset uploaded securely.',
            'data' => [
                'id' => $media->id,
                'url' => '/storage/' . str_replace('public/', '', $path)
            ]
        ], 201);
    }
}

class AdminSettingController extends Controller
{
    public function index(): JsonResponse
    {
        $settings = SiteSetting::all()->pluck('value', 'key');
        return response()->json(['success' => true, 'data' => $settings]);
    }

    public function update(Request $request): JsonResponse
    {
        foreach ($request->all() as $key => $value) {
            SiteSetting::set($key, $value);
        }

        return response()->json(['success' => true, 'message' => 'Settings updated successfully.']);
    }
}
