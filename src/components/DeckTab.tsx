import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { Deck, Faction, Warlord } from "../models/types";

// Helper function to compute derived stats
function getWarlordStats(w: Warlord) {
  const matches = w.offWins + w.offLosses + w.defWins + w.defLosses;
  const totalWins = w.offWins + w.defWins;
  const totalLosses = w.offLosses + w.defLosses;
  const winRate = matches > 0 ? (totalWins / matches) * 100 : 0;
  return { matches, totalWins, totalLosses, winRate };
}

interface DeckTabProps {
  deck: Deck;
}

const DeckTab: React.FC<DeckTabProps> = ({ deck }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h5" gutterBottom>
        {deck.deckName}
      </Typography>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="deck tabs">
        {deck.factions.map((faction, index) => (
          <Tab key={index} label={faction.factionName} />
        ))}
      </Tabs>
      <Box>
        {deck.factions.map((faction, index) => (
          <div
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            key={index}
          >
            {selectedTab === index && (
              <TableContainer>
                <Table size="small" aria-label="deck stats table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Warlord
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Matches
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Off. Wins
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Off. Losses
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Def. Wins
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Def. Losses
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Total Wins
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Total Losses
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#ccc", fontWeight: "bold" }}
                      >
                        Win Rate
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {faction.warlords.map((warlord: Warlord) => {
                      const { matches, totalWins, totalLosses, winRate } =
                        getWarlordStats(warlord);

                      // Color-coded column styles
                      const offWinStyle = { backgroundColor: "#bfb" };
                      const offLossStyle = { backgroundColor: "#fbb" };
                      const defWinStyle = { backgroundColor: "#bfb" };
                      const defLossStyle = { backgroundColor: "#fbb" };
                      const totalWinStyle = { backgroundColor: "#dfd" };
                      const totalLossStyle = { backgroundColor: "#fdd" };
                      const rateStyle = { backgroundColor: "#eee" };

                      return (
                        <TableRow key={warlord.warlordName}>
                          {/* Warlord Name */}
                          <TableCell sx={{ backgroundColor: "#eef" }}>
                            {warlord.warlordName}
                          </TableCell>

                          {/* Matches */}
                          <TableCell>{matches}</TableCell>

                          {/* Off. Wins */}
                          <TableCell sx={offWinStyle}>
                            {warlord.offWins}
                          </TableCell>

                          {/* Off. Losses */}
                          <TableCell sx={offLossStyle}>
                            {warlord.offLosses}
                          </TableCell>

                          {/* Def. Wins */}
                          <TableCell sx={defWinStyle}>
                            {warlord.defWins}
                          </TableCell>

                          {/* Def. Losses */}
                          <TableCell sx={defLossStyle}>
                            {warlord.defLosses}
                          </TableCell>

                          {/* Total Wins */}
                          <TableCell sx={totalWinStyle}>
                            {totalWins}
                          </TableCell>

                          {/* Total Losses */}
                          <TableCell sx={totalLossStyle}>
                            {totalLosses}
                          </TableCell>

                          {/* Win Rate */}
                          <TableCell sx={rateStyle}>
                            {winRate.toFixed(1)}%
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        ))}
      </Box>
    </Paper>
  );
};

export default DeckTab;
