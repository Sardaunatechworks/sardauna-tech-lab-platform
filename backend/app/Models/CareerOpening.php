<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CareerOpening extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'department',
        'location',
        'employment_type',
        'description',
        'responsibilities',
        'requirements',
        'preferred_skills',
        'status',
        'deadline'
    ];

    protected $casts = [
        'responsibilities' => 'array',
        'requirements' => 'array',
        'preferred_skills' => 'array',
        'deadline' => 'date'
    ];

    public function applications(): HasMany
    {
        return $this->hasMany(CareerApplication::class, 'career_id');
    }
}
