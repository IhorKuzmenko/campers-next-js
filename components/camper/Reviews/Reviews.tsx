import css from "./Reviews.module.css";

import { Review } from "@/types/camper";
import Stars from "@/components/camper/Stars/Stars";

interface Props {
  reviews?: Review[];
}

export default function Reviews({ reviews = [] }: Props) {
  if (reviews.length === 0) {
    return <div className={css.reviews}>No reviews yet.</div>;
  }

  return (
    <>
    <div className={css.reviews}>
      {reviews.map((review) => (
        <article key={review.id} className={css.wrapper}>
          <div className={css.header}>
            <div className={css.avatar}>{review.reviewer_name[0]}</div>

            <div>
              <h3 className={css.name}>{review.reviewer_name}</h3>
              <Stars rating={review.reviewer_rating} />
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </article>
      ))}
      </div>
      </>
  );
}
