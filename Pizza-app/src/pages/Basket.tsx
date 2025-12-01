import {
  BasketContent,
  BasketEmptyContent,
} from "../ui/component/BasketContent";
import { Container } from "../ui/component/Container/Container";

export const Basket = () => {
  return (
    <section>
      <Container maxWidth={820}>
        <BasketContent />
        {/* <BasketEmptyContent /> */}
      </Container>
    </section>
  );
};
