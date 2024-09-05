import { render } from "@testing-library/react";
import Coin from "./Coin";
import '@testing-library/jest-dom/extend-expect';

test("renders the Coin component with correct image", () => {
  const { getByAltText } = render(<Coin side="heads" />);
  expect(getByAltText("heads")).toBeInTheDocument();

  // If you have a separate test image for tails, you can test it similarly
  // render(<Coin side="tails" />);
  // expect(getByAltText("tails")).toBeInTheDocument();
});
