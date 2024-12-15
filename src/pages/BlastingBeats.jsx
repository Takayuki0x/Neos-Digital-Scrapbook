import { ghostCursor } from "cursor-effects";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import MusicToggle from "../components/MusicToggle";
import { useNavigate } from "react-router-dom";

export default function BlastBeats() {
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
                <p>BL4ST1NG B34TS: H4CK1NG TH3 S0NDTR4CK 0F TH3 D1G1T4L UND3RGR0UND</p>
            </div>
            <div className="justify-center items-center text-center text-lg font-bold text-green-500 font-courier">
                <p className="text-green-400">Welcome to Blasting Beats, where we dive into the world of music made by hackers, for hackers. In the 90s, music creation and sharing underwent a seismic shift as trackers, software cracking, and the rise of the internet gave birth to a new digital soundscape. This is the story of how the underground reshaped the rhythm of a generation.</p>
            </div>
            <div className="justify-center items-center text-center flex mt-6 gap-20">
                <audio controls>
                    <source src="/audio/jesterelysium.mp3" type="video/mp4" />
                </audio>
                <audio controls>
                    <source src="/audio/kkocharyx.mp3" type="video/mp4" />
                </audio>
                <audio controls>
                    <source src="/audio/purplemotionunreal.mp3" type="video/mp4" />
                </audio>
                <audio controls>
                    <source src="/audio/cosmiccompressor.mp3" type="video/mp4" />
                </audio>
            </div>
            <div className="mt-10 mx-24">
                <div className="border border-green-500 bg-black h-full w-full">
                    <div className="text-green-600 pl-4 text-wrap font-courier py-2">
                        <div className="flex gap-20">
                            <img src="/blastingbeats.gif" />
                            <img src="/blastingbeats.gif" />
                        </div>
                        <p className="text-green-400 mt-4">H0W TR4CK3RS 4ND S0FTW4R3 CR4CK1NG 4FF3CT3D MUS1C</p>
                        <p className="mt-2">
                            The 1990s were a pivotal decade for music, not only because of evolving genres but also due to the technological shifts driven by hacking culture. 
                            Trackers and software cracking played a significant role in democratizing music creation, distribution, and consumption.
                        </p>
                        <p className="text-green-400 mt-2">TR4CK3RS: TH3 B1RTH 0F D1Y MUS1C PR0DUCT10N</p>
                        <p className="mt-2">
                            Music trackers, such as FastTracker and Impulse Tracker, allowed amateur musicians to create digital compositions using samples and synthesized sounds. 
                            These programs were widely distributed through early hacker communities and bulletin board systems (BBS). Trackers were often cracked or pirated, 
                            making professional-quality music software accessible to those who couldn’t afford expensive equipment. This democratization fueled the growth of 
                            underground electronic music scenes, particularly in genres like chiptune and demoscene music.
                        </p>
                        <p className="mt-2">
                            Hacking groups also embraced trackers as part of their identity, embedding original compositions into software cracks and demos. These songs, often 
                            highly creative and experimental, showcased the technical and artistic talents of hackers. The demoscene—a subculture dedicated to creating audiovisual 
                            demos—became a hotbed of innovation, merging music and digital art in ways that pushed the boundaries of early computing.
                        </p>
                        <p className="text-green-400 mt-2">S0FTW4R3 CR4CK1NG 4ND TH3 R1S3 0F MP3</p>
                        <p className="mt-2">
                            The proliferation of cracked audio software, such as early versions of Cubase or SoundForge, enabled a new wave of music production. Aspiring 
                            musicians could now access tools that were previously limited to professionals, leading to an explosion of independent music. Hacking culture also 
                            facilitated the distribution of MP3 encoding software, making it easier to compress and share music files online.
                        </p>
                        <p className="mt-2">
                            This shift paved the way for platforms like Napster, which emerged at the tail end of the 90s. By making music sharing effortless, Napster and similar 
                            services upended traditional music distribution models. While this sparked fierce battles with record labels, it also heralded a new era of 
                            accessibility and consumer choice.
                        </p>
                        <p className="text-green-400 mt-2">S0UNDTR4CK 0F TH3 H4CK1NG SC3N3</p>
                        <p className="mt-2 mb-4">
                            The music created and shared within hacker communities often reflected the ethos of the culture: experimental, boundary-pushing, and rebellious. 
                            Artists inspired by tracker music and cracked software often drew on cyberpunk themes, blending futuristic sounds with a DIY aesthetic. 
                            This period also saw the rise of netlabels—digital record labels distributing music for free or minimal cost, further challenging traditional 
                            industry norms.
                        </p>
                        <div className="flex gap-20">
                            <img src="/blastingbeats.gif" />
                            <img src="/blastingbeats.gif" />
                        </div>
                    </div>
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
