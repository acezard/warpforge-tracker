// src/App.tsx
import React, { useState } from 'react';
import { Deck } from './models/types';
import { deepCopyMasterTable } from './models/masterData';
import DeckTab from './components/DeckTab';
import { Container, Typography, Button, Box } from '@mui/material';

const App: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  const handleAddDeck = () => {
    const newDeck: Deck = {
      deckName: 'New Deck',
      factions: deepCopyMasterTable(),
    };
    setDecks([...decks, newDeck]);
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
