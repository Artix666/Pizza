import { BasketEmptyContent } from "../ui/component/BasketContent";
import { Container } from "../ui/component/Container/Container";

export const Basket = () => {
  return (
    <section>
      <Container>
        <BasketEmptyContent />
      </Container>
    </section>
  );
};
