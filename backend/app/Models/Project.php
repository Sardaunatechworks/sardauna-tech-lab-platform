<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'client_name',
        'industry',
        'service_category',
        'short_description',
        'overview',
        'challenge',
        'requirements',
        'approach',
        'solution',
        'outcome',
        'featured_image',
        'project_url',
        'year',
        'status',
        'featured',
        'sort_order',
        'technologies',
        'system_capabilities',
        'gallery',
        'seo_title',
        'seo_description'
    ];

    protected $casts = [
        'featured' => 'boolean',
        'sort_order' => 'integer',
        'requirements' => 'array',
        'technologies' => 'array',
        'system_capabilities' => 'array',
        'gallery' => 'array'
    ];
}
