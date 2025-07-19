"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "What is Your QR Menu?",
    desc: "Your QR Menu is a digital menu solution that allows restaurants to create and manage their menus online, accessible via QR codes.",
  },
  {
    title: "How does it work?",
    desc: "Customers scan a QR code with their smartphone to view the menu, place orders, and make payments directly from their device.",
  },
  {
    title: "What if I need help?",
    desc: "Our support team is available to assist you with any questions or issues you may encounter.",
  },
  {
    title: "Can i cancel my subscription?",
    desc: "Yes, you can cancel your subscription at any time.",
  }
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            Here are some of the most common questions we receive. If you have
            any other questions, feel free to reach out to us.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
