<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CareerApplication extends Model
{
    protected $fillable = [
        'career_id',
        'career_title',
        'name',
        'email',
        'phone',
        'location',
        'portfolio_url',
        'linkedin_url',
        'cv_path',
        'cover_note',
        'status'
    ];

    public function career(): BelongsTo
    {
        return $this->belongsTo(CareerOpening::class, 'career_id');
    }
}
