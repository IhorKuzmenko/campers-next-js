import css from "./Stars.module.css";

interface StarsProps {
  rating: number;
  size?: number;
}

export default function Stars({ rating, size = 16 }: StarsProps) {
  return (
    <div className={css.stars}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className={css.star} width={size} height={size}>
          <use
            href={`/icons/sprite.svg#${index < rating ? "star" : "rating"}`}
          />
        </svg>
      ))}
    </div>
  );
}
