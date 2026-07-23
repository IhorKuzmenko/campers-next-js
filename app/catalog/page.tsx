import Container from "@/components/layout/Container/Container";
import CatalogClient from "./CatalogClient";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <section className={css.catalog}>
      <Container>
        <CatalogClient />
      </Container>
    </section>
  );
}
