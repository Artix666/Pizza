import type { FC, ReactElement } from "react";
import ContentLoader from "react-content-loader";

export const PizzaCardSkeleton: FC = (): ReactElement => (
  <ContentLoader
    speed={2}
    width={253}
    height={441}
    viewBox="0 0 253 441"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-404" y="261" rx="11" ry="11" width="253" height="35" />
    <rect x="1" y="251" rx="10" ry="10" width="253" height="28" />
    <rect x="1" y="308" rx="10" ry="10" width="253" height="60" />
    <rect x="0" y="399" rx="10" ry="10" width="83" height="41" />
    <rect x="111" y="400" rx="10" ry="10" width="142" height="40" />
    <circle cx="125" cy="115" r="115" />
  </ContentLoader>
);
