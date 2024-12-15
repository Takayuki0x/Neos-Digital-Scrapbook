import MatrixRainingCode from "../components/MatrixRainingEffect"
import { motion } from "motion/react"
import { ghostCursor } from "cursor-effects";
import GifStrip from "../components/GifStrip";
import { useNavigate } from "react-router-dom";
import SystemMessageMarquee from "../components/SystemMessageMarquee";

export default function PickAPill(){
    const navigate = useNavigate();
    new ghostCursor();

    const rickRoll = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }

    const navigateTo = (path) => {
        try{
            let audio = document.getElementsByTagName("audio")[0]
            audio.remove();
            navigate(path);
        }
        catch (error) {
            navigate(path);
        }
    }

    return (
        <div className="min-h-screen cursor-default">
            <MatrixRainingCode className="absolute inset-0" />
            <div className="justify-center items-center text-center text-2xl font-bold text-green-600 animate-flicker font-ocraextended mt-10">
                <p>Y0U F0UND TH3 S3CR3T P4G3</p>
            </div>
            <div className="justify-center items-center text-center text-6xl font-bold text-green-400 animate-flicker font-ocraextended">
                <p>CH00S3 Y0UR P1LL</p>
            </div>
            <div className="justify-center items-center text-center flex mt-20 gap-20">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cursor-pointer" onClick={() => navigateTo("/redpill")}>
                    <img src="/Redpill.png" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cursor-pointer" onClick={() => rickRoll()}>
                    <img src="/Bluepill.png" />
                </motion.div>
            </div>
            <GifStrip classes="mt-40" />
            <SystemMessageMarquee />
        </div>
    )
}
