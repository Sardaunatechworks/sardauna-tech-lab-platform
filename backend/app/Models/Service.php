<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Service extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'full_description',
        'icon',
        'hero_title',
        'hero_description',
        'status',
        'sort_order',
        'featured',
        'challenges_solved',
        'deliverables',
        'process_steps',
        'technologies',
        'seo_title',
        'seo_description'
    ];

    protected $casts = [
        'featured' => 'boolean',
        'sort_order' => 'integer',
        'challenges_solved' => 'array',
        'deliverables' => 'array',
        'process_steps' => 'array',
        'technologies' => 'array'
    ];

    public function features(): HasMany
    {
        return $this->hasMany(ServiceFeature::class)->orderBy('sort_order');
    }
}
