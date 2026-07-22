import Link from "next/link";

import Container from "../Container/Container";

import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Link href="/" className={css.logo}>
            <svg width="136" height="15">
              <use href="/icons/sprite.svg#logo" />
            </svg>
          </Link>

          <nav className={css.nav}>
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
