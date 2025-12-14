import appScreenshot from "@assets/1_-_Piano_Practice_1765710460726.png";

interface PhoneMockupProps {
  className?: string;
}

export default function PhoneMockup({ className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-64 md:w-72 lg:w-80">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
        <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl border border-gray-800">
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src={appScreenshot}
              alt="Setflo app showing piano practice timer at 00:19:06"
              className="w-full h-auto"
              data-testid="img-phone-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
