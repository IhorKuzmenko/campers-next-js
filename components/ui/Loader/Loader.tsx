import css from "./Loader.module.css";

export default function LoaderModal() {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.loader}></div>

        <h2>Loading tracks...</h2>

        <p>
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  );
}
