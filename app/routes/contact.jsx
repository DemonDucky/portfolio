import {Typography} from "../components/ui/typography";
import Wrapper from "../components/wrapper";
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card";
import {BsDiscord, BsFacebook, BsInstagram} from "react-icons/bs";
import {Link} from "@remix-run/react";
import {BiLogoUpwork} from "react-icons/bi";
import {TbBrandFiverr} from "react-icons/tb";
import {FaTiktok} from "react-icons/fa";
import ContactForm from "../components/contactForm";

export default function Contact() {

    const socials = [
        {
            link: "https://www.discordapp.com/users/.demonducky",
            icon: <BsDiscord/>,
            text: "Discord"
        },
        {
            link: "https://www.instagram.com/tuan.anhlg",
            icon: <BsInstagram/>,
            text: "Instagram"
        },
        {
            link: "https://www.facebook.com/vit.conn",
            icon: <BsFacebook/>,
            text: "Facebook"
        },
        {
            link: "https://www.tiktok.com/@tuan.miner",
            icon: <FaTiktok/>,
            text: "Tiktok"
        },
        {
            link: "https://www.fiverr.com/demonducky",
            icon: <TbBrandFiverr/>,
            text: "Fiverr"
        },
        {
            link: "https://www.upwork.com/freelancers/tuananhl",
            icon: <BiLogoUpwork/>,
            text: "Upwork"
        }
    ]

    return (
        <div className={"text-center"}>
            <Typography variant={"h1"} className={"mt-16 mb-2"}>Tuan Anh Luong</Typography>
            <Typography variant={"h5"} className={"text-baseBlackText"}>Software Developer & Marketer</Typography>
            <Wrapper className={"mx-auto mt-6 max-w-2xl lg:mt-12"}>
                    <Card className={"mb-4 mx-6"}>
                        <CardHeader>
                            <CardTitle className={"text-baseText"}>My Contact</CardTitle>
                        </CardHeader>
                        <CardContent className={"grid grid-cols-3 gap-4"}>
                            {socials.map(({link, icon, text}, index) => (
                                <ContactItem link={link} icon={icon} key={index}>{text}</ContactItem>
                            ))}
                        </CardContent>
                    </Card>
                    <div>
                        <Typography variant={"h4"}>or</Typography>
                        <ContactForm/>
                    </div>
            </Wrapper>
        </div>
    )
}

function ContactItem({children, icon, link, ...props}) {
    return (
        <Link className={"py-4 flex items-center flex-col hover:bg-baseBackground rounded-lg"} to={link} target={"_blank"}>
            <p {...props} className={"mb-2"}>{children}</p>
            <i>{icon}</i>
        </Link>
    )
}
