<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'category',
        'author_name',
        'author_role',
        'status',
        'featured',
        'published_at',
        'read_time',
        'seo_title',
        'seo_description'
    ];

    protected $casts = [
        'featured' => 'boolean',
        'published_at' => 'date'
    ];
}
