<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $table = 'Products';

    // Specify which attributes should be mass assignable
    protected $fillable = [
        'Title_1',
        'Card_1',
        'Card_2',
        'Capacité_1',
        'Description_1',

        'Title_2',
        'Card_3',
        'Card_4',
        'Capacité_2',
        'Description_2',

        'Title_3',
        'Card_5',
        'Card_6',
        'Capacité_3',
        'Description_3',

        'Title_4',
        'Description_4',
    ];
}
