"use client";

import Image from "next/image";

import css from "./EmptyState.module.css";

interface EmptyStateProps {
  onClear?: () => void;
  onViewAll?: () => void;
}

export default function EmptyState({ onClear, onViewAll }: EmptyStateProps) {
  return (
    <div className={css.wrapper}>
      <Image
        src="/images/notFoundImage.png"
        alt="No campers found"
        width={488}
        height={463}
      />

      <h2 className={css.title}>No campers found</h2>

      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      {(onClear || onViewAll) && (
        <div className={css.buttons}>
          {onClear && (
            <button className={css.clearButton} onClick={onClear}>
              ✕ Clear filters
            </button>
          )}

          {onViewAll && (
            <button className={css.viewButton} onClick={onViewAll}>
              View all campers
            </button>
          )}
        </div>
      )}
    </div>
  );
}
