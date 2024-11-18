import image from "../../assets/icons8-image-100.png";
import image_cards from "../../assets/cards.png";
import { useEffect, useState } from "react";
import axios from "axios";

const APropos = () => {
    const [about, setAbout] = useState({

    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/about");
                if (response.data) {
                    setAbout(response.data[0]);
                }
            } catch (error) {
                console.error("Error fetching about data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAbout((prevContact) => ({
            ...prevContact,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/about/${about.id}`, about);
            if (response.status === 200) {
                alert("about page updated successfully!");
            }
        } catch (error) {
            console.error("Error updating about:", error);
        }
    };
    return (
        <form className="w-full h-max flex flex-col items-center" onSubmit={handleSubmit}>
            {/* Qui Sommes-Nous */}
            <div>
                <form className="w-full flex flex-col items-center justify-center h-max p-5 bg-[#fffefb] rounded-md">
                    <label
                        for="email"
                        className="block mb-2 text-4xl font-black text-gray-900 text-center"
                    >
                        Titre
                    </label>

                    <input
                        onChange={handleChange}
                        value={about.Title_1}
                        type="text"
                        id="Title_1"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-1/2 p-2.5  mb-5"
                        placeholder="Titre"
                    />
                    <label
                        for="email"
                        className="block mb-2 text-4xl font-black text-gray-900 text-center"
                    >
                        Description
                    </label>

                    <input
                        onChange={handleChange}
                        value={about.Description_1}
                        type="text"
                        id="Description_1"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                        placeholder="Description"
                    />
                </form>

                <div className="w-full justify-between bg-transparent flex flex-row-reverse mt-6  gap-5">
                    <span>
                        <form className=" h-[22.1rem] p-2 overflow-hidden bg-[#fffefb] rounded-md">
                            <img
                                className="w-[38vw] h-[22.1rem]"
                                src={image_cards}
                                alt=""
                            />
                        </form>
                    </span>
                    <span>
                        <span className="w-[39vw] flex flex-col  justify-center h-[22rem] p-2 bg-[#fffefb] rounded-md">
                            <label
                                for="email"
                                className="block mb-2 text-xl font-bold text-gray-900 "
                            >
                                Titre
                            </label>
                            <input
                                onChange={handleChange}
                                value={about.Title_2}
                                type="text"
                                id="Title_2"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                                placeholder="Titre1"
                            />
                            <label
                                for="email"
                                className="block mb-2 text-xl font-bold text-gray-900 "
                            >
                                Description
                            </label>
                            <input
                                onChange={handleChange}
                                value={about.Description_2}
                                type="text"
                                id="Description_2"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                                placeholder="Description"
                            />
                            <img className="self-center" src={image} alt="" />
                        </span>
                    </span>
                </div>
            </div>

            {/* Nos Domaines D'expansion */}
            <div className="w-full flex flex-col mt-6">
                <div className="w-full flex items-center gap-5 mt-6">
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/4">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Title_3}
                            type="text"
                            id="Title_3"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Titre"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Description_3}
                            type="text"
                            id="Description_3"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description"
                        />
                    </span>
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/4">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Title_4}
                            type="text"
                            id="Title_4"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Titre"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Description_4}
                            type="text"
                            id="Description_4"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description"
                        />
                    </span>
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/4">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Title_5}
                            type="text"
                            id="Title_5"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Titre"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Description_5}
                            type="text"
                            id="Description_5"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description"
                        />
                    </span>
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/4">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Title_6}
                            type="text"
                            id="Title_6"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Titre"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description
                        </label>
                        <input
                            onChange={handleChange}
                            value={about.Description_6}
                            type="text"
                            id="Description_6"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description"
                        />
                    </span>
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 w-max text-white hover:bg-blue-400 active:scale-90 font-bold py-2 px-4 rounded"
            >
                Enregistrer les modifications
            </button>
        </form>
    );
};

export default APropos;
