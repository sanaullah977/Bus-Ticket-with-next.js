
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

import BusIcon from "@/asset/Icons/BusIcon";
import DriverChair from "@/asset/Icons/DriverChair";
import BestCardComponents from "@/Components/BestCard/BestCard";
import Button from "@/Components/Button/Button";
import HeroSectionToken from "@/Components/HeroSectionToken/HeroSectionToken";
import { useState } from "react";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatPrice = 550;

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

  const displayCards = showAll
    ? bestCardData
    : bestCardData.slice(0, 2);

  const busSeat = Array.from({ length: 10 }, (_, i) => ({
    serial: String.fromCharCode(65 + i),
    serialSeat: Array.from(
      { length: 4 },
      (_, j) => `${String.fromCharCode(65 + i)}${j + 1}`
    ),
  }));

  const totalPrice = selectedSeats.length * seatPrice;

  const toggleSeat = (seat) => {
    setSelectedSeats((previousSeats) =>
      previousSeats.includes(seat)
        ? previousSeats.filter((item) => item !== seat)
        : previousSeats.length < 4
          ? [...previousSeats, seat]
          : previousSeats
    );
  };

  return (
    <section className="w-full overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative mx-auto mt-6 min-h-80 max-w-6xl bg-cover bg-center bg-no-repeat sm:mt-10 sm:min-h-100 lg:h-137.5 lg:min-h-0"
        style={{
          backgroundImage: `url(${BusBackground.src})`,
        }}
      >
        <div className="px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white sm:text-5xl lg:text-[64px]">
              End-to-End Travel with
            </p>

            <p className="text-3xl font-extrabold text-Secondary sm:text-5xl lg:text-[64px]">
              P Paribahan
            </p>

            <p className="mx-auto mt-4 max-w-2xl font-Inter text-sm text-white sm:text-base lg:text-lg">
              Yes, you can run unit tests and view the results directly
              within the app. The integrated testing features allow for
              a streamlined experience.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              className="rounded-lg bg-Secondary px-6 py-4 text-lg font-bold text-Primary sm:px-7.5 sm:py-5 sm:text-xl"
              title="Buy Tickets"
            />
          </div>
        </div>

        {/* Hero Statistics */}
        <div className="grid grid-cols-1 gap-4 px-4 pb-6 sm:grid-cols-3 sm:px-6 lg:absolute lg:-bottom-16 lg:w-full lg:px-12">
          {HeroSectionLogo.map((item, index) => (
            <HeroSectionToken
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              logo={item.logo}
            />
          ))}
        </div>
      </div>

      {/* Best Offers */}
      <div className="mx-auto mt-12 max-w-6xl px-4 sm:mt-24 sm:px-6 lg:mt-30 lg:px-0">
        <p className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-4xl">
          Best offers for
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
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

        <div
          onClick={() => setShowAll(!showAll)}
          className="mt-8 flex justify-center sm:mt-12"
        >
          <Button
            className="cursor-pointer rounded-xl border border-Secondary px-6 py-4 text-Secondary sm:px-7.5 sm:py-5.25"
            title={showAll ? "See Less Offers" : "See All Offers"}
          />
        </div>
      </div>

      {/* Main Bus Section */}
      <div className="mt-16 rounded-t-3xl border-t border-t-Secondary sm:mt-24 sm:rounded-t-4xl lg:mt-30">
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-20 lg:px-0 lg:pt-30">
          <p className="text-center text-2xl font-bold sm:text-4xl">
            P.H Paribahan
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-center font-Inter text-sm text-Primary/60 sm:text-base lg:text-lg">
            Choose your preferred seat and complete your booking
            with P.H Paribahan.
          </p>

          {/* Bus Information */}
          <div className="flex flex-col gap-6 rounded-2xl py-8 lg:flex-row lg:items-center lg:justify-between lg:py-12">
            {/* Bus Details */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <BusIcon
                    width="56"
                    height="42"
                    stroke="#030712"
                  />

                  <div className="min-w-0">
                    <p className="text-xl font-bold sm:text-2xl lg:text-[32px]">
                      P Paribahan
                    </p>

                    <p className="font-Inter text-sm text-Primary/60 sm:text-base">
                      Coach-009-WEB ! AC_Business
                    </p>
                  </div>
                </div>

                <Button
                  className="flex w-fit items-center gap-2 rounded-xl bg-Secondary/15 px-4 py-3"
                  icon={<ArmchairIcon />}
                  title={`${40 - selectedSeats.length} Seats left`}
                />
              </div>

              {/* Route Details */}
              <div className="mt-6 rounded-xl bg-[#F7F8F8] p-4 sm:p-8">
                <div className="flex items-center justify-between gap-3 border-b border-dashed pb-5 sm:pb-6">
                  <p className="text-sm font-semibold text-Primary/60 sm:text-lg">
                    Route
                  </p>

                  <p className="text-right text-sm font-semibold text-Primary sm:text-lg">
                    Dhaka - Sylhet
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-b border-dashed pb-5 sm:mt-6 sm:pb-6">
                  <p className="text-sm font-semibold text-Primary/60 sm:text-lg">
                    Departure Time
                  </p>

                  <p className="text-right text-sm font-semibold text-Primary sm:text-lg">
                    9:00 PM
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
                  {busPoint.map((item) => (
                    <Button
                      title={item}
                      className="w-full rounded-xl bg-Primary/5 px-3 py-4 text-sm font-medium text-Primary/80 sm:px-4 sm:py-5 sm:text-base"
                      key={item}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col items-center gap-3 border-t border-dashed border-Secondary pt-6 text-center lg:w-52 lg:flex-none lg:border-l lg:border-t-0 lg:pt-0">
              <div className="flex justify-center">
                <AmountLogo />
              </div>

              <p className="text-3xl font-bold text-Primary sm:text-4xl">
                {seatPrice} Taka
              </p>

              <p className="text-xl font-semibold text-Primary/60 sm:text-2xl">
                Per Seat
              </p>
            </div>
          </div>
        </div>

        {/* Seat Selection and Booking Summary */}
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border p-4 sm:p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-8">
          {/* Seat Selection */}
          <div className="w-full min-w-0 lg:flex-1">
            <p className="border-b border-dashed pb-5 text-xl font-semibold sm:pb-6 sm:text-2xl">
              Select Your Seat
            </p>

            {/* Seat Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed py-4 sm:py-6">
              <div className="flex items-center gap-2 text-sm font-medium text-Primary/50 sm:text-base">
                <DriverChair />
                <span>Available</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-Secondary sm:text-base">
                <DriverChair />
                <span>Selected</span>
              </div>
            </div>

            {/* Driver */}
            <div className="mt-6 flex justify-end">
              <div className="flex w-14 justify-center rounded-xl bg-Primary/10 px-3 py-3 sm:w-20 sm:py-4">
                <SteeringWheel />
              </div>
            </div>

            {/* Bus Seat Grid */}
            <div className="mt-6 space-y-3">
              {busSeat.map((row) => (
                <div
                  key={row.serial}
                  className="grid  grid-cols-[24px_repeat(4,minmax(0,1fr))] items-center gap-2 sm:grid-cols-[32px_repeat(4,minmax(0,1fr))] sm:gap-3"
                >
                  <span className="text-sm font-bold sm:text-base">
                    {row.serial}
                  </span>

                  {row.serialSeat.map((seat) => {
                    const isSelected = selectedSeats.includes(seat);

                    return (
                      <button
                        key={seat}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleSeat(seat)}
                        className={`w-full cursor-pointer rounded-lg px-1 py-3 text-xs font-medium transition-colors sm:rounded-xl sm:py-4 sm:text-base ${
                          isSelected
                            ? "bg-Secondary text-white"
                            : "bg-Primary/10 text-Primary/60 hover:bg-Secondary/20"
                        }`}
                      >
                        {seat}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-Primary/60">
              You can select up to 4 seats.
            </p>
          </div>

          {/* Booking Summary */}
          <div className="w-full min-w-0 border-t border-dashed border-Primary/30 pt-8 lg:w-105 lg:flex-none lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="border-b border-dashed border-Primary/20 pb-5 text-xl font-semibold text-Primary sm:pb-6 sm:text-2xl">
              Booking Summary
            </p>

            {/* Selected Seats */}
            <div className="mt-6 rounded-xl border p-3 sm:p-5">
              <div className="grid grid-cols-3 gap-2 border-b border-Primary/20 pb-4 text-sm font-medium sm:text-base">
                <p>Seat</p>
                <p className="text-center">Class</p>
                <p className="text-right">Price</p>
              </div>

              {selectedSeats.length > 0 ? (
                <div className="space-y-4 border-b border-Primary/20 py-4">
                  {selectedSeats.map((seat) => (
                    <div
                      key={seat}
                      className="grid grid-cols-3 items-center gap-2 text-sm sm:text-base"
                    >
                      <p>{seat}</p>
                      <p className="text-center">Economy</p>
                      <p className="text-right">{seatPrice}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="border-b border-Primary/20 py-5 text-center text-sm text-Primary/50">
                  No seat selected
                </p>
              )}

              {/* Total Price */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-Primary sm:text-base">
                  Total Price
                </p>

                <p className="text-sm font-medium text-Primary sm:text-base">
                  BDT {totalPrice}
                </p>
              </div>

              {/* Coupon */}
              <div className="relative mt-6 flex items-center">
                <input
                  className="w-full min-w-0 rounded-lg border p-3 pr-20 text-sm sm:p-4 sm:pr-24 sm:text-base"
                  placeholder="Have any coupon?"
                  type="text"
                />

                <Button
                  className="absolute right-2 rounded-lg bg-Secondary cursor-pointer px-3 py-2 text-sm font-semibold text-white sm:px-4"
                  title="Apply"
                />
              </div>

              {/* Grand Total */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-Primary sm:text-base">
                  Grand Total
                </p>

                <p className="text-sm font-medium text-Primary sm:text-base">
                  BDT {totalPrice}
                </p>
              </div>
            </div>

            {/* Passenger Form */}
            <form
              className="mt-6 space-y-5 sm:space-y-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label
                  className="text-sm font-semibold sm:text-base"
                  htmlFor="passengerName"
                >
                  Passenger Name*
                </label>

                <input
                  id="passengerName"
                  name="passengerName"
                  className="mt-3 w-full rounded-lg border p-3 text-sm sm:p-5 sm:text-base"
                  placeholder="Enter your name"
                  type="text"
                  required
                />
              </div>

              <div>
                <label
                  className="text-sm font-semibold sm:text-base"
                  htmlFor="phoneNumber"
                >
                  Phone Number*
                </label>

                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-3 w-full rounded-lg border p-3 text-sm sm:p-5 sm:text-base"
                  placeholder="Enter your phone number"
                  type="tel"
                  required
                />
              </div>

              <div>
                <label
                  className="text-sm font-semibold sm:text-base"
                  htmlFor="email"
                >
                  Email ID
                </label>

                <input
                  id="email"
                  name="email"
                  className="mt-3 w-full rounded-lg border p-3 text-sm sm:p-5 sm:text-base"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              <Button
                className="w-full rounded-2xl bg-Secondary py-4 text-lg font-extrabold cursor-pointer text-white sm:py-5 sm:text-xl"
                title="Next"
              />

              <div className="flex flex-wrap justify-between gap-3 text-sm text-Primary/60 sm:text-base">
                <p className="cursor-pointer underline">
                  Terms and Conditions
                </p>

                <p className="cursor-pointer underline">
                  Cancellation Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
