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
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

export default function ContactForm() {

    const [form, setForm] = useState({})

    // const inputs = [
    //     {
    //         type: "text",
    //         label: "Your Name",
    //         name: "name",
    //         placeholder: "Eg: Michael Schofield"
    //     }
    // ]
    //

    async function handleSubmit(e) {
        e.preventDefault()
        const response = fetch("https://announce.fly.dev/add-job", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        toast.promise(
            response,
            {
                pending: 'Sending...',
                success: 'Success, I will contact to you ASAP',
                error: 'Failed, please contact me manually. Sorry for the inconvenient'
            }
        )

        if ((await response).ok) setForm({})
    }

    function changeHandler(e) {
        if (e.target.value === '') {
            setForm({...form, [e.target.name]: "null"})
        } else {
            setForm({...form, [e.target.name]: e.target.value})
        }
    }

    return (
        <>
            <ToastContainer/>
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
                    <form onSubmit={handleSubmit}>
                        <div className={"text-left flex flex-col gap-y-6 mb-6"}>
                            <div><Label htmlFor={"name"}>Your Name</Label>
                                <Input type={"text"} id={"name"} name={"name"}
                                       onChange={(e) => changeHandler(e)}
                                       placeholder={"Eg: Michael Schofield"}></Input>
                            </div>
                            <div>
                                <Label htmlFor={"email"}>Email</Label>
                                <Input type={"email"} id={"email"} name={"email"}
                                       onChange={(e) => changeHandler(e)}
                                       placeholder={"Eg: example@gmail.com"}></Input>
                            </div>
                            <div>
                                <Label htmlFor={"contact"}>Other contact</Label>
                                <Input type={"text"} id={"contact"} name={"contact"}
                                       onChange={(e) => changeHandler(e)}
                                       placeholder={"Eg: discord: .demonducky, instagram: tuananh.lg"}></Input>
                            </div>
                            <div>
                                <Label htmlFor={"service"}>What service do you need?</Label>
                                <Input type={"text"} id={"service"} name={"service"}
                                       onChange={(e) => changeHandler(e)}
                                       placeholder={"Eg: E-commerce website, spigot plugin,..."}></Input>
                            </div>
                            <div>
                                <Label htmlFor={"information"}>Additional information</Label>
                                <Textarea type={"text"} id={"information"} name={"information"}
                                          onChange={(e) => changeHandler(e)}
                                          placeholder={"Write anything you feel I need to know (not required)"}></Textarea>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type={"submit"}>Send Request</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}