<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'tagline',
        'short_description',
        'description',
        'problem',
        'solution',
        'logo',
        'featured_image',
        'website_url',
        'status',
        'featured',
        'sort_order',
        'target_audience',
        'technologies',
        'screenshots',
        'seo_title',
        'seo_description'
    ];

    protected $casts = [
        'featured' => 'boolean',
        'sort_order' => 'integer',
        'target_audience' => 'array',
        'technologies' => 'array',
        'screenshots' => 'array'
    ];

    public function features(): HasMany
    {
        return $this->hasMany(ProductFeature::class)->orderBy('sort_order');
    }
}
