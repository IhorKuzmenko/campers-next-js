import CamperCard from "../CamperCard/CamperCard";

import { Camper } from "@/types/camper";

import css from "./CamperList.module.css";

interface Props {
  campers: Camper[];
}

export default function CamperList({ campers }: Props) {
  if (campers.length === 0) {
    return <p className={css.empty}>No campers found.</p>;
  }

  return (
    <section className={css.list}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </section>
  );
}
