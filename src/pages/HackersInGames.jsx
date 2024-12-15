import { ghostCursor } from "cursor-effects";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import MusicToggle from "../components/MusicToggle";
import { useNavigate } from "react-router-dom";
import ContentGrid from "../components/ContentGrid";
import GifStrip from "../components/GifStrip";

export default function HackersInGames() {
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
        <div className="min-h-screen cursor-default overflow-x-clip">
            <MatrixRainingCode className="absolute inset-0" />
            <button className="ml-2" onClick={() => navigateTo("/")}>
                <img src="/Backtohomepage.gif" />
            </button>
            <MusicToggle />
            <div className="crt-green">
                <div className="justify-center items-center text-center text-4xl font-bold text-green-500 font-courier animate-flicker">
                    <p>H4X0RS 1N G4M3S</p>
                </div>
                <div className="mt-10 mx-24">
                    <ContentGrid content={[
                        {
                            id: "syndicate",
                            name: "Syndicate (1993)",
                            image: "/syndicate.png",
                            description: "This cyberpunk classic placed players in control of a corporation fighting for global dominance through technology and espionage. Hacking played a critical role, allowing players to manipulate systems, control enemies, and bend the game’s dystopian world to their will. It mirrored the fear and allure of unchecked technological power."
                        },
                        {
                            id: "systemshock",
                            name: "System Shock (1994)",
                            image: "/Sysshock.jpg",
                            description: "As one of the first games to delve deeply into cyberspace, System Shock cast players as a hacker battling a rogue AI named SHODAN. The game portrayed hacking as both a technical and physical challenge, highlighting the dangers of overreliance on technology while glorifying the hacker’s role as a digital savior." 
                        },
                        {
                            id: "uplink",
                            name: "Uplink (1999)",
                            image: "/uplink.jpg",
                            description: "Released at the tail end of the decade, Uplink was a direct simulation of hacking. Players assumed the role of a freelance hacker completing contracts for corporations or criminal organizations. The game’s interface and mechanics immersed players in the thrill of breaking into systems, stealing data, and evading detection, capturing the spirit of real-world hacking culture."
                        },
                        {
                            id: "deusex",
                            name: "Deus Ex (2000)",
                            image: "/deusex.jpg",
                            description: "Though released in 2000, Deus Ex was heavily influenced by 90s cyberpunk and hacking culture. Players navigated a world rife with conspiracy, using hacking to uncover secrets, disable security systems, and manipulate the environment. It emphasized the hacker as a pivotal figure in a world of surveillance and control."
                        },
                        {
                            id: "shadowrun",
                            name: "Shadowrun (1993)",
                            image: "/shadowrun.jpg",
                            description: "This RPG blended hacking with fantasy elements, introducing the concept of “deckers” who navigated the digital Matrix to gather intelligence or sabotage enemies. Shadowrun’s portrayal of hacking as a critical skill for survival resonated with the burgeoning cyberpunk aesthetic of the era."
                        },
                    ]} />
                </div>
                <GifStrip classes="mt-2" />
            </div>
        </div>
    )
}
