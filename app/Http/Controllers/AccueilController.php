<?php

namespace App\Http\Controllers;

use App\Models\Accueil;
use Illuminate\Http\Request;

class AccueilController extends Controller
{
    public function getAll()
    {
        $accueil = Accueil::all();
        return response()->json($accueil);
    }

    // Update a specific about
    public function update(Request $request, $id)
    {
        $accueil = Accueil::find($id);

        if (!$accueil) {
            return response()->json(['message' => 'Content not found'], 404);
        }

        // Validate the input data
        $request->validate([

            'Title_1' => 'nullable|string',
            'Description_1' => 'nullable|string',
            'Description_2' => 'nullable|string',
            'Card_1_Title' => 'nullable|string',
            'Card_1_Description' => 'nullable|string',
            'Card_2_Title' => 'nullable|string',
            'Card_2_Description' => 'nullable|string',
            'Youtube_video_src' => 'nullable|string',
            'Title_2' => 'nullable|string',
            'Description_3' => 'nullable|string',
            'Title_3' => 'nullable|string',
            'Description_4' => 'nullable|string',
            'Card_3_Title' => 'nullable|string',
            'Card_3_Description' => 'nullable|string',
            'Card_4_Title' => 'nullable|string',
            'Card_4_Description' => 'nullable|string',
            'Title_4' => 'nullable|string',
            'Description_5' => 'nullable|string',
            'Title_5' => 'nullable|string',
            'Title_6' => 'nullable|string',
            'Card_5_Title' => 'nullable|string',
            'Card_5_Description' => 'nullable|string',
            'Card_6_Title' => 'nullable|string',
            'Card_6_Description' => 'nullable|string',
            'Card_7_Title' => 'nullable|string',
            'Card_7_Description' => 'nullable|string',
            'Title_7' => 'nullable|string',
            'Description_6' => 'nullable|string',
            'Title_8' => 'nullable|string',
            'Description_7' => 'nullable|string',
            'Title_9' => 'nullable|string',
            'Description_8' => 'nullable|string',
            'Title_10' => 'nullable|string',
            'Description_9' => 'nullable|string',
            'Title_11' => 'nullable|string',
            'Description_10' => 'nullable|string',
            'Title_12' => 'nullable|string',
            'Description_11' => 'nullable|string',
            'Title_13' => 'nullable|string',
            'Description_12' => 'nullable|string',
        ]);

        // Update the contact fields
        $accueil->update($request->all());

        return response()->json(['message' => 'Content updated successfully', 'Content' => $accueil]);
    }

    public function create(Request $request)
    {
        // Validate the input data
        $request->validate([
            'Title_1' => 'nullable|string',
            'Description_1' => 'nullable|string',
            'Description_2' => 'nullable|string',
            'Card_1_Title' => 'nullable|string',
            'Card_1_Description' => 'nullable|string',
            'Card_2_Title' => 'nullable|string',
            'Card_2_Description' => 'nullable|string',
            'Youtube_video_src' => 'nullable|string',
            'Title_2' => 'nullable|string',
            'Description_3' => 'nullable|string',
            'Title_3' => 'nullable|string',
            'Description_4' => 'nullable|string',
            'Card_3_Title' => 'nullable|string',
            'Card_3_Description' => 'nullable|string',
            'Card_4_Title' => 'nullable|string',
            'Card_4_Description' => 'nullable|string',
            'Title_4' => 'nullable|string',
            'Description_5' => 'nullable|string',
            'Title_5' => 'nullable|string',
            'Title_6' => 'nullable|string',
            'Card_5_Title' => 'nullable|string',
            'Card_5_Description' => 'nullable|string',
            'Card_6_Title' => 'nullable|string',
            'Card_6_Description' => 'nullable|string',
            'Card_7_Title' => 'nullable|string',
            'Card_7_Description' => 'nullable|string',
            'Title_7' => 'nullable|string',
            'Description_6' => 'nullable|string',
            'Title_8' => 'nullable|string',
            'Description_7' => 'nullable|string',
            'Title_9' => 'nullable|string',
            'Description_8' => 'nullable|string',
            'Title_10' => 'nullable|string',
            'Description_9' => 'nullable|string',
            'Title_11' => 'nullable|string',
            'Description_10' => 'nullable|string',
            'Title_12' => 'nullable|string',
            'Description_11' => 'nullable|string',
            'Title_13' => 'nullable|string',
            'Description_12' => 'nullable|string',
        ]);

        // Create a new contact
        $accueil = Accueil::create($request->all());

        return response()->json(['message' => 'Content created successfully', 'Content' => $accueil], 201);
    }
}
