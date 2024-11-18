import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
    const [contact, setContact] = useState({
        phone_number_1: "",
        phone_number_2: "",
        contact_email: "",
        admin_email: "",
        address: "",
        linkedin_profile: "",
        instagram_profile: "",
        facebook_profile: "",
        youtube_profile: "",
    });

    useEffect(() => {
        // Fetch the contact data when the component mounts
        const fetchContactData = async () => {
            try {
                const response = await axios.get("/api/contacts"); // Adjust the API endpoint as needed
                if (response.data) {
                    setContact(response.data[0]);
                }
            } catch (error) {
                console.error("Error fetching contact data:", error);
            }
        };

        fetchContactData();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `/api/contacts/${contact.id}`,
                contact
            ); // Adjust the API endpoint as needed
            if (response.status === 200) {
                alert("Contact updated successfully!");
                // Optionally, fetch the updated contact data again
                // fetchContactData();
            }
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

    return (
        <form className="w-full h-max bg-[#fffefb] flex flex-col p-5 rounded-md" onSubmit={handleSubmit}>
            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                Numéro de téléphone
            </label>
            <input
                type="text"
                id="phone_number_1"
                value={contact.phone_number_1}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="phone_number_1"
            />
            <input
                type="text"
                id="phone_number_2"
                value={contact.phone_number_2}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="phone_number_2"
            />

            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                E-mails
            </label>
            <input
                type="text"
                id="contact_email"
                value={contact.contact_email}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="contact_email"
            />
            <input
                type="text"
                id="admin_email"
                value={contact.admin_email}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="admin_email"
            />
            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                Address
            </label>
            <input
                type="text"
                id="admin_email"
                value={contact.address}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="admin_email"
            />

            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                Linkedin
            </label>
            <input
                type="text"
                id="linkedin_profile"
                value={contact.linkedin_profile}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="linkedin_profile"
            />
            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                Instagram
            </label>
            <input
                type="text"
                id="instagram_profile"
                value={contact.instagram_profile}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="instagram_profile"
            />
            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                Facebook
            </label>
            <input
                type="text"
                id="facebook_profile"
                value={contact.facebook_profile}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="facebook_profile"
            />
            <label
                for="email"
                className="block mb-2 text-xl font-bold text-gray-900 "
            >
                Youtube
            </label>
            <input
                type="text"
                id="youtube_profile"
                value={contact.youtube_profile}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                placeholder="youtube_profile"
            />

            <button
                type="submit"
                className="mt-4 bg-blue-600 w-max text-white hover:bg-blue-400 active:scale-90 font-bold py-2 px-4 rounded"
            >
                Enregistrer les modifications
            </button>
        </form>
    );
};

export default Contact;
