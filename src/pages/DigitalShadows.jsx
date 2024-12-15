import { ghostCursor } from "cursor-effects";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import MusicToggle from "../components/MusicToggle";
import { useNavigate } from "react-router-dom";
import SystemMessageMarquee from "../components/SystemMessageMarquee";

export default function DigitalShadows() {
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
                <p>D1G1T4L SH4D0WS: TH3 D4WN 0F TH3 H4CK3R 3R4</p>
            </div>
            <div className="justify-center items-center text-center flex mt-6 gap-20">
                <video controls>
                    <source src="/video/hackersiwaszerocool.mp4" type="video/mp4" />
                </video>
                <video controls>
                    <source src="/video/sneakersmovie.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="mt-10 mx-24">
                <div className="border border-green-500 bg-black h-full w-full">
                    <div className="text-green-600 pl-4 text-wrap font-courier py-2">
                        <p className="text-green-400">TH3 R1S3 0F H4CK1NG CULTUR3</p>
                        <p className="mt-2">
                            The 1990s marked a transformative era for hacking, evolving from an underground curiosity to a cultural phenomenon. This period, often 
                            referred to as the “Golden Age” of hacking, witnessed the rise of iconic individuals, groups, and events that reshaped the relationship 
                            between technology and society.
                        </p>
                        <p className="text-green-400 mt-2">4 BR13F H1ST0RY 0F 90s H4CK1NG</p>
                        <p className="mt-2">
                            In the early 1990s, the internet was in its infancy, largely the domain of academic institutions, government agencies, and tech-savvy enthusiasts. 
                            It was during this time that hacking moved from isolated endeavors to a collaborative culture fostered by online forums, bulletin board systems (BBS), 
                            and early internet communities. Groups like 2600: The Hacker Quarterly, named after the frequency used by phone phreakers, emerged as a hub for hackers 
                            to share knowledge and debate ethical boundaries. These forums provided an outlet for technical exploration, camaraderie, and the challenging of authority.
                        </p>
                        <p className="mt-2">
                            The hacking culture in the 90s was driven by a duality of motivations: curiosity and activism. While some sought to expose vulnerabilities for personal gain 
                            or notoriety, others aimed to use their skills to advocate for transparency, digital freedom, and the democratization of information. This era also marked 
                            the beginning of tensions between hackers and authorities, with the U.S. government and corporations scrambling to respond to new digital threats.
                        </p>
                        <p className="text-green-400 mt-2">F4M0US H4CK1NG M0M3NTS 0F TH3 90s</p>
                        <p className="mt-2 font-bold">
                            - Kevin Mitnick’s Exploits
                        </p>
                        <p className="mt-2">
                            Perhaps the most infamous hacker of the 90s, Kevin Mitnick earned the moniker “The World’s Most Wanted Hacker.” His early exploits included 
                            social engineering tactics to infiltrate systems, but he gained widespread attention after hacking into major corporations like Nokia, Fujitsu, 
                            and Motorola. Arrested in 1995 after a high-profile pursuit by the FBI, Mitnick’s case highlighted the vulnerabilities of emerging digital 
                            infrastructures and sparked debates about hacking ethics.
                        </p>
                        <p className="mt-2 font-bold">
                            - The Y2K Bug
                        </p>
                        <p className="mt-2">
                            While not a hacking event in the traditional sense, the Y2K bug became a global phenomenon that underscored humanity’s dependence on technology. 
                            As the year 2000 approached, concerns over computer systems’ inability to process the date change from 1999 to 2000 led to widespread panic. 
                            Though much of the hysteria proved overblown, it catalyzed a massive global effort to audit and secure systems, showcasing the increasing awareness 
                            of potential vulnerabilities in digital environments.
                        </p>
                        <p className="mt-2 font-bold">
                            - Operation Sundevil
                        </p>
                        <p className="mt-2">
                            In 1990, the U.S. Secret Service launched Operation Sundevil, one of the first large-scale crackdowns on hacking. The operation targeted credit card 
                            fraud and phone phreaking rings, leading to dozens of arrests. While it predated the internet’s mainstream adoption, its legacy carried into 
                            the 90s, symbolizing the growing tension between hackers and law enforcement.
                        </p>
                        <p className="mt-2 font-bold">
                            - Cult of the Dead Cow (cDc)
                        </p>
                        <p className="mt-2">
                            This legendary hacking group gained notoriety in the 90s for their provocative actions and release of hacking tools like Back Orifice, a program 
                            that exposed vulnerabilities in Windows operating systems. The group’s activities brought attention to cybersecurity gaps, often embarrassing tech 
                            giants but also forcing them to improve.
                        </p>
                        <p className="mt-2 font-bold">
                            - The Hacker Crackdown
                        </p>
                        <p className="mt-2">
                            The Electronic Frontier Foundation (EFF) was founded in 1990 as a response to government overreach during investigations like Operation Sundevil. 
                            This organization championed the rights of hackers, advocating for free expression, privacy, and due process in the digital age. It became a critical
                            voice in shaping the ethics of hacking culture.
                        </p>
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
            <SystemMessageMarquee />
        </div>
    )
}
