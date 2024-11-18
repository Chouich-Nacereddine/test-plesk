<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function getAll()
    {
        $products = Products::all();
        return response()->json($products);
    }

    // Update a specific about
    public function update(Request $request, $id)
    {
        $products = Products::find($id);

        if (!$products) {
            return response()->json(['message' => 'Content not found'], 404);
        }

        // Validate the input data
        $request->validate([
            'Title_1' => 'nullable|string',
            'Card_1' => 'nullable|string',
            'Card_2' => 'nullable|string',
            'Capacité_1' => 'nullable|string',
            'Description_1' => 'nullable|string',

            'Title_2' => 'nullable|string',
            'Card_3' => 'nullable|string',
            'Card_4' => 'nullable|string',
            'Capacité_2' => 'nullable|string',
            'Description_2' => 'nullable|string',

            'Title_3' => 'nullable|string',
            'Card_5' => 'nullable|string',
            'Card_6' => 'nullable|string',
            'Capacité_3' => 'nullable|string',
            'Description_3' => 'nullable|string',

            'Title_4' => 'nullable|string',
            'Description_4' => 'nullable|string',
        ]);

        // Update the contact fields
        $products->update($request->all());

        return response()->json(['message' => 'Content updated successfully', 'Content' => $products]);
    }

    public function create(Request $request)
    {
        // Validate the input data
        $request->validate([
            'Title_1' => 'nullable|string',
            'Card_1' => 'nullable|string',
            'Card_2' => 'nullable|string',
            'Capacité_1' => 'nullable|string',
            'Description_1' => 'nullable|string',

            'Title_2' => 'nullable|string',
            'Card_3' => 'nullable|string',
            'Card_4' => 'nullable|string',
            'Capacité_2' => 'nullable|string',
            'Description_2' => 'nullable|string',

            'Title_3' => 'nullable|string',
            'Card_5' => 'nullable|string',
            'Card_6' => 'nullable|string',
            'Capacité_3' => 'nullable|string',
            'Description_3' => 'nullable|string',

            'Title_4' => 'nullable|string',
            'Description_4' => 'nullable|string',
        ]);

        // Create a new contact
        $products = Products::create($request->all());

        return response()->json(['message' => 'Content created successfully', 'Content' => $products], 201);
    }
}
