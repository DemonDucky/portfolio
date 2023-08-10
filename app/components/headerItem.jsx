import {NavLink} from "@remix-run/react";

export default function HeaderItem({children, link}) {

    return (
        <NavLink className={({isActive}) => (
            isActive ? "text-pink-600 inline-block" : "inline-block"
        )} to={link}>
            <p className={"px-4 mx-4 py-2 text-lg h-full text-center lg:hover:bg-gray-100 rounded-lg"}>
                {children}
            </p>
        </NavLink>
    )

}