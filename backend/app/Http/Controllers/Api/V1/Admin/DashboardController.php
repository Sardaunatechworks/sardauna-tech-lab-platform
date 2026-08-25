<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\ContactEnquiry;
use App\Models\CareerApplication;
use App\Models\Service;
use App\Models\Product;
use App\Models\Project;
use App\Models\Article;
use App\Models\CareerOpening;

class DashboardController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => [
                'metrics' => [
                    'new_enquiries' => ContactEnquiry::where('status', 'new')->count(),
                    'total_enquiries' => ContactEnquiry::count(),
                    'new_applications' => CareerApplication::where('status', 'new')->count(),
                    'total_services' => Service::count(),
                    'total_products' => Product::count(),
                    'total_projects' => Project::count(),
                    'published_articles' => Article::where('status', 'published')->count(),
                    'active_careers' => CareerOpening::where('status', 'open')->count()
                ],
                'recent_enquiries' => ContactEnquiry::latest()->take(5)->get(),
                'recent_applications' => CareerApplication::latest()->take(5)->get()
            ]
        ]);
    }
}
