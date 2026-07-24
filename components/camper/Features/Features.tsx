import css from "./Features.module.css";

import { CamperDetails } from "@/types/camper";

interface Props {
  camper: CamperDetails;
}

export default function Features({ camper }: Props) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Vehicle details</h2>

      <div className={css.badges}>
        {camper.amenities.map((item) => (
          <span key={item} className={css.badge}>
            {item}
          </span>
        ))}
      </div>

      <ul className={css.details}>
        <li>
          <span>Form</span>
          <span>{camper.form}</span>
        </li>

        <li>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>

        <li>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>

        <li>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>

        <li>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>

        <li>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}
