import phoneMockupImage from "@assets/generated_images/phone_mockup_timer_app.png";

interface PhoneMockupProps {
  className?: string;
}

export default function PhoneMockup({ className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-64 md:w-72 lg:w-80">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
        <div className="relative bg-foreground/5 rounded-[2.5rem] p-2 shadow-2xl">
          <div className="bg-background rounded-[2rem] overflow-hidden">
            <img
              src={phoneMockupImage}
              alt="Setflo app showing timer interface"
              className="w-full h-auto"
              data-testid="img-phone-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
