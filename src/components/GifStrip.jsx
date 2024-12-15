// eslint-disable-next-line react/prop-types
export default function GifStrip({ classes }) {
    const rickRoll = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }

    return (
        <div className={classes}>
            <div className="flex overflow-clip hover:cursor-pointer" onClick={rickRoll}>
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
