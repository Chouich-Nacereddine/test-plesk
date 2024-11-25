<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{

    use HasFactory;

    protected $table = 'Messages';

    protected $fillable = [
        'fullname',
        'email',
        'phone',
        'message',
        'Seen'
    ];
}
