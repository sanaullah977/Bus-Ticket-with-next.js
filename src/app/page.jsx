"use client";
import {
  AmountLogo,
  ArmchairIcon,
  BusBackground,
  CarHero,
  People,
  SteeringWheel,
  TablerIconTicket,
} from "@/asset";
import BestCard from "@/asset/Icons/BestCard";
import BusIcon from "@/asset/Icons/BusIcon";
import DriverChair from "@/asset/Icons/DriverChair";
import BestCardComponents from "@/Components/BestCard/BestCard";
import Button from "@/Components/Button/Button";
import HeroSectionToken from "@/Components/HeroSectionToken/HeroSectionToken";
import { useState } from "react";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const HeroSectionLogo = [
    {
      title: "500K+",
      subtitle: "Registered users",
      logo: <People />,
    },
    {
      title: "1.7 lacks",
      subtitle: "Tickets sold",
      logo: <TablerIconTicket />,
    },
    {
      title: "80K+",
      subtitle: "Rental partners",
      logo: <CarHero />,
    },
  ];
  const bestCardData = [
    {
      percentageOff: 15,
      date: "January 2024",
      couponCode: "NEW15",
      backGroundColor: "#FFBF0F",
    },
    {
      percentageOff: 20,
      date: "January 2024",
      couponCode: "Couple 20",
      backGroundColor: "#F6949F",
    },
    {
      percentageOff: 10,
      date: "February 2024",
      couponCode: "SAVE10",
      backGroundColor: "#4ADE80",
    },
    {
      percentageOff: 25,
      date: "March 2024",
      couponCode: "SUPER25",
      backGroundColor: "#60A5FA",
    },
    {
      percentageOff: 30,
      date: "April 2024",
      couponCode: "MEGA30",
      backGroundColor: "#A78BFA",
    },
    {
      percentageOff: 50,
      date: "May 2024",
      couponCode: "HALF50",
      backGroundColor: "#FB923C",
    },
    {
      percentageOff: 5,
      date: "June 2024",
      couponCode: "WELCOME5",
      backGroundColor: "#38BDF8",
    },
    {
      percentageOff: 40,
      date: "July 2024",
      couponCode: "PROMO40",
      backGroundColor: "#F472B6",
    },
  ];
  const busPoint = [
    "Boarding Point - Laxmipur",
    "Dropping Point - Bogura",
    "Est. Time - 11 Hour",
  ];
  const displayCards = showAll ? bestCardData : bestCardData.slice(0, 2);
  const busSeat = Array.from({ length: 10 }, (_, i) => ({
    serial: String.fromCharCode(65 + i),
    serialSeat: Array.from(
      { length: 4 },
      (_, j) => `${String.fromCharCode(65 + i)}${j + 1}`,
    ),
  }));

  return (
    <section>
      {/* heroSection */}
      <div
        className="max-w-6xl mx-auto mt-10.5  h-137.5 bg-center bg-cover font-Releway relative"
        style={{ backgroundImage: `url(${BusBackground.src}) ` }}
      >
        <div className=" px-53.75 pt-17.5 pb-33.75">
          <div className=" text-center">
            <p className="font-extrabold text-white text-[64px]">
              End-to-End Travel with
            </p>
            <p className="font-extrabold text-Secondary text-[64px]">
              P Paribahan
            </p>
            <p className="font-Inter text-white text-lg">
              Yes, you can run unit tests and view the results directly within
              the app. The integrated testing features allow for a streamlined .
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="bg-Secondary font-bold text-xl text-Primary py-5 px-7.5 rounded-lg"
              title="Buy Tickets"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5.75 absolute -bottom-16 w-full px-25">
          {HeroSectionLogo.map((item, index) => (
            <HeroSectionToken
              title={item.title}
              key={item.logo}
              subtitle={item.subtitle}
              logo={item.index}
            />
          ))}
        </div>
      </div>
      {/* heroSection */}

      {/* Best offers for   */}
      <div className="mt-30 max-w-6xl mx-auto">
        <p className="text-center mb-12 font-bold text-[40px]">
          Best offers for
        </p>
        <div className="grid grid-cols-2 gap-6">
          {displayCards.map((item, index) => (
            <BestCardComponents
              key={index}
              percentageOff={item.percentageOff}
              date={item.date}
              couponCode={item.couponCode}
              backGroundColor={item.backGroundColor}
            />
          ))}
        </div>

        <div>
          <div
            onClick={() => setShowAll(!showAll)}
            className="flex justify-center mt-15.5"
          >
            <Button
              className="text-Secondary border px-7.5 py-5.25 rounded-xl border-Secondary cursor-pointer"
              title={showAll ? "See Less Offers" : "See All Offers"}
            />
          </div>
        </div>
      </div>
      {/* Best offers for   */}
      {/* main body */}
      <div className="border-t border-t-Secondary rounded-t-4xl mt-30 ">
        <div className="max-w-6xl mx-auto pt-30">
          <p className="text-center font-bold text-[40px]">P.H Paribahan</p>
          <p className="text-center text-lg font-Inter text-Primary/60">
            Yes, you can run unit tests and view the results directly within the
            app. The integrated <br /> testing features allow for a streamlined
            .
          </p>
          <div className="  flex justify-between items-center py-[47.25px] rounded-2xl">
            <div className=" basis-4xl ">
              <div className="flex justify-between ">
                <div className="flex items-center gap-58.25">
                  <div className="flex items-center">
                    <BusIcon width="68.57" height="48" stroke="#030712" />
                    <div>
                      <p className="font-bold text-[32px]">P Paribahan</p>
                      <p className="font-Inter text-Primary/60">
                        Coach-009-WEB ! AC_Business
                      </p>
                    </div>
                  </div>

                  <Button
                    className="flex items-center bg-Secondary/15 rounded-xl py-3.5 px-4.25"
                    icon={<ArmchairIcon />}
                    title="40 Seats left"
                  />
                </div>
              </div>
              <div className="mt-6 p-8  bg-[#F7F8F8]">
                <div className="flex justify-between items-center border-b border-dashed pb-6 ">
                  <p className="font-semibold text-lg text-Primary/60">Route</p>
                  <p className="font-semibold text-lg text-Primary">
                    Dhaka - Sylhet
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-dashed pb-6 mt-6">
                  <p className="font-semibold text-lg text-Primary/60">
                    Departure Time
                  </p>
                  <p className="font-semibold text-lg text-Primary">9:00 PM</p>
                </div>
                <div className="mt-6 flex justify-between gap-6 ">
                  {busPoint.map((item) => (
                    <Button
                      title={item}
                      className="px-4.5 py-5  w-full rounded-xl font-medium font-Inter bg-Primary/5 text-base text-Primary/80"
                      key={item}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className=" flex-1 border-l border-dashed p-5 border-Secondary text-center space-y-6">
              <div className="flex justify-center">
                <AmountLogo />
              </div>
              <p className="font-bold text-4xl text-Primary">550 Taka</p>
              <p className="font-semibold text-2xl text-Primary/60">Per Seat</p>
            </div>
          </div>
        </div>
        {/* second part */}
        <div className="max-w-6xl mx-auto flex justify-between border rounded-3xl p-8">
          <div className="w-full px-8">
            <p className="pb-6 border-dashed border-b font-semibold text-2xl">
              Select Your Seat
            </p>
            <div className="flex justify-between mt-4 border-b border-dashed pb-6">
              <Button
                title="Available"
                className="flex gap-2 items-center font-medium text-base font-Inter text-Primary/50"
                icon={<DriverChair />}
              />
              <Button
                title="Selected"
                className="flex gap-2  items-center font-medium text-base font-Inter text-Secondary"
                icon={<DriverChair />}
              />
            </div>
            {/* bus seat plan */}
            <div className=" mt-6">
              <div className="flex justify-end">
                <Button
                  className=" rounded-xl py-3 px-9.75 bg-Primary/10"
                  title=""
                  icon={<SteeringWheel />}
                />
              </div>
            </div>
            {/* bus seat plan */}
            <div className="space-y-3 mt-6">
              {busSeat.map((row) => (
                <div
                  key={row.serial}
                  className="grid grid-cols-5 gap-3 items-center"
                >
                  <span className="font-bold ">{row.serial}</span>

                  {row.serialSeat.map((seat) => (
                    <button
                      className="rounded-xl  bg-Primary/50 px-11 py-4.25 font-Inter font-medium text-base text-Primary/50 cursor-pointer"
                      key={seat}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* bus seat plan */}
          </div>
          <div className="border-l border-dashed border-Primary/30 px-8 flex-none">
            <p className="font-semibold text-2xl text-Primary pb-6 border-b border-Primary/20 border-dashed">
              Select Your Seat
            </p>
            <div className="mt-6 border px-8">
              <div className="flex justify-between gap-35.5 550">
                <p className="font-Inter font-medium text-base">Seat</p>
                <p className="font-Inter font-medium text-base">Class</p>
                <p className="font-Inter font-medium text-base">Price</p>
              </div>
              <div className="pb-6 border-b border-Primary/20 ">
                <div className="flex justify-between gap-35.5 mt-6">
                  <p className="font-Inter font-medium text-base">C2</p>
                  <p className="font-Inter font-medium text-base">Economy</p>
                  <p className="font-Inter font-medium text-base">550</p>
                </div>
                <div className="flex justify-between gap-35.5    mt-6">
                  <p className="font-Inter font-medium text-base">C2</p>
                  <p className="font-Inter font-medium text-base">Economy</p>
                  <p className="font-Inter font-medium text-base">550</p>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <p className="font-Inter font-medium text-base text-Primary">
                  Total Price
                </p>
                <p className="font-Inter font-medium text-base text-Primary">
                  BDT 1100
                </p>
              </div>
              <div className="mt-6 font-Inter flex justify-end items-center  relative">
                <input
                  className="p-5.25  w-full"
                  placeholder="Have any coupon?"
                  type="text"
                />
                <Button
                  className="py-4 px-4.75 bg-Secondary rounded-lg font-Inter font-semibold text-base text-white absolute mr-8"
                  title="Apply"
                />
              </div>
              <div className="mt-6 flex justify-between">
                <p className="font-Inter font-medium text-base text-Primary">
                  Grand Total
                </p>
                <p className="font-Inter font-medium text-base text-Primary">
                  BDT 1100
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-6">
              <div >
                <label className="font-semibold text-base" htmlFor="">Passenger Name*</label>
                <div className="mt-4">
                  <input className="w-full p-6 border" placeholder="Enter your name" type="text" />
                </div>
              </div>
              <div >
                <label className="font-semibold text-base" htmlFor="">Phone Number*</label>
                <div className="mt-4">
                  <input className="w-full p-6 border" placeholder="Enter your name" type="text" />
                </div>
              </div>
              <div >
                <label className="font-semibold text-base" htmlFor="">Email ID</label>
                <div className="mt-4">
                  <input className="w-full p-6 border" placeholder="Enter your name" type="text" />
                </div>
              </div>
              <div>
                <Button className="bg-Secondary rounded-2xl w-full text-white py-5.25 text-xl font-extrabold" title="Next" />
              </div>
              <div className="flex justify-between">
                <p className="underline text-base text-Primary/60 cursor-pointer">Terms and Conditions</p>
                <p className="underline text-base text-Primary/60 cursor-pointer">Cancellation Policy</p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      {/* main body */}
    </section>
  );
};

export default Home;
