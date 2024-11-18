import { useEffect, useState } from "react";
import image from "../../assets/icons8-image-100.png";
import axios from "axios";

const Accueil = () => {
    const [accueil, setAccueil] = useState({
        Title_1: "",
        Description_1: "",
        Description_2: "",
        Card_1_Title: "",
        Card_1_Description: "",
        Card_2_Title: "",
        Card_2_Description: "",
        Youtube_video_src: "",
        Title_2: "",
        Description_3: "",
        Title_3: "",
        Description_4: "",
        Card_3_Title: "",
        Card_3_Description: "",
        Card_4_Title: "",
        Card_4_Description: "",
        Title_4: "",
        Description_5: "",
        Title_5: "",
        Title_6: "",
        Card_5_Title: "",
        Card_5_Description: "",
        Card_6_Title: "",
        Card_6_Description: "",
        Card_7_Title: "",
        Card_7_Description: "",
        Title_7: "",
        Description_6: "",
        Title_8: "",
        Description_7: "",
        Title_9: "",
        Description_8: "",
        Title_10: "",
        Description_9: "",
        Title_11: "",
        Description_10: "",
        Title_12: "",
        Description_11: "",
        Title_13: "",
        Description_12: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/accueil");
                if (response.data) {
                    setAccueil(response.data[0]);
                }
            } catch (error) {
                console.error("Error fetching accueil data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAccueil((prevContact) => ({
            ...prevContact,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `/api/accueil/${accueil.id}`,
                accueil
            );
            if (response.status === 200) {
                alert("Accueil updated successfully!");
            }
        } catch (error) {
            console.error("Error updating Accueil:", error);
        }
    };
    return (
        <form
            className="w-full h-max flex flex-col items-center"
            onSubmit={handleSubmit}
        >
            {/* HeroSection */}
            <div className="w-full justify-between bg-transparent flex  gap-5">
                <span>
                    <form className="w-[38vw] p-2 bg-[#fffefb] rounded-md">
                        <label
                            for="email"
                            className="block mb-2 text-xl font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            onChange={handleChange}
                            value={accueil.Title_1}
                            type="text"
                            id="Title_1"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                            placeholder="Titre1"
                        />

                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description 1
                        </label>
                        <input
                            value={accueil.Description_1}
                            onChange={handleChange}
                            type="text"
                            id="Description_1"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description_1"
                        />

                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description 2
                        </label>
                        <input
                            value={accueil.Description_2}
                            onChange={handleChange}
                            type="text"
                            id="Description_2"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description_2"
                        />

                        <div className="w-full flex justify-center gap-5 mt-5">
                            <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                <label
                                    for="email"
                                    className="block mb-2 text-base font-bold text-gray-900 "
                                >
                                    Card 1
                                </label>
                                <input
                                    value={accueil.Card_1_Title}
                                    onChange={handleChange}
                                    type="text"
                                    id="Card_1_Title"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card_1_Title"
                                />
                                <input
                                    value={accueil.Card_1_Description}
                                    onChange={handleChange}
                                    type="text"
                                    id="Card_1_Description"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                    placeholder="Card_1_Description"
                                />
                            </span>
                            <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                <label
                                    for="email"
                                    className="block mb-2 text-base font-bold text-gray-900 "
                                >
                                    Card 2
                                </label>
                                <input
                                    value={accueil.Card_2_Title}
                                    onChange={handleChange}
                                    type="text"
                                    id="Card_2_Title"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card_2_Title"
                                />
                                <input
                                    value={accueil.Card_2_Description}
                                    onChange={handleChange}
                                    type="text"
                                    id="Card_2_Description"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                    placeholder="Card_2_Description"
                                />
                            </span>
                        </div>
                    </form>
                </span>
                <span>
                    <form className="w-[39vw] flex flex-col items-center justify-center h-[26.6rem] p-2 bg-[#fffefb] rounded-md">
                        {/* <label
                            for="email"
                            className="block mb-2 text-4xl font-black text-gray-900 text-center"
                        >
                            Video
                        </label> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#FF3D00"
                                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                            ></path>
                            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                        <input
                            value={accueil.Youtube_video_src}
                            onChange={handleChange}
                            type="text"
                            id="Video"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                            placeholder="Video Integration src"
                        />
                    </form>
                </span>
            </div>

            {/* Qui Sommes-Nous */}
            <div className="my-6">
                <form className="w-full flex flex-col items-center justify-center h-max p-5 bg-[#fffefb] rounded-md">
                    <label
                        for="email"
                        className="block mb-2 text-4xl font-black text-gray-900 text-center"
                    >
                        Titre
                    </label>

                    <input
                        value={accueil.Title_2}
                        onChange={handleChange}
                        type="text"
                        id="Title_2"
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
                        value={accueil.Description_3}
                        onChange={handleChange}
                        type="text"
                        id="Description_3"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                        placeholder="Description"
                    />
                </form>

                <div className="w-full justify-between bg-transparent flex flex-row-reverse mt-6  gap-5">
                    <span>
                        <form className="w-[38vw] p-2 bg-[#fffefb] rounded-md">
                            <label
                                for="email"
                                className="block mb-2 text-xl font-bold text-gray-900 "
                            >
                                Titre
                            </label>
                            <input
                                value={accueil.Title_3}
                                onChange={handleChange}
                                type="text"
                                id="Title_3"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                                placeholder="Titre1"
                            />

                            <label
                                for="email"
                                className="block mb-2 text-base font-bold text-gray-900 "
                            >
                                Description 1
                            </label>
                            <input
                                value={accueil.Description_4}
                                onChange={handleChange}
                                type="text"
                                id="Description_4"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                placeholder="Description 1"
                            />

                            <div className="w-full flex justify-center gap-5 mt-5">
                                <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                    <label
                                        for="email"
                                        className="block mb-2 text-base font-bold text-gray-900 "
                                    >
                                        Card
                                    </label>
                                    <input
                                        value={accueil.Card_3_Title}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_3_Title"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                        placeholder="Card 1"
                                    />
                                    <input
                                        value={accueil.Card_3_Description}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_3_Description"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                        placeholder="Card"
                                    />
                                </span>
                                <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                    <label
                                        for="email"
                                        className="block mb-2 text-base font-bold text-gray-900 "
                                    >
                                        Card 2
                                    </label>
                                    <input
                                        value={accueil.Card_4_Title}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_4_Title"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                        placeholder="Card"
                                    />
                                    <input
                                        value={accueil.Card_4_Description}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_4_Description"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                        placeholder="Card 2 Description"
                                    />
                                </span>
                            </div>
                        </form>
                    </span>
                    <span>
                        <span className="w-[39vw] flex flex-col items-center justify-center h-[22rem] p-2 bg-[#fffefb] rounded-md">
                            <img src={image} alt="" />
                        </span>
                    </span>
                </div>
            </div>

            {/* Nos Produits */}
            <div className="my-6">
                <form className="w-full flex flex-col items-center justify-center h-max p-5 bg-[#fffefb] rounded-md">
                    <label
                        for="email"
                        className="block mb-2 text-4xl font-black text-gray-900 text-center"
                    >
                        Titre
                    </label>

                    <input
                        value={accueil.Title_4}
                        onChange={handleChange}
                        type="text"
                        id="Title_4"
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
                        value={accueil.Description_5}
                        onChange={handleChange}
                        type="text"
                        id="Description_5"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                        placeholder="Description"
                    />
                </form>

                <div className="w-full justify-between bg-transparent flex flex-row-reverse mt-6  gap-5">
                    <span>
                        <form className="w-[38vw] p-2 bg-[#fffefb] rounded-md">
                            <label
                                for="email"
                                className="block mb-2 text-xl font-bold text-gray-900 "
                            >
                                Titre 1
                            </label>
                            <input
                                value={accueil.Title_5}
                                onChange={handleChange}
                                type="text"
                                id="Title_5"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                                placeholder="Titre1"
                            />

                            <label
                                for="email"
                                className="block mb-2 text-base font-bold text-gray-900 "
                            >
                                Titre
                            </label>
                            <input
                                value={accueil.Title_6}
                                onChange={handleChange}
                                type="text"
                                id="Title_6"
                                aria-describedby="helper-text-explanation"
                                className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                placeholder="Titre 2"
                            />

                            <div className="w-full flex justify-center gap-5 mt-5">
                                <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                    <label
                                        for="email"
                                        className="block mb-2 text-base font-bold text-gray-900 "
                                    >
                                        Card
                                    </label>
                                    <input
                                        value={accueil.Card_5_Title}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_5_Title"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                        placeholder="Card 1"
                                    />
                                    <input
                                        value={accueil.Card_5_Description}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_5_Description"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                        placeholder="Card"
                                    />
                                </span>
                                <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                    <label
                                        for="email"
                                        className="block mb-2 text-base font-bold text-gray-900 "
                                    >
                                        Card
                                    </label>
                                    <input
                                        value={accueil.Card_6_Title}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_6_Title"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                        placeholder="Card"
                                    />
                                    <input
                                        value={accueil.Card_6_Description}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_6_Description"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                        placeholder="Card"
                                    />
                                </span>
                                <span className="p-3 w-96 bg-[#cccbc8] rounded-md">
                                    <label
                                        for="email"
                                        className="block mb-2 text-base font-bold text-gray-900 "
                                    >
                                        Card
                                    </label>
                                    <input
                                        value={accueil.Card_7_Title}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_7_Title"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                        placeholder="Card"
                                    />
                                    <input
                                        value={accueil.Card_7_Description}
                                        onChange={handleChange}
                                        type="text"
                                        id="Card_7_Description"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mt-1"
                                        placeholder="Card"
                                    />
                                </span>
                            </div>
                        </form>
                    </span>
                    <span>
                        <span className="w-[39vw] flex flex-col items-center justify-center h-[22rem] p-2 bg-[#fffefb] rounded-md">
                            <img src={image} alt="" />
                        </span>
                    </span>
                </div>
            </div>

            {/* Contact carousel */}
            <div className="w-full flex items-center gap-5">
                <span className="bg-[#fffefb] rounded-lg p-3 w-1/3">
                    <label
                        for="email"
                        className="block mb-2 text-base font-bold text-gray-900 "
                    >
                        Titre
                    </label>
                    <input
                        value={accueil.Title_7}
                        onChange={handleChange}
                        type="text"
                        id="Title_7"
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
                        value={accueil.Description_6}
                        onChange={handleChange}
                        type="text"
                        id="Description_6"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                        placeholder="Description"
                    />
                </span>
                <span className="bg-[#fffefb] rounded-lg p-3 w-1/3">
                    <label
                        for="email"
                        className="block mb-2 text-base font-bold text-gray-900 "
                    >
                        Titre
                    </label>
                    <input
                        value={accueil.Title_8}
                        onChange={handleChange}
                        type="text"
                        id="Title_8"
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
                        value={accueil.Description_7}
                        onChange={handleChange}
                        type="text"
                        id="Description_7"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                        placeholder="Description"
                    />
                </span>
                <span className="bg-[#fffefb] rounded-lg p-3 w-1/3">
                    <label
                        for="email"
                        className="block mb-2 text-base font-bold text-gray-900 "
                    >
                        Titre
                    </label>
                    <input
                        value={accueil.Title_9}
                        onChange={handleChange}
                        type="text"
                        id="Title_9"
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
                        value={accueil.Description_8}
                        onChange={handleChange}
                        type="text"
                        id="Description_8"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                        placeholder="Description"
                    />
                </span>
            </div>

            {/* Nos Domaines D'expansion */}
            <div className="w-full flex flex-col mt-6">
                <form className="w-full flex flex-col items-center justify-center h-max p-5 bg-[#fffefb] rounded-md">
                    <label
                        for="email"
                        className="block mb-2 text-4xl font-black text-gray-900 text-center"
                    >
                        Titre
                    </label>

                    <input
                        value={accueil.Title_10}
                        onChange={handleChange}
                        type="text"
                        id="Title_10"
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
                        value={accueil.Description_9}
                        onChange={handleChange}
                        type="text"
                        id="Description_9"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                        placeholder="Description"
                    />
                </form>
                <div className="w-full flex items-center gap-5 mt-6">
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/3">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            value={accueil.Title_11}
                            onChange={handleChange}
                            type="text"
                            id="Title_11"
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
                            value={accueil.Description_10}
                            onChange={handleChange}
                            type="text"
                            id="Description_10"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description"
                        />
                    </span>
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/3">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            value={accueil.Title_12}
                            onChange={handleChange}
                            type="text"
                            id="Title_12"
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
                            value={accueil.Description_11}
                            onChange={handleChange}
                            type="text"
                            id="Description_11"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description"
                        />
                    </span>
                    <span className="bg-[#fffefb] rounded-lg p-3 w-1/3">
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            value={accueil.Title_13}
                            onChange={handleChange}
                            type="text"
                            id="Title_13"
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
                            value={accueil.Description_12}
                            onChange={handleChange}
                            type="text"
                            id="Description_12"
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

export default Accueil;
