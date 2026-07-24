"use client";

import { useQuery } from "@tanstack/react-query";

import css from "./CamperPage.module.css";

import Container from "@/components/layout/Container/Container";
import Loader from "@/components/ui/Loader/Loader";

import CamperInfo from "@/components/camper/CamperInfo/CamperInfo";
import Gallery from "@/components/camper/Gallery/Gallery";
import Features from "@/components/camper/Features/Features";
import Reviews from "@/components/camper/Reviews/Reviews";
import BookingForm from "@/components/camper/BookingForm/BookingForm";

import { getCamperById, getCamperReviews } from "@/services/campers";

interface Props {
  camperId: string;
}

export default function CamperPage({ camperId }: Props) {
  const {
    data: camper,
    isLoading: camperLoading,
    error: camperError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
  });

  const { data: reviews = [], isLoading: reviewsLoading } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  if (camperLoading || reviewsLoading) {
    return <Loader />;
  }

  if (camperError || !camper) {
    return <h2>Camper not found</h2>;
  }

  return (
    <Container>
      <div className={css.page}>
        <div className={css.galleryInfoWrapper}>
          <Gallery images={camper.gallery} />

          <div>
            <CamperInfo camper={camper} />
            <Features camper={camper} />
          </div>
        </div>

        <h2 className={css.title}>Reviews</h2>
        <div className={css.wrapper}>
        <Reviews reviews={reviews} />
        <BookingForm camperId={camper.id} />
        </div>
      </div>
    </Container>
  );
}
