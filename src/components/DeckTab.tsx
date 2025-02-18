import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { Deck, Faction, Warlord } from '../models/types';

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
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h5" gutterBottom>
        {deck.deckName}
      </Typography>
      <TableContainer>
        <Table size="small" aria-label="deck stats table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Faction
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Warlord
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Matches
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Off. Wins
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Off. Losses
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Def. Wins
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Def. Losses
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Total Wins
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Total Losses
              </TableCell>
              <TableCell sx={{ backgroundColor: '#ccc', fontWeight: 'bold' }}>
                Win Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deck.factions.map((faction: Faction) => {
              const numberOfWarlords = faction.warlords.length;

              return faction.warlords.map((warlord: Warlord, idx: number) => {
                const { matches, totalWins, totalLosses, winRate } =
                  getWarlordStats(warlord);

                // Color-coded column styles
                const offWinStyle = { backgroundColor: '#bfb' };
                const offLossStyle = { backgroundColor: '#fbb' };
                const defWinStyle = { backgroundColor: '#bfb' };
                const defLossStyle = { backgroundColor: '#fbb' };
                const totalWinStyle = { backgroundColor: '#dfd' };
                const totalLossStyle = { backgroundColor: '#fdd' };
                const rateStyle = { backgroundColor: '#eee' };

                return (
                  <TableRow key={`${faction.factionName}-${warlord.warlordName}`}>
                    {/* 
                      Only render the Faction cell for the first warlord in this faction 
                      so it spans multiple rows. 
                    */}
                    {idx === 0 && (
                      <TableCell
                        rowSpan={numberOfWarlords}
                        sx={{
                          verticalAlign: 'top',
                          backgroundColor: '#cce',
                          fontWeight: 'bold',
                        }}
                      >
                        {faction.factionName}
                      </TableCell>
                    )}

                    {/* Warlord Name */}
                    <TableCell sx={{ backgroundColor: '#eef' }}>
                      {warlord.warlordName}
                    </TableCell>

                    {/* Matches */}
                    <TableCell>{matches}</TableCell>

                    {/* Off. Wins */}
                    <TableCell sx={offWinStyle}>{warlord.offWins}</TableCell>

                    {/* Off. Losses */}
                    <TableCell sx={offLossStyle}>{warlord.offLosses}</TableCell>

                    {/* Def. Wins */}
                    <TableCell sx={defWinStyle}>{warlord.defWins}</TableCell>

                    {/* Def. Losses */}
                    <TableCell sx={defLossStyle}>{warlord.defLosses}</TableCell>

                    {/* Total Wins */}
                    <TableCell sx={totalWinStyle}>{totalWins}</TableCell>

                    {/* Total Losses */}
                    <TableCell sx={totalLossStyle}>{totalLosses}</TableCell>

                    {/* Win Rate */}
                    <TableCell sx={rateStyle}>{winRate.toFixed(1)}%</TableCell>
                  </TableRow>
                );
              });
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DeckTab;
