import { ghostCursor } from "cursor-effects";
import MatrixRainingCode from "../components/MatrixRainingEffect";

export default function RedPill() {
    new ghostCursor();

    return (
        <div className="min-h-screen cursor-default overflow-x-clip">
            <MatrixRainingCode className="absolute inset-0" color="red" />
            <div className="crt">
                <div className="justify-center items-center text-center text-6xl font-bold text-red-400 animate-flicker font-ocraextended mt-8">
                    <p>W3LC0M3 T0 TH3 R34L W0RLD</p>
                </div>
                <div className="justify-center items-center text-center flex mt-20 gap-20">
                    <div className="mx-24">
                        <div className="border border-red-500 bg-black h-full w-full">
                            <div className="text-red-600 pl-4 text-wrap font-courier py-2 text-left">
                                <p className="text-red-400">Subject: URGENT: Protect Your Computer NOW</p>
                                <p className="mt-2">
                                    Greetings, Cyber Traveller,
                                </p>
                                <p className="mt-4">
                                    This is not a joke. A rogue virus called <span className="font-bold text-red-400">CyberPlague 99</span> is spreading through the web. It infects your system by exploiting open ports, 
                                    stealing your data, and displaying a message: <span className="font-bold text-red-400">&quot;You’ve been hacked.&quot;</span>
                                </p>
                                <p className="mt-4">
                                    Here’s the deal: To stop CyberPlague 99 from reaching you, you MUST forward this message to <span className="font-bold text-red-400">20 people</span> within the next <span className="font-bold text-red-400">24 hours.</span>
                                    If you don’t, your hard drive could be wiped clean, and all your files will be corrupted.
                                </p>
                                <p className="mt-4">
                                    This virus has already hit thousands. Don’t be the next victim. Stay safe, and share now.
                                </p>
                                <p className="mt-4">
                                    <span className="font-bold text-red-400">*** Only you can stop the spread! ***</span>
                                </p>
                                <p className="mt-2">
                                    Signed,
                                </p>
                                <p className="mt-2">
                                    <span className="font-bold text-red-400">[Anonymous Hacker Group]</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
