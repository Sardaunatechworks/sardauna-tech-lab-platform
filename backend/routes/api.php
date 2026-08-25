<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\PublicController;
use App\Http\Controllers\Api\V1\EnquiryController;
use App\Http\Controllers\Api\V1\CareerApplicationController;
use App\Http\Controllers\Api\V1\Admin\AuthController;
use App\Http\Controllers\Api\V1\Admin\DashboardController;
use App\Http\Controllers\Api\V1\Admin\AdminEnquiryController;
use App\Http\Controllers\Api\V1\Admin\AdminServiceController;
use App\Http\Controllers\Api\V1\Admin\AdminProductController;
use App\Http\Controllers\Api\V1\Admin\AdminProjectController;
use App\Http\Controllers\Api\V1\Admin\AdminArticleController;
use App\Http\Controllers\Api\V1\Admin\AdminCareerController;
use App\Http\Controllers\Api\V1\Admin\AdminMediaController;
use App\Http\Controllers\Api\V1\Admin\AdminSettingController;

/*
|--------------------------------------------------------------------------
| API Routes v1 - Sardauna Tech Lab Ltd
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // ----------------------------------------------------------------------
    // Public Corporate Endpoints
    // ----------------------------------------------------------------------
    Route::get('/settings', [PublicController::class, 'getSettings']);
    Route::get('/services', [PublicController::class, 'getServices']);
    Route::get('/services/{slug}', [PublicController::class, 'getServiceBySlug']);
    Route::get('/products', [PublicController::class, 'getProducts']);
    Route::get('/products/{slug}', [PublicController::class, 'getProductBySlug']);
    Route::get('/projects', [PublicController::class, 'getProjects']);
    Route::get('/projects/{slug}', [PublicController::class, 'getProjectBySlug']);
    Route::get('/industries', [PublicController::class, 'getIndustries']);
    Route::get('/articles', [PublicController::class, 'getArticles']);
    Route::get('/articles/{slug}', [PublicController::class, 'getArticleBySlug']);
    Route::get('/careers', [PublicController::class, 'getCareers']);
    Route::get('/careers/{slug}', [PublicController::class, 'getCareerBySlug']);
    Route::get('/team', [PublicController::class, 'getTeam']);

    // Public Form Submissions (Rate Limited)
    Route::middleware(['throttle:10,1'])->group(function () {
        Route::post('/enquiries', [EnquiryController::class, 'store']);
        Route::post('/career-applications', [CareerApplicationController::class, 'store']);
    });

    // ----------------------------------------------------------------------
    // Admin Authentication & CMS Endpoints
    // ----------------------------------------------------------------------
    Route::prefix('admin')->group(function () {
        // Auth (Throttled: 5 attempts per minute)
        Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1');

        // Protected Admin Endpoints
        Route::middleware(['auth:sanctum'])->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::get('/user', [AuthController::class, 'user']);
            Route::get('/dashboard', [DashboardController::class, 'index']);

            // Enquiries Management
            Route::get('/enquiries', [AdminEnquiryController::class, 'index']);
            Route::get('/enquiries/{id}', [AdminEnquiryController::class, 'show']);
            Route::put('/enquiries/{id}', [AdminEnquiryController::class, 'update']);
            Route::delete('/enquiries/{id}', [AdminEnquiryController::class, 'destroy']);

            // Content CMS CRUD
            Route::apiResource('/services', AdminServiceController::class);
            Route::apiResource('/products', AdminProductController::class);
            Route::apiResource('/projects', AdminProjectController::class);
            Route::apiResource('/articles', AdminArticleController::class);
            Route::apiResource('/careers', AdminCareerController::class);

            // Media & Settings
            Route::post('/media/upload', [AdminMediaController::class, 'upload']);
            Route::get('/settings', [AdminSettingController::class, 'index']);
            Route::put('/settings', [AdminSettingController::class, 'update']);
        });
    });
});
