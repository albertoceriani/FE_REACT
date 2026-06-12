import style from "./Box.module.css";
export default function Box({ colore, children }) {
  return (
    <>
      <section className={style.box} style={{ "--colore-bordo": colore }}>
        {children}
      </section>
    </>
  );
}
