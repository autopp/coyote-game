import { Client } from 'boardgame.io/react';
import { Coyote } from './game';
import { CoyoteBoard } from './board';

const App = Client({
  game: Coyote,
  board: CoyoteBoard
});

export default App;
