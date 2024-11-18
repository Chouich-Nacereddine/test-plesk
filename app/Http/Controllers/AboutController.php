<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    // Get all About
    public function getAll()
    {
        $about = About::all();
        return response()->json($about);
    }

    // Update a specific about
    public function update(Request $request, $id)
    {
        $about = About::find($id);

        if (!$about) {
            return response()->json(['message' => 'Content not found'], 404);
        }

        // Validate the input data
        $request->validate([
            'Title_1' => 'nullable|string',
            'Description_1' => 'nullable|string',
            'Title_2' => 'nullable|string',
            'Description_2' => 'nullable|string',
            'Title_3' => 'nullable|string',
            'Description_3' => 'nullable|string',
            'Title_4' => 'nullable|string',
            'Description_4' => 'nullable|string',
            'Title_5' => 'nullable|string',
            'Description_5' => 'nullable|string',
            'Title_6' => 'nullable|string',
            'Description_6' => 'nullable|string',
        ]);

        // Update the contact fields
        $about->update($request->all());

        return response()->json(['message' => 'Content updated successfully', 'Content' => $about]);
    }

    public function create(Request $request)
    {
        // Validate the input data
        $request->validate([
            'Title_1' => 'nullable|string',
            'Description_1' => 'nullable|string',
            'Title_2' => 'nullable|string',
            'Description_2' => 'nullable|string',
            'Title_3' => 'nullable|string',
            'Description_3' => 'nullable|string',
            'Title_4' => 'nullable|string',
            'Description_4' => 'nullable|string',
            'Title_5' => 'nullable|string',
            'Description_5' => 'nullable|string',
            'Title_6' => 'nullable|string',
            'Description_6' => 'nullable|string',
        ]);

        // Create a new contact
        $about = About::create($request->all());

        return response()->json(['message' => 'Content created successfully', 'Content' => $about], 201);
    }
}
