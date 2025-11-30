import clsx from "clsx";
import { Container } from "../Container/Container";
import styles from "./not-found-content.module.scss";
import { Span } from "../Span";

export const NotFoundContent = () => {
  return (
    <section className={clsx(styles.notFoundContent)}>
      <Container>
        <Span className={clsx(styles.notFoundContentSmile)}>🤔</Span>
        <h1 className={clsx(styles.notFoundContentTitle)}>Ничего не найдено</h1>
        <p className={clsx(styles.notFoundContentDesc)}>
          К сожалению данная страница отсутствует в нашем интернет магазине
        </p>
      </Container>
    </section>
  );
};
