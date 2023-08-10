import {cssBundleHref} from "@remix-run/css-bundle";

import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";

import styles from "./tailwind.css"
import HeaderItem from "./components/headerItem";
import React from "react";
import {Typography} from "./components/ui/typography";

export const links = () => [
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []), {
        rel: "stylesheet",
        href: styles
    }, {rel: "icon", type: "image/x-icon", sizes: "120x120", href: "/favicon.svg"}
];

export const meta = () => {
    return [
        {title: "Tuan Anh Luong"},
        {name: "description", content: "I'm a software developer focusing on JS, TS & Kotlin!"},
        {property: "og:image", content: "/images/og_image.png"},
        {property: "og:title", content: "Tuan Anh Luong"},
        {property: "og:description", content: "I'm a software developer focusing on JS, TS & Kotlin!"},

    ];
};

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className={"font-normal-text text-baseText bg-baseBackground"}>
        <header>
            <nav className={"lg:hidden px-4 py-2 bg-baseBackground fixed w-full place-items-center grid grid-cols-3 gap-x-2 rounded-b-lg h-16"}>
                <HeaderItem link={"/"}>Home</HeaderItem>
                <HeaderItem link={"/about"}>About</HeaderItem>
                <HeaderItem link={"/contact"}>Contact</HeaderItem>
            </nav>
            <nav className={"hidden lg:flex px-4 py-2 bg-baseBackground fixed w-full rounded-b-lg h-16 justify-between items-center"}>
                <Typography variant={"h5"}>luong.tuananh.biz@gmail.com</Typography>
                <Typography variant={"h5"}>Tuan Anh Luong</Typography>
                <div className={"h-full"}>
                    <HeaderItem link={"/"}>Home</HeaderItem>
                    <HeaderItem link={"/about"}>About</HeaderItem>
                    <HeaderItem link={"/contact"}>Contact</HeaderItem>
                </div>
            </nav>
            <div className={"h-16"}></div>
        </header>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}

