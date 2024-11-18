<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Contact;

class ContactController extends Controller
{


    // Get all contacts
    public function getAll()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    // Update a specific contact
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }

        // Validate the input data
        $request->validate([
            'phone_number_1' => 'nullable|string',
            'phone_number_2' => 'nullable|string',
            'contact_email' => 'nullable|email',
            'admin_email' => 'nullable|email',
            'address' => 'nullable|string',
            'linkedin_profile' => 'nullable|url',
            'instagram_profile' => 'nullable|url',
            'facebook_profile' => 'nullable|url',
            'youtube_profile' => 'nullable|url',
        ]);

        // Update the contact fields
        $contact->update($request->all());

        return response()->json(['message' => 'Contact updated successfully', 'contact' => $contact]);
    }
    public function sendContactEmail(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        // Prepare the data for the email
        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'message' => $request->input('message'),
        ];

        $receiverEmail = env('MAIL_RECEIVER', 'contact@foodlink.ma');


        // Send the email
        Mail::send('emails.contact', ['data' => $data], function ($message) use ($data, $receiverEmail) {
            $message->to($receiverEmail)
                ->subject('New Contact Message')
                ->from($data['email'], $data['name']);
        });

        return response()->json(['message' => 'Email sent successfully!']);
    }



    public function create(Request $request)
    {
        // Validate the input data
        $request->validate([
            'phone_number_1' => 'required|string',
            'phone_number_2' => 'nullable|string',
            'contact_email' => 'required|email',
            'admin_email' => 'required|email',
            'address' => 'nullable|string',
            'linkedin_profile' => 'nullable|url',
            'instagram_profile' => 'nullable|url',
            'facebook_profile' => 'nullable|url',
            'youtube_profile' => 'nullable|url',
        ]);

        // Create a new contact
        $contact = Contact::create($request->all());

        return response()->json(['message' => 'Contact created successfully', 'contact' => $contact], 201);
    }
}
