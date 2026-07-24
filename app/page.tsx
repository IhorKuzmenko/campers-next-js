import type { Metadata } from "next";

import Hero from "@/components/home/Hero/Hero";


export const metadata: Metadata = {
  title: "TravelTrucks | Find your perfect camper",
  description:
    "Discover and book comfortable campers for your next adventure. TravelTrucks helps you find the perfect camper for unforgettable trips.",

  openGraph: {
    title: "TravelTrucks | Find your perfect camper",
    description:
      "Discover and book comfortable campers for your next adventure. TravelTrucks helps you find the perfect camper for unforgettable trips.",
    url: "https://campers-next-js.vercel.app",
    siteName: "TravelTrucks",
    images: [
      {
        url: "https://campers-next-js.vercel.app/public/images/heroImage.webp",
        width: 1200,
        height: 630,
        alt: "TravelTrucks campers",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TravelTrucks | Find your perfect camper",
    description:
      "Discover and book comfortable campers for your next adventure.",
    images: [
      "https://campers-next-js.vercel.app/public/images/heroImage.webp",
    ],
  },
};


export default function HomePage() {
  return <Hero />;
}