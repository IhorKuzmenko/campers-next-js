"use client";

import { useState } from "react";
import css from "./Filters.module.css";

interface FiltersProps {
  onSearch: (filters: {
    location: string;
    form: string;
    engine: string;
    transmission: string;
  }) => void;
}

export default function Filters({ onSearch }: FiltersProps) {
  const [location, setLocation] = useState("");

  const [form, setForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  const handleSearch = () => {
    onSearch({
      location,
      form,
      engine,
      transmission,
    });
  };

  const clearFilters = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");

    onSearch({
      location: "",
      form: "",
      engine: "",
      transmission: "",
    });
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.group}>
        <label htmlFor="location">Location</label>

        <div className={css.inputWrapper}>
          <svg className={css.icon} width="20" height="20">
            <use href="/icons/sprite.svg#map" />
          </svg>

          <input
            id="location"
            type="text"
            placeholder="Kyiv"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <h2 className={css.filterTitle}>Filters</h2>

      <div className={css.filterCamperForm}>
        <h3>Camper form</h3>

        <div className={css.radioButtonWrapper}>
          <input
            id="alcove"
            type="radio"
            name="form"
            value="alcove"
            checked={form === "alcove"}
            onChange={(e) => setForm(e.target.value)}
          />

          <label htmlFor="alcove" className={css.label}>
            Alcove
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="panel_van"
            type="radio"
            name="form"
            value="panel_van"
            checked={form === "panel_van"}
            onChange={(e) => setForm(e.target.value)}
          />

          <label htmlFor="panel_van" className={css.label}>
            Panel Van
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="integrated"
            type="radio"
            name="form"
            value="integrated"
            checked={form === "integrated"}
            onChange={(e) => setForm(e.target.value)}
          />

          <label htmlFor="integrated" className={css.label}>
            Integrated
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="semi_integrated"
            type="radio"
            name="form"
            value="semi_integrated"
            checked={form === "semi_integrated"}
            onChange={(e) => setForm(e.target.value)}
          />

          <label htmlFor="semi_integrated" className={css.label}>
            Semi Integrated
          </label>
        </div>
      </div>

      <div className={css.filterEngine}>
        <h3>Engine</h3>

        <div className={css.radioButtonWrapper}>
          <input
            id="diesel"
            type="radio"
            name="engine"
            value="diesel"
            checked={engine === "diesel"}
            onChange={(e) => setEngine(e.target.value)}
          />

          <label htmlFor="diesel" className={css.label}>
            Diesel
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="petrol"
            type="radio"
            name="engine"
            value="petrol"
            checked={engine === "petrol"}
            onChange={(e) => setEngine(e.target.value)}
          />

          <label htmlFor="petrol" className={css.label}>
            Petrol
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="hybrid"
            type="radio"
            name="engine"
            value="hybrid"
            checked={engine === "hybrid"}
            onChange={(e) => setEngine(e.target.value)}
          />

          <label htmlFor="hybrid" className={css.label}>
            Hybrid
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="electric"
            type="radio"
            name="engine"
            value="electric"
            checked={engine === "electric"}
            onChange={(e) => setEngine(e.target.value)}
          />

          <label htmlFor="electric" className={css.label}>
            Electric
          </label>
        </div>
      </div>

      <div className={css.filterTransmisiion}>
        <h3>Transmission</h3>

        <div className={css.radioButtonWrapper}>
          <input
            id="automatic"
            type="radio"
            name="transmission"
            value="automatic"
            checked={transmission === "automatic"}
            onChange={(e) => setTransmission(e.target.value)}
          />

          <label htmlFor="automatic" className={css.label}>
            Automatic
          </label>
        </div>

        <div className={css.radioButtonWrapper}>
          <input
            id="manual"
            type="radio"
            name="transmission"
            value="manual"
            checked={transmission === "manual"}
            onChange={(e) => setTransmission(e.target.value)}
          />

          <label htmlFor="manual" className={css.label}>
            Manual
          </label>
        </div>
      </div>

      <div className={css.buttonWrapper}>
        <button
          type="button"
          className={css.searchButton}
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          type="button"
          className={css.clearButton}
          onClick={clearFilters}
        >
          ✕ Clear filters
        </button>
      </div>
    </aside>
  );
}
