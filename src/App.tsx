import React, { useState, useEffect } from "react";
import { Deck } from "./models/types";
import { deepCopyMasterTable } from "./models/masterData";
import DeckTab from "./components/DeckTab";
import { Container, Typography, Button, Box } from "@mui/material";

const App: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    const savedDecks = localStorage.getItem("decks");
    if (savedDecks) {
      setDecks(JSON.parse(savedDecks));
    }
  }, []);

  const handleAddDeck = () => {
    const deckName = prompt("Enter deck name:", "New Deck") || "New Deck";
    const newDeck: Deck = {
      deckName,
      factions: deepCopyMasterTable(),
    };
    const updatedDecks = [...decks, newDeck];
    setDecks(updatedDecks);
    localStorage.setItem("decks", JSON.stringify(updatedDecks));
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h4" gutterBottom>
        Deck Tracker
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddDeck}>
        Add New Deck
      </Button>

      <Box>
        {decks.map((deck, index) => (
          <DeckTab key={index} deck={deck} />
        ))}
      </Box>
    </Container>
  );
};

export default App;
