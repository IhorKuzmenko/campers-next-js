import type { Metadata } from "next";

import CamperPage from "./CamperPage";

import { getCamperById } from "@/services/campers";


interface Props {
  params: Promise<{
    camperId: string;
  }>;
}


export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { camperId } = await params;

  const camper = await getCamperById(camperId);


  if (!camper) {
    return {
      title: "Camper not found | TravelTrucks",
      description: "This camper does not exist.",
    };
  }


  const image =
    camper.gallery?.[0]?.original ||
    "https://campers-next-js.vercel.app/image-heroImage.webp";


  return {
    title: `${camper.name} | TravelTrucks`,

    description:
      camper.description ||
      "Find and book comfortable campers with TravelTrucks.",


    openGraph: {
      title: `${camper.name} | TravelTrucks`,

      description:
        camper.description ||
        "Find and book comfortable campers with TravelTrucks.",

      url: `https://campers-next-js.vercel.app/catalog/${camperId}`,

      siteName: "TravelTrucks",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: camper.name,
        },
      ],

      locale: "en_US",
      type: "website",
    },


    twitter: {
      card: "summary_large_image",

      title: `${camper.name} | TravelTrucks`,

      description:
        camper.description ||
        "Find and book comfortable campers with TravelTrucks.",

      images: [image],
    },
  };
}


export default async function Page({ params }: Props) {
  const { camperId } = await params;

  return <CamperPage camperId={camperId} />;
}