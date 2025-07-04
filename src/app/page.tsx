import { TextAnimate } from "@app/components/magicui/text-animate";
import { ColoredButton } from "@app/components/ui/colored-button";
import { DialogHeader, DialogFooter } from "@app/components/ui/dialog";
import { Input } from "@app/components/ui/input";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@app/components/ui/dialog";
import { ZipForm } from "@app/components/functions/zip-form";
import { ExternalLink } from "@app/components/functions/external-link";
import Instagram from "@app/components/icons/instagram";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full gap-y-10">
            <div className="w-2/3 flex flex-col justify-center items-center gap-y-10 text-center">
                <TextAnimate
                    className="scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl"
                    animation="slideUp"
                    by="word"
                >
                    Who doesn&apos;t follow back? Let&apos;s find out together.
                </TextAnimate>

                <span>
                    Welcome to FollowDiff, a free tool that generates a list of
                    who doesn&apos;t follow back and who you don&apos;t follow
                    back on Instagram. Upload your information zip file to get
                    started.
                </span>

                <div className="flex flex-row items-center gap-x-5">
                    <Dialog>
                        <DialogTrigger asChild>
                            <ColoredButton>Upload</ColoredButton>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <ZipForm>
                                <DialogHeader>
                                    <DialogTitle>Upload ZIP</DialogTitle>
                                    <DialogDescription>
                                        Upload your downloaded Instragam{" "}
                                        <strong>followers and following</strong>{" "}
                                        ZIP file here and press the &quot;Check
                                        now&quot; button.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid w-full max-w-sm justify-center items-center gap-3 py-5 text-center">
                                    <Input
                                        className="cursor-pointer hover:brightness-75"
                                        id="zip"
                                        type="file"
                                        accept=".zip"
                                    />
                                    <span
                                        className="text-red-500 text-xs text-center hidden"
                                        id="no-zip"
                                    >
                                        Please upload a ZIP file.
                                    </span>
                                    <span
                                        className="text-red-500 text-xs text-center hidden"
                                        id="error-zip"
                                    >
                                        An error occurred.
                                    </span>
                                    <span
                                        className="text-red-500 text-xs text-center hidden"
                                        id="invalid-zip"
                                    >
                                        Invalid ZIP provided.
                                    </span>
                                </div>
                                <DialogFooter>
                                    <button
                                        className="flex justify-center items-center w-full"
                                        type="submit"
                                    >
                                        <ColoredButton>Check now</ColoredButton>
                                    </button>
                                </DialogFooter>
                            </ZipForm>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <ColoredButton>Help</ColoredButton>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <ZipForm>
                                <DialogHeader>
                                    <DialogTitle>
                                        How do I get started?
                                    </DialogTitle>
                                    <DialogDescription>
                                        <ol className="flex flex-col gap-y-3 list-decimal ml-4 mt-3">
                                            <li>
                                                Head to Instagram&apos;s{" "}
                                                <strong>Account Center</strong>{" "}
                                                {">"}{" "}
                                                <strong>
                                                    Your information and
                                                    permissions
                                                </strong>{" "}
                                                {">"}{" "}
                                                <strong>
                                                    <ExternalLink
                                                        url="https://accountscenter.instagram.com/info_and_permissions/dyi/"
                                                        text="Download your information"
                                                    />
                                                </strong>
                                            </li>
                                            <li>
                                                Press{" "}
                                                <strong>
                                                    Download or tranfer your
                                                    information
                                                </strong>{" "}
                                                {">"}{" "}
                                                <strong>
                                                    Some of your information
                                                </strong>
                                            </li>
                                            <li>
                                                Scroll down to{" "}
                                                <strong>Connections</strong> and
                                                select{" "}
                                                <strong>
                                                    Followers and following
                                                </strong>{" "}
                                                then press <strong>Next</strong>
                                            </li>
                                            <li>
                                                Press{" "}
                                                <strong>
                                                    Download to device
                                                </strong>{" "}
                                                and select your{" "}
                                                <strong>Date range</strong>.
                                                Once complete, press{" "}
                                                <strong>Create files</strong>
                                            </li>
                                            <li>
                                                Your information will take some
                                                time to download. Instagram will
                                                notify you once your information
                                                is ready via your email.
                                            </li>
                                            <li>
                                                Once your information is ready,
                                                download your ZIP file then
                                                upload it to this site via the{" "}
                                                <strong>Upload</strong> button.
                                            </li>
                                        </ol>
                                    </DialogDescription>
                                </DialogHeader>
                            </ZipForm>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="absolute bottom-5 text-xs flex flex-row justify-center items-center gap-x-2">
                <span>
                    Made with 🧠 by{" "}
                    <ExternalLink url="https://github.com/xtncz" text="tncz" />
                </span>
                <span>|</span>
                <span className="flex flex-row justify-center items-center gap-x-1">Contact me on <Instagram className="mt-0.5 h-5 w-5 hover:brightness-75 cursor-pointer" /></span>
            </div>
        </div>
    );
}
