import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Accueil from "@/Components/Accueil";
import APropos from "@/Components/APropos";
import Produits from "@/Components/Produits";
import Contact from "@/Components/Contact";
import Messages from "@/Components/Messages";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [isActive, setIsActive] = useState("Accueil");

    return (
        <>
            <Head title="Dashboard" />

            <div className="text-gray-800 font-inter">
                <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
                    <a
                        href="#"
                        className="flex items-center pb-4 border-b border-b-gray-800"
                    >
                        <h2 className="font-bold text-2xl">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </h2>
                    </a>
                    <ul className="mt-4">
                        <span className="text-gray-400 font-bold uppercase">
                            Pages
                        </span>
                        <li className="mb-1 group">
                            <span
                                href=""
                                className={`${
                                    isActive == "Accueil"
                                        ? "text-gray-100 bg-red-600"
                                        : ""
                                } flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-red-600 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100`}
                                onClick={() => setIsActive("Accueil")}
                            >
                                <i className="ri-home-2-line mr-3 text-lg"></i>
                                <span className="text-sm">Accueil</span>
                            </span>
                        </li>
                        <li className="mb-1 group">
                            <span
                                href=""
                                className={`${
                                    isActive == "A-propos"
                                        ? "text-gray-100 bg-red-600"
                                        : ""
                                } flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-red-600 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100`}
                                onClick={() => setIsActive("A-propos")}
                            >
                                <i className="bx bx-user mr-3 text-lg"></i>
                                <span className="text-sm">
                                    {" "}
                                    <span className="uppercase">à</span>-propos
                                </span>
                                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                            </span>
                        </li>
                        <li className="mb-1 group">
                            <span
                                href=""
                                className={`${
                                    isActive == "Produits"
                                        ? "text-gray-100 bg-red-600"
                                        : ""
                                } flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-red-600 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100`}
                                onClick={() => setIsActive("Produits")}
                            >
                                <i className="bx bx-list-ul mr-3 text-lg"></i>
                                <span className="text-sm">Produits</span>
                            </span>
                        </li>
                        <li className="mb-1 group">
                            <span
                                href=""
                                className={`${
                                    isActive == "Contact"
                                        ? "text-gray-100 bg-red-600"
                                        : ""
                                } flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-red-600 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100`}
                                onClick={() => setIsActive("Contact")}
                            >
                                <i className="bx bx-list-ul mr-3 text-lg"></i>
                                <span className="text-sm">Contact</span>
                            </span>
                        </li>

                        <span className="text-gray-400 font-bold">
                            PERSONAL
                        </span>

                        <li className="mb-1 group">
                            <span
                                href=""
                                className={`${
                                    isActive == "Messages"
                                        ? "text-gray-100 bg-red-600"
                                        : ""
                                } flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-red-600 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100`}
                                onClick={() => setIsActive("Messages")}
                            >
                                <i className="bx bx-envelope mr-3 text-lg"></i>
                                <span className="text-sm">Demande de Contact</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>

                <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
                    <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                        <button
                            type="button"
                            className="text-lg text-gray-900 font-semibold sidebar-toggle"
                        >
                            <i className="ri-menu-line"></i>
                        </button>

                        <ul className="ml-auto flex items-center">
                            <div className="flex h-16 justify-between">
                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <div className="relative ms-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                    >
                                                        {user.name}

                                                        <svg
                                                            className="-me-0.5 ms-2 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-me-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            {/* <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            /> */}
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div
                                className={
                                    (showingNavigationDropdown
                                        ? "block"
                                        : "hidden") + " sm:hidden"
                                }
                            >
                                <div className="space-y-1 pb-3 pt-2">
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Dashboard
                                    </ResponsiveNavLink>
                                </div>

                                <div className="border-t border-gray-200">
                                    <div className="mt-3 space-y-1">
                                        <ResponsiveNavLink
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            method="post"
                                            href={route("logout")}
                                            as="button"
                                        >
                                            Log Out
                                        </ResponsiveNavLink>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="p-6">
                        {isActive === "Accueil" && <Accueil />}
                        {isActive === "A-propos" && <APropos />}
                        {isActive === "Produits" && <Produits />}
                        {isActive === "Contact" && <Contact />}
                        {isActive === "Messages" && <Messages />}
                    </div>
                </main>
            </div>
        </>
    );
}
