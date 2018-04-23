import React from 'react';

export class CoyoteBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputNumber: 0 };
  }

  render() {
    let playerCards = [];
    for (let playerID in this.props.G.players) {
      playerCards.push(<div key={playerID}>player {playerID}: {this.props.G.players[playerID].card}</div>)
    }
    let message = <div>current player: {this.props.ctx.currentPlayer}</div>;
    let input = <div><input type="number" value={this.state.inputNumber + 1} min={this.state.inputNumber + 1} step="1" /></div>;
    return (
      <div>
        {playerCards}
        {message}
        {input}
      </div>
    );
  }
}
