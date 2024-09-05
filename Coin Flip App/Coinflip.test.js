import { render, fireEvent } from "@testing-library/react";
import CoinFlip from "./Coinflip";
import '@testing-library/jest-dom/extend-expect';

test("renders CoinFlip component and updates counts on click", () => {
  const { getByText, getByRole, queryByAltText } = render(<CoinFlip />);

  // Initial state
  expect(getByText(/total flips: 0/i)).toBeInTheDocument();
  expect(getByText(/heads: 0, tails: 0/i)).toBeInTheDocument();
  expect(queryByAltText("heads")).toBeNull();
  expect(queryByAltText("tails")).toBeNull();

  // Click the flip button
  fireEvent.click(getByRole('button', { name: /flip coin!/i }));

  // Check if the total flips increased
  expect(getByText(/total flips: 1/i)).toBeInTheDocument();

  // Check if either heads or tails is shown
  expect(queryByAltText("heads")).toBeInTheDocument();
  expect(queryByAltText("tails")).toBeInTheDocument();
});
