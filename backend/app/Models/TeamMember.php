<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $fillable = [
        'name',
        'role',
        'short_bio',
        'full_bio',
        'photo',
        'linkedin_url',
        'github_url',
        'twitter_url',
        'email',
        'sort_order',
        'visible'
    ];

    protected $casts = [
        'visible' => 'boolean',
        'sort_order' => 'integer'
    ];
}
