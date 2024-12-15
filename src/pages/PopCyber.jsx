import { ghostCursor } from "cursor-effects";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import MusicToggle from "../components/MusicToggle";
import { useNavigate } from "react-router-dom";

export default function PopCyber() {
    const navigate = useNavigate();
    new ghostCursor();

    const navigateTo = (path) => {
        try{
            let audio = document.getElementsByTagName("audio")[0]
            audio.remove();
            navigate(path);
        } catch (error) {
            navigate(path);
        }
    }

    return (
        <div className="min-h-screen cursor-default">
            <MatrixRainingCode className="absolute inset-0" />
            <button className="ml-2" onClick={() => navigateTo("/")}>
                <img src="/Backtohomepage.gif" />
            </button>
            <MusicToggle />
            <div className="justify-center items-center text-center text-4xl font-bold text-green-500 font-courier animate-flicker">
                <p>W3LC0M3 T0 TH3 SYST3M</p>
                <p>PLUG 1N. P0W3R UP. R3L1V3 TH3 CYB3RPUNK R3V0LUT10N 0F TH3 90s.</p>
            </div>
            <div className="mt-10 mx-24">
                <div className="border border-green-500 bg-black h-full w-full">
                    <div className="text-green-600 pl-4 text-wrap font-ocraextended py-2">
                        <p>&gt; INITIALIZING...</p>
                        <p>&gt; SYSTEM ONLINE...</p>
                        <p>&gt; ENTER PASSWORD: [ACCESS GRANTED]...</p>
                        <p>&gt; CLICK A COMMAND TO EXPLORE...</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 ml-12 flex justify-center items-center">
                <div className="w-1/3">
                    <div className="flex justify-center items-center">
                        <img src="/turndisk.gif" className="h-32 hover:cursor-pointer" onClick={() => navigateTo("/hackersingames")} />
                    </div>
                    <p className="text-green-500 text-center mt-2 font-ocraextended font-bold text-lg">HACKING CULTURE IN GAMES</p>
                </div>
                <div className="w-1/3">
                    <div className="flex justify-center items-center">
                        <img src="/monitor.gif" className="h-32 hover:cursor-pointer" onClick={() => navigateTo("/hackersinmovies")} />
                    </div>
                    <p className="text-green-500 text-center mt-2 font-ocraextended font-bold text-lg">HACKING CULTURE IN MOVIES</p>
                </div>
            </div>
            <div className="flex justify-center mt-14">
                <div className="flex overflow-clip">
                    <img src="/hack.gif" />
                    <img src="/Neopage.gif" />
                    <img src="/Atomic.gif" />
                    <img src="/click.gif" />
                    <img src="/HACKCLUB.gif" />
                    <img src="/laser.gif" />
                    <img src="/counter4.gif" />
                    <img src="/counter4.gif" />
                </div>
            </div>
        </div>
    )
}