import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
});

test("creates a new deck with a unique name", () => {
  render(<App />);
  const addButton = screen.getByText("Add New Deck");
  fireEvent.click(addButton);
  const promptSpy = jest.spyOn(window, "prompt").mockReturnValue("Unique Deck");
  fireEvent.click(addButton);
  expect(screen.getByText("Unique Deck")).toBeInTheDocument();
  promptSpy.mockRestore();
});

test("saves the deck to local storage", () => {
  render(<App />);
  const addButton = screen.getByText("Add New Deck");
  fireEvent.click(addButton);
  const promptSpy = jest.spyOn(window, "prompt").mockReturnValue("Saved Deck");
  fireEvent.click(addButton);
  expect(localStorage.setItem).toHaveBeenCalledWith(
    "decks",
    JSON.stringify([{ deckName: "Saved Deck", factions: expect.any(Array) }])
  );
  promptSpy.mockRestore();
});

test("loads decks from local storage on component mount", () => {
  const savedDecks = [
    { deckName: "Loaded Deck", factions: [] },
  ];
  jest.spyOn(localStorage, "getItem").mockReturnValue(JSON.stringify(savedDecks));
  render(<App />);
  expect(screen.getByText("Loaded Deck")).toBeInTheDocument();
});

test("shows only one deck per tab", () => {
  const savedDecks = [
    { deckName: "Deck 1", factions: [] },
    { deckName: "Deck 2", factions: [] },
  ];
  jest.spyOn(localStorage, "getItem").mockReturnValue(JSON.stringify(savedDecks));
  render(<App />);
  expect(screen.getByText("Deck 1")).toBeInTheDocument();
  expect(screen.getByText("Deck 2")).toBeInTheDocument();
  const tab1 = screen.getByRole("tabpanel", { hidden: true, name: "Deck 1" });
  const tab2 = screen.getByRole("tabpanel", { hidden: true, name: "Deck 2" });
  expect(tab1).toBeInTheDocument();
  expect(tab2).toBeInTheDocument();
});
