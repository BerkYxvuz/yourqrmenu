"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Easy to Use",
    children:
      "Our user-friendly interface allows you to create and manage your digital menu effortlessly, ensuring a seamless experience for both you and your customers.",
  },
  {
    icon: LightBulbIcon,
    title: "Innovative Solutions",
    children:
      "Stay ahead of the competition with our innovative QR menu solutions that enhance customer satisfaction and streamline restaurant operations.",
  },
  {
    icon: LockClosedIcon,
    title: "Secure & Reliable",
    children:
      "Rest assured with our secure platform that protects your data and provides reliable service, ensuring your digital menu is always accessible.",
  }

];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your QR Menu
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Own Your Digital Menu
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Transform your restaurant's dining experience with our innovative QR menu solution. Effortlessly update your menu, engage customers, and streamline operations with a digital menu that adapts to your needs.
        </Typography>
      </div>

      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
