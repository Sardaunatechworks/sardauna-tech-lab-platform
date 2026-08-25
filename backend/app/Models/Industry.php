<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'challenges',
        'opportunities',
        'relevant_services',
        'icon'
    ];

    protected $casts = [
        'challenges' => 'array',
        'opportunities' => 'array',
        'relevant_services' => 'array'
    ];
}
