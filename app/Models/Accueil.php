<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accueil extends Model
{
    use HasFactory;

    protected $table = 'Accueil';


    // Specify which attributes should be mass assignable
    protected $fillable = [
        'Title_1',
        'Description_1',
        'Description_2',
        'Card_1_Title',
        'Card_1_Description',
        'Card_2_Title',
        'Card_2_Description',
        'Youtube_video_src',
        'Title_2',
        'Description_3',
        'Title_3',
        'Description_4',
        'Card_3_Title',
        'Card_3_Description',
        'Card_4_Title',
        'Card_4_Description',
        'Title_4',
        'Description_5',
        'Title_5',
        'Title_6',
        'Card_5_Title',
        'Card_5_Description',
        'Card_6_Title',
        'Card_6_Description',
        'Card_7_Title',
        'Card_7_Description',
        'Title_7',
        'Description_6',
        'Title_8',
        'Description_7',
        'Title_9',
        'Description_8',
        'Title_10',
        'Description_9',
        'Title_11',
        'Description_10',
        'Title_12',
        'Description_11',
        'Title_13',
        'Description_12',

    ];
}
