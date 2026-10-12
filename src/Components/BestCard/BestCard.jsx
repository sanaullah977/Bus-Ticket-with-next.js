import BestCard from "@/asset/Icons/BestCard";

const BestCardComponents = ({
  percentageOff = 15,
  date = "January 2024",
  couponCode = "NEW15",
  backGroundColor = "#FFBF0F",
}) => {
  return (
    <div className="relative w-full min-w-0 font-Inter">
      {/* Background Card */}
      <div className="w-full">
        <BestCard fill={backGroundColor} />
      </div>

      {/* Card Content */}
      <div className="absolute inset-0 flex items-center justify-between gap-2 p-3 sm:gap-4 sm:p-5 md:p-6 lg:p-8">
        {/* Offer Details */}
        <div className="min-w-0 flex-1">
          <p className="text-xl font-extrabold text-Primary/80 sm:text-2xl md:text-3xl lg:text-[40px]">
            {percentageOff}% OFF
          </p>

          <p className="mt-1 text-xs font-semibold text-Primary/80 sm:text-sm md:text-base lg:text-xl">
            on your next purchase
          </p>

          <p className="mt-1 text-[10px] font-medium text-Primary/50 sm:text-xs md:text-sm lg:text-lg">
            use by {date}
          </p>
        </div>

        <div className="shrink-0 text-center">
          <p className="wrap-break-word text-sm font-bold text-Primary sm:text-lg md:text-2xl lg:text-[32px]">
            {couponCode}
          </p>

          <p className="text-[10px] font-medium text-Primary/50 sm:text-xs md:text-sm lg:text-lg">
            Coupon Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestCardComponents;
