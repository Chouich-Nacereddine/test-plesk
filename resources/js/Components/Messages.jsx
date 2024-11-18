import axios from "axios";
import { useEffect, useState } from "react";

const Messages = () => {
    const [isClicked, setIsClicked] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/message");
                if (response.data) {
                    setMessages(response.data);
                }
            } catch (error) {
                console.error("Error fetching messages data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSeen = async (message, index) => {
        try {
            setIsClicked(index);

            const response = await axios.put(`/api/message/${message.id}`, {
                Seen: true,
            });

            if (response.status === 200) {
                // Update local state only if the update was successful
                setMessages((prevMessages) =>
                    prevMessages.map((msg, i) =>
                        i === index ? { ...msg, Seen: true } : msg
                    )
                );
            } else {
                console.error("Failed to update 'Seen' status in the database");
            }
        } catch (error) {
            console.error("Error updating message 'Seen' status:", error);
        }
    };

    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day}   ${hours}:${minutes}`;
    };

    return (
        <div className="w-full h-max flex flex-col-reverse">
            {messages.map((message, index) => (
                <div className="mt-2" key={index}>
                    <button
                        onClick={() => handleSeen(message, index)}
                        type="button"
                        className={`flex items-center justify-between w-full p-5 rtl:text-right bg-[#fffefb] ${
                            message.Seen
                                ? "text-gray-500 font-medium"
                                : "text-black font-black"
                        } border border-b-0 border-gray-200 rounded-t-2xl`}
                    >
                        <span>{message.email}</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isClicked === index
                                ? "block border-t rounded-b-xl"
                                : "hidden"
                        } bg-[#fffefb] w-full`}
                    >
                        <div className="p-5 relative">
                            <h3 className="absolute top-5 right-5 text-blue-500">
                                {formatDate(message.created_at)}
                            </h3>
                            <h1 className="text-lg font-bold text-blue-600">
                                De : {message.fullname}.
                            </h1>
                            <h2 className="text-lg font-bold text-blue-600">
                                Téléphone : {message.phone}
                            </h2>
                            <p className="">
                                <span className="text-blue-600 font-bold ">
                                    Message :{" "}
                                </span>
                                <br /> <br />
                                <span className="px-20">{message.message}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Messages;
