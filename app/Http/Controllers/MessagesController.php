<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    public function getAll()
    {
        $message = Messages::all();
        return response()->json($message);
    }

    // Update a specific about
    public function update(Request $request, $id)
    {
        $message = Messages::find($id);

        if (!$message) {
            return response()->json(['message' => 'Content not found'], 404);
        }

        // Validate the input data, including 'Seen'
        $request->validate([
            'fullname' => 'nullable|string',
            'email' => 'nullable|string',
            'phone' => 'nullable|string',
            'message' => 'nullable|string',
            'Seen' => 'nullable|boolean',
        ]);

        // Update the contact fields
        $message->update($request->all());

        return response()->json(['message' => 'Content updated successfully', 'Content' => $message]);
    }

    public function create(Request $request)
    {
        // Validate the input data
        $request->validate([
            'fullname' => 'nullable|string',
            'email' => 'nullable|string',
            'phone' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        // Create a new contact
        $message = Messages::create($request->all());

        return response()->json(['message' => 'Content created successfully', 'Content' => $message], 201);

    //     $response = Http::post(url('/api/contact'), [
    //         'name' => $request->input('fullname'),
    //         'email' => $request->input('email'),
    //         'phone' => $request->input('phone'),
    //         'message' => $request->input('message'),
    //     ]);

    //     return response()->json([
    //         'message' => 'Content created successfully, and email sent!',
    //         'Content' => $message,
    //         'email_status' => $response->json()
    //     ], 201);
    }
}
