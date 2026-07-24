import css from "./CamperInfo.module.css";

import { CamperDetails } from "@/types/camper";

interface CamperInfoProps {
  camper: CamperDetails;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <section className={css.wrapper}>
      <h1 className={css.title}>{camper.name}</h1>

      <div className={css.meta}>
        <div className={css.rating}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/sprite.svg#star" />
          </svg>

          <span>
            {camper.rating} ({camper.totalReviews} Reviews)
          </span>
        </div>

        <div className={css.location}>
          <svg className={css.icon} width="16" height="16">
            <use href="/icons/sprite.svg#map" />
          </svg>

          <span>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>€{camper.price.toFixed(2)}</p>

      <p className={css.description}>{camper.description}</p>
    </section>
  );
}
