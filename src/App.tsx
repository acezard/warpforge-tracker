import React, { useState, useEffect } from "react";
import { Deck } from "./models/types";
import { deepCopyMasterTable } from "./models/masterData";
import DeckTab from "./components/DeckTab";
import { Container, Typography, Button, Box, Tabs, Tab } from "@mui/material";

const App: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);

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

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h4" gutterBottom>
        Deck Tracker
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddDeck}>
        Add New Deck
      </Button>

      <Tabs value={selectedTab} onChange={handleChange} aria-label="deck tabs">
        {decks.map((deck, index) => (
          <Tab key={index} label={deck.deckName} />
        ))}
      </Tabs>

      <Box>
        {decks.map((deck, index) => (
          <div
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            key={index}
          >
            {selectedTab === index && <DeckTab deck={deck} />}
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default App;
