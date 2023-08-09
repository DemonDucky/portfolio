import {Button} from "./ui/button";
import {Link} from "@remix-run/react";

export default function HeaderItem({children, link}) {

    return (
        <Button variant={"ghost"} className={"px-4 mx-4 py-0 h-full"} asChild><Link className={"text-lg"} to={link}>{children}</Link></Button>
    )

}