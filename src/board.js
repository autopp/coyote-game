import React from 'react';

export class CoyoteBoard extends React.Component {
  render() {
    let playerCards = [];
    for (let playerID in this.props.G.players) {
      playerCards.push(<div key={playerID}>player {playerID}: {this.props.G.players[playerID].card}</div>)
    }
    let message = <div>current player: {this.props.ctx.currentPlayer}</div>
    return (
      <div>
        {playerCards}
        {message}
      </div>
    );
  }
}
