import {Typography} from "../components/ui/typography";
import Wrapper from "../components/wrapper";

export default function About() {
    return (
        <div>
            <Typography variant={"h1"} className={"text-center mt-16 mb-32"}>About Me</Typography>
            <Wrapper className={"lg:w-full max-w-7xl lg:mx-auto text-baseBlackText"}>
                <Typography variant={"p"}>
                    I'm Tuan Anh Luong, a passionate web developer from Viet Nam.
                </Typography>
                <Typography variant={"p"}>
                    I provide many common services for custom website, Shopify & Minecraft server. My target is to make
                    sure that all my products are smooth, beauty design and have a good UX.
                </Typography>
                <Typography variant={"p"}>
                    I'm currently only focus on React and framework built on on top of React, like Remix.js & Next.js.
                </Typography>
                <Typography variant={"p"}>
                    With Minecraft plugin development, I'm using Kotlin as the main programming language to make sure it
                    has
                    as little as possible problem at runtime.
                </Typography>
            </Wrapper>
        </div>
    )
}