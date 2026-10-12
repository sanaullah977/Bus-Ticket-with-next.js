import { GooglePlay } from "@/asset";

const Footer = () => {
  const conditionMake = [
    "Terms & condition",
    "Return & refund policy",
    "Privacy policy",
  ];

  return (
    <footer className="bg-Primary font-Releway text-white mt-6">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 ">
        {/* Footer Top */}
        <div className="flex flex-col gap-8 border-b border-dashed border-white/30 pb-8 sm:pb-10 lg:flex-row lg:items-start lg:justify-between lg:pb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <p className="text-3xl font-extrabold sm:text-4xl">P-Ticket</p>

            <p className="max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7 lg:text-lg">
              P-Ticket is a digital platform to make your daily commuting
              better.
            </p>
          </div>

          {/* App Download */}
          <div className="space-y-4 sm:space-y-5">
            <p className="text-lg font-semibold sm:text-xl">Download our app</p>

            <div className="w-fit max-w-full">
              <GooglePlay />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col gap-5 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm leading-6 text-white/70 sm:text-base">
            @all rights reserved, P-Ticket services limited. 2026
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 lg:justify-end lg:gap-8">
            {conditionMake.map((item) => (
              <p
                key={item}
                className="font-Inter text-sm font-medium sm:text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
