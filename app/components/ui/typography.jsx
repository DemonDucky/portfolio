import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "lib/utils"
import { Slot } from "@radix-ui/react-slot"

const typographyVariants = cva("font-newyork", {
    variants: {
        variant: {
            h1: "scroll-m-20 text-6xl font-extrabold tracking-wide ",
            h2:
                "scroll-m-20 pb-2 text-4xl font-semibold tracking-wide first:mt-0 ",
            h3: "scroll-m-20 text-2xl font-semibold tracking-wide ",
            h4: "scroll-m-20 text-xl font-semibold tracking-wide",
            h5: "scroll-m-20 text-lg font-semibold tracking-wide",
            h6: "scroll-m-20 text-base font-semibold tracking-wide",
            p: "leading-7 [&:not(:first-child)]:mt-6 font-normal-text",
            blockquote: "mt-6 border-l-2 pl-6 italic",
            ul: "my-6 ml-6 list-disc [&>li]:mt-2",
            inlineCode:
                "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
            lead: "text-xl text-muted-foreground",
            largeText: "text-lg font-semibold",
            smallText: "text-sm font-medium leading-none",
            mutedText: "text-sm text-muted-foreground"
        }
    },
    defaultVariants: {
        variant: "p"
    }
})

const variantElementMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    blockquote: "blockquote",
    inlineCode: "code",
    largeText: "div",
    smallText: "small",
    lead: "p",
    mutedText: "p",
    ul: "ul"
}

const Typography = React.forwardRef(
    ({ className, variant, as, asChild, ...props }, ref) => {
        const Comp = asChild
            ? Slot
            : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div"
        return (
            <Comp
                className={cn(typographyVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Typography.displayName = "Typography"

export { Typography, typographyVariants }
