<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;

    // Specify which attributes should be mass assignable
    protected $fillable = [
        'phone_number_1',
        'phone_number_2',
        'contact_email',
        'admin_email',
        'address',
        'linkedin_profile',
        'instagram_profile',
        'facebook_profile',
        'youtube_profile',
    ];
}
