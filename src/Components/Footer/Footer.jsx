import { GooglePlay } from "@/asset";

const Footer = () => {
    const conditionMake=["Terms & condition","Return & refund policy","Privacy policy"]
  return (
    <section className="bg-Primary font-Releway">
      <div className=" text-white py-30 px-33.75">
        <div className="flex justify-between border-b pb-12 border-dashed border-white/30">
          <div className="space-y-4">
            <p className="font-extrabold text-4xl">P-Ticket</p>
            <div className="text-lg text-[FFFFFF]/80">
              <p>P-Ticket is a digital platform to make your </p>
              <p>daily commuting better.</p>
            </div>
          </div>
          <div className="space-y-5">
            <p className="font-semibold text-xl">Download our app</p>
            <GooglePlay />
          </div>
        </div>
        <div className="mt-8 flex justify-between"> 
            <p className="text-base text-white/70">
                @all rights reserved, P-Ticket services limited.2026
            </p>
            <div className="flex justify-between gap-8">
                {
                    conditionMake.map((item)=><p className="font-medium text-base font-Inter">
                        {item}
                    </p>)
                }
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
