import { ghostCursor } from "cursor-effects";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import MusicToggle from "../components/MusicToggle";
import { useNavigate } from "react-router-dom";
import ContentGrid from "../components/ContentGrid";

export default function HackersInMovies() {
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
                <p>H4X0RS 1N M0V13S</p>
            </div>
            <div className="mt-10 mx-24">
                <ContentGrid content={[
                    {
                        id: "hackers",
                        name: "Hackers (1995)",
                        image: "/hackers.jpg",
                        description: "A cult classic, Hackers followed a group of teenage hackers navigating the corporate and cyber underworld. The film’s vibrant portrayal of hacker subculture, complete with flashy visuals and techno soundtracks, romanticized the hacker as a rebel against authority. It introduced phrases like “Hack the Planet” into popular lexicon and captured the adventurous, countercultural spirit of the era."
                    },
                    {
                        id: "thenet",
                        name: "The Net (1995)",
                        image: "/thenet.jpg",
                        description: "Starring Sandra Bullock, The Net explored the dangers of digital identity theft and cyber manipulation. The film painted a grim picture of how technology could upend lives, portraying hacking as a sinister tool wielded by shadowy organizations. It resonated with growing fears about online privacy and security."
                    },
                    {
                        id: "sneakers",
                        name: "Sneakers (1992)",
                        image: "/sneakers.jpg",
                        description: "This thriller featured an ensemble cast, including Robert Redford and Sidney Poitier, as a team of ethical hackers hired to test security systems. The film balanced humor and suspense, portraying hacking as a skill that could be used for good or ill. Its focus on teamwork and ethical dilemmas was ahead of its time."
                    },
                    {
                        id: "johnnymnemonic",
                        name: "Johnny Mnemonic (1995)",
                        image: "/johnnymnemonic.jpg",
                        description: "Based on a story by William Gibson, this film envisioned a dystopian future where data couriers stored sensitive information in their brains. Hacking was depicted as a vital skill for navigating a high-tech, cyberpunk world. While the film received mixed reviews, it helped popularize cyberpunk aesthetics and the association of hacking with high-stakes intrigue."
                    },
                    {
                        id: "matrix",
                        name: "The Matrix (1999)",
                        image: "/matrix.jpg",
                        description: "While primarily a sci-fi action film, The Matrix featured hacking as a core element of its narrative. Neo, the protagonist, starts as a computer hacker before discovering the simulated nature of reality. The film’s themes of digital rebellion, freedom, and control resonated with the zeitgeist, cementing hackers as iconic figures in the fight against systemic oppression."
                    },
                ]} />
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
