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
                    <div><Label htmlFor={"need"}>Your Name</Label>
                        <Input type={"text"} id={"need"}
                               placeholder={"Eg: Michael Schofield"}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"need"}>Email</Label>
                        <Input type={"email"} id={"need"}
                               placeholder={"Eg: example@gmail.com"}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"need"}>Other contact</Label>
                        <Input type={"email"} id={"need"}
                               placeholder={"Eg: discord: .demonducky, instagram: tuananh.lg"}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"need"}>What services do you need?</Label>
                        <Input type={"text"} id={"need"}
                               placeholder={"Eg: E-commerce website, spigot plugin,..."}></Input>
                    </div>
                    <div>
                        <Label htmlFor={"need"}>Additional information</Label>
                        <Textarea type={"text"} id={"need"}
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