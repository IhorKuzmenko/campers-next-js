import Image from "next/image";
import Link from "next/link";

import { Camper } from "@/types/camper";

import css from "./CamperCard.module.css";

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  return (
    <article className={css.card}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={292}
        height={320}
        className={css.image}
      />

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>

          <div className={css.priceWrapper}>
            <p className={css.price}>€{camper.price}</p>
          </div>
        </div>

        <div className={css.meta}>
          <div className={css.metaItem}>
            <svg width="16" height="16">
              <use href="/icons/sprite.svg#star" />
            </svg>

            <span>
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
          </div>

          <div className={css.metaItem}>
            <svg width="16" height="16">
              <use href="/icons/sprite.svg#map" />
            </svg>

            <span>{camper.location}</span>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          <div className={css.feature}>
            <svg width="20" height="20">
              <use href="/icons/sprite.svg#gas-station" />
            </svg>

            <span>
              {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
            </span>
          </div>

          <div className={css.feature}>
            <svg width="20" height="20">
              <use href="/icons/sprite.svg#automatic" />
            </svg>

            <span>
              {camper.transmission.charAt(0).toUpperCase() +
                camper.transmission.slice(1)}
            </span>
          </div>

          <div className={css.feature}>
            <svg width="20" height="20">
              <use href="/icons/sprite.svg#car" />
            </svg>

            <span>
              {camper.form
                .replace("_", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </span>
          </div>
        </div>

        <Link href={`/catalog/${camper.id}`} className={css.button}>
          Show More
        </Link>
      </div>
    </article>
  );
}
