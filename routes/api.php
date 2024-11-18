<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AccueilController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\ProductsController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});

// Define the API route for sending contact messages
Route::post('/contact', [ContactController::class, 'sendContactEmail']);


Route::get('/contacts', [ContactController::class, 'getAll']);
Route::put('/contacts/{id}', [ContactController::class, 'update']);
Route::post('/contacts', [ContactController::class, 'create']);

Route::get('/about', [AboutController::class, 'getAll']);
Route::put('/about/{id}', [AboutController::class, 'update']);
Route::post('/about', [AboutController::class, 'create']);

Route::get('/accueil', [AccueilController::class, 'getAll']);
Route::put('/accueil/{id}', [AccueilController::class, 'update']);
Route::post('/accueil', [AccueilController::class, 'create']);

Route::get('/message', [MessagesController::class, 'getAll']);
Route::put('/message/{id}', [MessagesController::class, 'update']);
Route::post('/message', [MessagesController::class, 'create']);

Route::get('/products', [ProductsController::class, 'getAll']);
Route::put('/products/{id}', [ProductsController::class, 'update']);
Route::post('/products', [ProductsController::class, 'create']);
