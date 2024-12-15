import { useEffect, useState, useMemo } from "react";

const SystemMessageMarquee = () => {
  const messages = useMemo(() => [
    "WARNING: System memory low.",
    "Connection to mainframe stable at 56kbps.",
    "Encryption: Active. Surveillance: Detected.",
    "ERROR: Unauthorized access detected.",
    "System reboot scheduled for 03:00 AM.",
    "Firewall status: Enabled. Intrusion attempts blocked.",
    "Server latency: 240ms. Optimizing routes.",
  ], []);

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the message every 5 seconds
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval
  }, [messages]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-red-600 text-sm py-2 overflow-hidden font-ocraextended font-bold pt-2 pl-4">
      <div className="whitespace-nowrap animate-marquee">
        {currentMessage}
      </div>
    </div>
  );
};

export default SystemMessageMarquee;
