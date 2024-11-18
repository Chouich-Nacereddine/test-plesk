<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;
    protected $table = 'About';

    // Specify which attributes should be mass assignable
    protected $fillable = [
        'Title_1',
        'Description_1',
        'Title_2',
        'Description_2',
        'Title_3',
        'Description_3',
        'Title_4',
        'Description_4',
        'Title_5',
        'Description_5',
        'Title_6',
        'Description_6',
    ];
}
