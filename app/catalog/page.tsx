import type { Metadata } from "next";

import Container from "@/components/layout/Container/Container";

import CatalogClient from "./CatalogClient";

import css from "./CatalogPage.module.css";


export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description:
    "Browse available campers and find the perfect vehicle for your next adventure with TravelTrucks.",

  openGraph: {
    title: "Catalog | TravelTrucks",
    description:
      "Browse available campers and find the perfect vehicle for your next adventure with TravelTrucks.",
    url: "https://campers-next-js.vercel.app/catalog",
    siteName: "TravelTrucks",
    images: [
      {
        url: "https://campers-next-js.vercel.app/public/images/heroImage.webp",
        width: 1200,
        height: 630,
        alt: "TravelTrucks camper catalog",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Catalog | TravelTrucks",
    description:
      "Browse available campers and find the perfect vehicle for your next adventure.",
    images: [
      "https://campers-next-js.vercel.app/public/images/heroImage.webp",
    ],
  },
};


export default function CatalogPage() {
  return (
    <section className={css.catalog}>
      <Container>
        <CatalogClient />
      </Container>
    </section>
  );
}