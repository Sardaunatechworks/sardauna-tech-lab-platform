<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\Service;
use App\Models\Product;
use App\Models\Project;
use App\Models\Industry;
use App\Models\Article;
use App\Models\CareerOpening;
use App\Models\TeamMember;
use App\Models\SiteSetting;

class PublicController extends Controller
{
    protected function jsonResponse(bool $success, string $message, $data = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'success' => $success,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    public function getSettings(): JsonResponse
    {
        $settings = SiteSetting::all()->pluck('value', 'key')->toArray();
        return $this->jsonResponse(true, 'Site settings retrieved successfully.', $settings);
    }

    public function getServices(): JsonResponse
    {
        $services = Service::where('status', 'active')->orderBy('sort_order')->get();
        return $this->jsonResponse(true, 'Services retrieved successfully.', $services);
    }

    public function getServiceBySlug(string $slug): JsonResponse
    {
        $service = Service::where('slug', $slug)->where('status', 'active')->first();
        if (!$service) {
            return $this->jsonResponse(false, 'Service not found.', null, 404);
        }
        return $this->jsonResponse(true, 'Service details retrieved.', $service);
    }

    public function getProducts(): JsonResponse
    {
        $products = Product::where('status', '!=', 'archived')->orderBy('sort_order')->get();
        return $this->jsonResponse(true, 'Products retrieved successfully.', $products);
    }

    public function getProductBySlug(string $slug): JsonResponse
    {
        $product = Product::where('slug', $slug)->first();
        if (!$product) {
            return $this->jsonResponse(false, 'Product not found.', null, 404);
        }
        return $this->jsonResponse(true, 'Product details retrieved.', $product);
    }

    public function getProjects(): JsonResponse
    {
        $projects = Project::where('status', '!=', 'archived')->orderBy('sort_order')->get();
        return $this->jsonResponse(true, 'Projects retrieved successfully.', $projects);
    }

    public function getProjectBySlug(string $slug): JsonResponse
    {
        $project = Project::where('slug', $slug)->first();
        if (!$project) {
            return $this->jsonResponse(false, 'Case study not found.', null, 404);
        }
        return $this->jsonResponse(true, 'Case study details retrieved.', $project);
    }

    public function getIndustries(): JsonResponse
    {
        $industries = Industry::all();
        return $this->jsonResponse(true, 'Industries retrieved successfully.', $industries);
    }

    public function getArticles(): JsonResponse
    {
        $articles = Article::where('status', 'published')->orderByDesc('published_at')->get();
        return $this->jsonResponse(true, 'Articles retrieved successfully.', $articles);
    }

    public function getArticleBySlug(string $slug): JsonResponse
    {
        $article = Article::where('slug', $slug)->where('status', 'published')->first();
        if (!$article) {
            return $this->jsonResponse(false, 'Article not found.', null, 404);
        }
        return $this->jsonResponse(true, 'Article details retrieved.', $article);
    }

    public function getCareers(): JsonResponse
    {
        $careers = CareerOpening::where('status', 'open')->latest()->get();
        return $this->jsonResponse(true, 'Careers retrieved successfully.', $careers);
    }

    public function getCareerBySlug(string $slug): JsonResponse
    {
        $career = CareerOpening::where('slug', $slug)->first();
        if (!$career) {
            return $this->jsonResponse(false, 'Career opening not found.', null, 404);
        }
        return $this->jsonResponse(true, 'Career opening details retrieved.', $career);
    }

    public function getTeam(): JsonResponse
    {
        $team = TeamMember::where('visible', true)->orderBy('sort_order')->get();
        return $this->jsonResponse(true, 'Team members retrieved successfully.', $team);
    }
}
