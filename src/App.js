import { Client } from 'boardgame.io/react';
import { Coyote } from './game';
import { CoyoteBoard } from './board';

const App = Client({
  game: Coyote,
  board: CoyoteBoard,
  multiplayer: { server: 'localhost:8000' },
});

export default App;
