<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactEnquiry extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'enquiry_type',
        'service',
        'timeline',
        'budget_range',
        'message',
        'source',
        'status',
        'admin_notes'
    ];
}
