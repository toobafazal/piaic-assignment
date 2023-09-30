'use client'
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button"

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "blog",
        title: "Blog",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <div className="md:container md:mx-auto md:px-20 bg-[#C2EFD4]">

            <nav className="w-full flex py-6 justify-between items-center navbar">
                {/* Rivo */}
                <h1 className="text-4xl text-[#224F34] font-normal">Rivo</h1>

                {/* Desktop Navigation */}
                <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={` font-poppins text-[#224F34] uppercase font-normal cursor-pointer text-[22px] ${active === nav.title ? "border-b-2 border-[#224F34]" : "text-dimWhite"
                                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items">
                <Image
                    src="assets/img/Group1.svg"
                    alt="cart"
                    width={50}
                    height={50}
                    className="mx-10 py-1"
                />
                <Button variant="outline">LOGIN</Button>
                </div>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                        width={28}
                        height={28}
                    />

                    {/* Sidebar */}
                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;


