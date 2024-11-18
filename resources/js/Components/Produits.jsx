import { useEffect, useState } from "react";
import image from "../../assets/icons8-image-100.png";
import axios from "axios";

const Produits = () => {
    const [produits, setProduits] = useState({
        Title_1: "",
        Card_1: "",
        Card_2: "",
        Capacité_1: "",
        Description_1: "",

        Title_2: "",
        Card_3: "",
        Card_4: "",
        Capacité_2: "",
        Description_2: "",

        Title_3: "",
        Card_5: "",
        Card_6: "",
        Capacité_3: "",
        Description_3: "",

        Title_4: "",
        Description_4: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/products");
                if (response.data) {
                    setProduits(response.data[0]);
                }
            } catch (error) {
                console.error("Error fetching products data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProduits((prevContact) => ({
            ...prevContact,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `/api/products/${produits.id}`,
                produits
            );
            if (response.status === 200) {
                alert("Products page updated successfully!");
            }
        } catch (error) {
            console.error("Error updating Products:", error);
        }
    };
    return (
        <form className="w-full h-max flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full justify-between bg-transparent flex flex-row-reverse  gap-5">
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
                            value={produits.Title_1}
                            type="text"
                            id="Title_1"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                            placeholder="Titre1"
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
                                    onChange={handleChange}
                                    value={produits.Card_1}
                                    type="text"
                                    id="Card_1"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card 1"
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
                                    onChange={handleChange}
                                    value={produits.Card_2}
                                    type="text"
                                    id="Card_2"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card 2"
                                />
                            </span>
                        </div>
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900  mt-6"
                        >
                            Capacité
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Capacité_1}
                            type="text"
                            id="Capacité_1"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Capacité"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Description_1}
                            type="text"
                            id="Description_1"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description 2"
                        />
                    </form>
                </span>
                <span>
                    <form className="w-[39vw] flex flex-col items-center justify-center h-96 p-2 bg-[#fffefb] rounded-md">
                        <img src={image} alt="" />
                    </form>
                </span>
            </div>

            <div className="w-full justify-between bg-transparent flex  gap-5 mt-6">
                <span>
                    <form className="w-[39vw] p-2 bg-[#fffefb] rounded-md">
                        <label
                            for="email"
                            className="block mb-2 text-xl font-bold text-gray-900 "
                        >
                            Titre
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Title_2}
                            type="text"
                            id="Title_2"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                            placeholder="Titre1"
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
                                    onChange={handleChange}
                                    value={produits.Card_3}
                                    type="text"
                                    id="Card_3"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card 1"
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
                                    onChange={handleChange}
                                    value={produits.Card_4}
                                    type="text"
                                    id="Card_4"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card 2"
                                />
                            </span>
                        </div>
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900  mt-6"
                        >
                            Capacité
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Capacité_2}
                            type="text"
                            id="Capacité_2"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Capacité"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description 2
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Description_2}
                            type="text"
                            id="Description_2"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description 2"
                        />
                    </form>
                </span>
                <span>
                    <form className="w-[38vw] flex flex-col items-center justify-center h-96 p-2 bg-[#fffefb] rounded-md">
                        <img src={image} alt="" />
                    </form>
                </span>
            </div>

            <div className="w-full justify-between bg-transparent flex flex-row-reverse  gap-5 mt-6">
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
                            value={produits.Title_3}
                            type="text"
                            id="Title_3"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                            placeholder="Titre1"
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
                                    onChange={handleChange}
                                    value={produits.Card_5}
                                    type="text"
                                    id="Card_5"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card 1"
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
                                    onChange={handleChange}
                                    value={produits.Card_6}
                                    type="text"
                                    id="Card_6"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                                    placeholder="Card 2"
                                />
                            </span>
                        </div>
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900  mt-6"
                        >
                            Capacité
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Capacité_3}
                            type="text"
                            id="Capacité_3"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Capacité"
                        />
                        <label
                            for="email"
                            className="block mb-2 text-base font-bold text-gray-900 "
                        >
                            Description 2
                        </label>
                        <input
                            onChange={handleChange}
                            value={produits.Description_3}
                            type="text"
                            id="Description_3"
                            aria-describedby="helper-text-explanation"
                            className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  "
                            placeholder="Description 2"
                        />
                    </form>
                </span>
                <span>
                    <form className="w-[39vw] flex flex-col items-center justify-center h-96 p-2 bg-[#fffefb] rounded-md">
                        <img src={image} alt="" />
                    </form>
                </span>
            </div>

            <div className="mt-6 w-full">
                <form className="w-full flex flex-col items-start justify-center h-max p-5 bg-[#fffefb] rounded-md">
                    <label
                        for="email"
                        className="block mb-2 text-4xl font-black text-gray-900 text-center"
                    >
                        Titre
                    </label>

                    <input
                        onChange={handleChange}
                        value={produits.Title_4}
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
                        onChange={handleChange}
                        value={produits.Description_4}
                        type="text"
                        id="Description_4"
                        aria-describedby="helper-text-explanation"
                        className="bg-[#f5f4f1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  mb-5"
                        placeholder="Description"
                    />
                </form>
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

export default Produits;
