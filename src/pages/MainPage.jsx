import MatrixRainingCode from "../components/MatrixRainingEffect"
import { motion } from "motion/react"
import { Link } from "react-router";
import { ghostCursor } from "cursor-effects";

export default function MainPage(){
    new ghostCursor();
    return (
        <div className="min-h-screen cursor-pointer">
            <MatrixRainingCode className="absolute inset-0" />
            <div className="flex items-center justify-center gap-12 overflow-clip">
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
            </div>
            <div className="flex">
                <div className="w-3/12 flex flex-col items-center justify-center mt-20">
                    <img src="/danger-sign.gif" className="w-24 h-34" />
                </div>
                <div className="flex flex-col items-center justify-center mt-24 w-6/12 bg-black border border-green-400">
                    <h1 className="text-5xl font-bold text-white font-courier">W3LC0M3 T0 TH3 M41NFR4M3</h1>
                    <p className="text-lg text-white font-ocraextended pt-2">Y0U 4RE TH3 <span className="text-green-400">7689TH</span> V1S1T0R!</p>
                </div>
                <div className="w-3/12 flex flex-col items-center justify-center mt-20">
                    <img src="/danger-sign.gif" className="w-24 h-34" />
                </div>
            </div>
            <div className="flex items-center justify-center gap-12 mt-16 overflow-clip">
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
                <img src="/danger-rotating.gif" className="w-48 h-48"/>
            </div>
            <div className="mt-20 gap-6 px-3 pb-8 flex graphpaperbg">
                <div className="pt-8 w-3/12">
                    <div className="border border-green-500 bg-black h-44">
                        <div className="flex">
                            <p className="text-green-400 font-bold pl-4 py-2 font-courier">&gt; D1G1T4L SH4D0WS</p>
                            <motion.div className="w-0.5 h-4 ml-4 my-auto bg-green-400" animate={
                                {
                                    rotate: [0, 90, 180, 270, 360],
                                    transition: {
                                        duration: 1,
                                        repeat: Infinity
                                    }
                                }
                            } />
                        </div>
                        <p className="px-4 pt-2 mb-4 text-green-600 font-ocraextended">Dive into 90s hacking culture, movies like Hackers and The Matrix, and famous events like Y2K.</p>
                        <Link to="" className="text-green-300 ml-4 underline font-ocraextended">Visit...</Link>
                    </div>
                    <div className="border border-green-500 bg-black h-40 mt-2">
                        <div className="flex">
                            <p className="text-green-400 font-bold pl-4 py-2 font-courier">&gt; P0P CYB3R</p>
                            <motion.div className="w-0.5 h-4 ml-4 my-auto bg-green-400" animate={
                                {
                                    rotate: [0, 90, 180, 270, 360],
                                    transition: {
                                        duration: 1,
                                        repeat: Infinity
                                    }
                                }
                            } />
                        </div>
                        <p className="px-4 pt-2 mb-6 text-green-600 font-ocraextended">Explore how tech was portrayed in 90s TV shows, video games, and movies.</p>
                        <Link to="" className="text-green-300 ml-4 underline font-ocraextended">Visit...</Link>
                    </div>
                    <div className="border border-green-500 bg-black h-40 mt-2">
                        <div className="flex">
                            <p className="text-green-400 font-bold pl-4 py-2 font-courier">&gt; BL4ST1NG B34TS</p>
                            <motion.div className="w-0.5 h-4 ml-4 my-auto bg-green-400" animate={
                                {
                                    rotate: [0, 90, 180, 270, 360],
                                    transition: {
                                        duration: 1,
                                        repeat: Infinity
                                    }
                                }
                            } />
                        </div>
                        <p className="px-4 pt-2 mb-6 text-green-600 font-ocraextended">Explore how trackers and software cracking affected music.</p>
                        <Link to="" className="text-green-300 ml-4 underline font-ocraextended">Visit...</Link>
                    </div>
                    <div className="border border-green-500 bg-black h-40 mt-2">
                        <div className="flex">
                            <p className="text-green-400 font-bold pl-4 py-2 font-courier">&gt; N30&apos;S 4RCH1V3</p>
                            <motion.div className="w-0.5 h-4 ml-4 my-auto bg-green-400" animate={
                                {
                                    rotate: [0, 90, 180, 270, 360],
                                    transition: {
                                        duration: 1,
                                        repeat: Infinity
                                    }
                                }
                            } />
                        </div>
                        <p className="px-4 pt-2 mb-2 text-green-600 font-ocraextended">A collection of personal memories tied to 90s tech—first computer, favorite games, or internet moments.</p>
                        <Link to="" className="text-green-300 ml-4 underline font-ocraextended">Visit...</Link>
                    </div>
                </div>
                <div className="pt-8 w-9/12">
                    <div className="border border-green-500 bg-black h-full w-full">
                        <div className="flex">
                            <p className="text-green-400 font-bold pl-4 py-2 font-courier">&gt; 4B0UT US</p>
                            <motion.div className="w-0.5 h-4 ml-4 my-auto bg-green-400" animate={
                                {
                                    rotate: [0, 90, 180, 270, 360],
                                    transition: {
                                        duration: 1,
                                        repeat: Infinity
                                    }
                                }
                            } />
                        </div>
                        <div className="text-green-600 pl-4 text-wrap font-ocraextended">
                            <br />
                            <div className="flex">
                                <p>
                                    Welcome to <span className="font-bold text-green-400">Neo&apos;s Digital Scrapbook</span>, a retro-futuristic corner of the web where the nostalgia of the 90s meets the neon-soaked world of hacking 
                                    and cyberpunk. This isn&apos;t just a website—it&apos;s a portal back to the golden era of floppy disks, dial-up modems, and the birth of the digital 
                                    underground.
                                </p>
                                <img src="/computer.gif" className="w-24 h-24 mr-4" />
                            </div>
                            <br />
                            <p>
                                We&apos;re a group of tech enthusiasts, pop culture lovers, and 90s kids at heart. Inspired by the iconic aesthetics of The Matrix, Hackers, 
                                and Y2K vibes, we&apos;ve built this scrapbook as a tribute to the days when computers felt magical, the internet was mysterious, and everyone 
                                secretly dreamed of cracking the mainframe.
                            </p>
                            <br />
                            <p>
                                Here, you&apos;ll find:
                            </p>
                            <p>
                                - Explorations of 90s tech and hacking culture
                            </p>
                            <p>
                                - Interactive mini-games to test your inner hacker
                            </p>
                            <p>
                                - Pop culture gems that defined the digital age
                            </p>
                            <p>
                                - Personal memories and inspirations from our journey through cyberspace
                            </p>
                            <br />
                            <p>
                                Whether you&apos;re a veteran netizen or a curious explorer, this scrapbook is a celebration of the digital revolution that shaped who we are today. So plug in, take the red pill, and join us as we hack into the past.
                            </p>
                            <br />
                            <p className="font-bold font-courier text-green-400">
                                “Welcome to the desert of the real.”
                            </p>
                            <img src="/fondomatrix.gif" className="w-full mt-4" />
                            <p className="font-bold font-courier text-green-400">This was created to participate in the Codedex Holiday Hackaton 2024</p>
                            <p className="font-bold font-courier text-green-400">Try to find our secret page.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <img src="/scanradio.gif" />
                <img src="/hacktv.gif" />
                <img src="/calahack.gif" />
                <img src="/laufhack.gif" className="w-full" />
            </div>
            <div className="text-lg gap-6 px-3 pb-8 graphpaperbg text-center font-bold items-center text-green-500 font-verdana">
                <p className="text-4xl pt-8 text-green-400 font-bold font-ocraextended">
                    The Hacker Manifesto: A Digital Declaration
                </p>
                <p className="mt-4">
                    We are the architects of the digital age, the explorers of infinite possibility, the dreamers in a world of code and chaos. We are hackers—not criminals, 
                    but creators. Not destroyers, but disruptors. We seek not to harm, but to understand.
                </p>
                <br />
                <p>
                    We are bound not by borders, but by bandwidth. Our domain is the vast network of ideas, knowledge, and freedom. To hack is not merely to break; 
                    it is to build, to question, to push beyond the limits imposed by systems and hierarchies.
                </p>
                <br />
                <p>
                    We reject the notion that curiosity is a crime.
                </p>
                <br />
                <p>
                    We reject the walls that confine the flow of information.
                </p>
                <br />
                <p>
                    We reject the gatekeepers who decide who may learn, who may share, who may know.
                </p>
                <br />
                <p>
                    In the 90s, we were the pioneers, booting up in basements and breaking into understanding. The whine of the modem was our anthem; the glow of 
                    the CRT, our beacon. We dreamed of a world where technology could liberate, not oppress. And today, we carry that dream forward.
                </p>
                <br />
                <p>
                    - Knowledge is free. The truth should not be hidden, locked behind paywalls, or obscured by secrecy.
                </p>
                <p>
                    - Curiosity is sacred. To question, to probe, to learn is a right, not a privilege.
                </p>
                <p>
                    - Power should be balanced. We expose what is unjust and protect what is vulnerable.
                </p>
                <p>
                    - Respect the system, but challenge its flaws. We hack to understand and improve, not to destroy.
                </p>
                <p>
                    - Leave no trace. Like whispers in the digital void, we pass without harming what we touch.
                </p>
                <br />
                <p>
                    We are the hackers. We are the seekers. We are the architects of the digital age.
                </p>
                <br />
                <p>
                    We are the glitch in the matrix, the shadow in the system, the spark of rebellion in a world of conformity. We are the custodians of the open web, the guardians of free expression, the defenders of the ungoverned space.
                </p>
                <br />
                <p>
                    The digital world is our home. Its infinite landscapes are our playground and our sanctuary. We do not fear the future—we shape it.
                </p>
                <br />
                <p>
                    This is our manifesto. This is our creed.
                </p>
                <br />
                <p className="text-red-600 text-7xl font-ocraextended">
                    We are hackers, and the system will not contain us.
                </p>
            </div>
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
    )
}
