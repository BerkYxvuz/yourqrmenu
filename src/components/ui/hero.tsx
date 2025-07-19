"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-[url(/image/scanQR.jpg)] bg-cover px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Your Menu <br /> is one QR scan away
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Add it in any language and break the barrier!
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row items-center">
              <Button
                size="lg"
                color="green"
                className="flex justify-center items-center gap-3"
                onClick={() => window.location.href = "/subscription"}
              >
                Add Menu
              </Button>
              <h6 className="text-white text-base font-normal">
                Monthly just €14.99
              </h6>
            </div>
          </div>
          {/*
          <Image
            width={670}
            height={576}
            src="/image/qrMENU.png"
            alt="Example QR Code"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
          */}
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Your QR Menu
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Create a digital menu that can be accessed by scanning a QR code.
            Perfect for restaurants, cafes, and bars looking to enhance their
            customer experience with convenience and safety.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
