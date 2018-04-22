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
  setup: (ctx) => {
    let cards = ctx.random.Shuffle(ALL_CARDS);
    let players = {};
    for (let i = 0; i < ctx.numPlayers; i++) {
      players[`${i}`] = { card: cards[i] };
    }
    return { count: 0, players: players };
  },

  moves: {
    sayNumber(G, ctx, number) {
      return { G..., count: number };
    }
  },

  flow: {
  },

  playerView: (G, ctx, playerID) => {
    let playersStriped = Object.assign({}, G.players);
    delete playersStriped[playerID];
    return { ...G, players: playersStriped };
  }
});
