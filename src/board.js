import React from 'react';

export class CoyoteBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputNumber: this.props.G.count + 1 };
  }

  onChange = e => {
    this.setState({ inputNumber: parseInt(e.target.value, 10) });
  }

  render() {
    let playerCards = [];
    for (let playerID in this.props.G.players) {
      playerCards.push(<div key={playerID}>player {playerID}: {this.props.G.players[playerID].card}</div>)
    }
    let message = <div>current player: {this.props.ctx.currentPlayer}</div>;
    let input = <div><input type="number" value={this.state.inputNumber} min={this.props.G.count + 1} step="1"  onChange={this.onChange}/></div>;
    return (
      <div>
        {playerCards}
        {message}
        {input}
      </div>
    );
  }
}
