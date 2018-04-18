const Server = require('boardgame.io/server').Server;
const Coyote = require('./game').Coyote;
const server = Server({ games: [Coyote] });
server.run(8000);
