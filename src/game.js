import { Game } from 'boardgame.io/core';

const DOUBLE = 'x2';
const MAX_ZERO = 'MAX -> 0';
const RANDOM = '?';

const ALL_CARDS = [
  20, 15, 15, 10, 10, 10,
  5, 5, 5, 5, 4, 4, 4, 4,
  3, 3, 3, 3, 2, 2, 2, 2,
  1, 1, 1, 1, 0, 0, 0, 0,
  -5, -5, -10, DOUBLE, MAX_ZERO, RANDOM
];

export const Coyote = Game({
  setup: () => {},

  moves: {
  },

  flow: {
  },
});
