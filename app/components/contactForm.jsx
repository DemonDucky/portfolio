import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog";
import {Button} from "./ui/button";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {Textarea} from "./ui/textarea";

export default function ContactForm() {
    return (
        <Dialog>
            <DialogTrigger asChild><Button variant={"destructive"} className={"text-lg"}>Let me
                contact
                you</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"md:text-left"}>Contact Form</DialogTitle>
                    <DialogDescription className={"md:text-left"}>
                        Fill the form below and I will contact directly to you.
                    </DialogDescription>
                </DialogHeader>
                <div className={"text-left flex flex-col gap-y-6"}>
                    <div><Label htmlFor={"name"}>Your Name</Label>
                        <Input type={"text"} id={"name"}
                               placeholder={"Eg: Michael Schofield"}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"email"}>Email</Label>
                        <Input type={"email"} id={"email"}
                               placeholder={"Eg: example@gmail.com"}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"contact"}>Other contact</Label>
                        <Input type={"email"} id={"contact"}
                               placeholder={"Eg: discord: .demonducky, instagram: tuananh.lg"}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"service"}>What service do you need?</Label>
                        <Input type={"text"} id={"service"}
                               placeholder={"Eg: E-commerce website, spigot plugin,..."}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"information"}>Additional information</Label>
                        <Textarea type={"text"} id={"information"}
                                  placeholder={"Write anything you feel I need to know (not required)"}></Textarea>
                    </div>
                </div>
                <DialogFooter>
                    <Button>Send Request</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}