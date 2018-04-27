import React from 'react';

export class CoyoteBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputNumber: this.props.G.count + 1 };
  }

  onChange = e => {
    this.setState({ inputNumber: parseInt(e.target.value, 10) });
  }

  onClickNumber(e) {
    this.props.moves.sayNumber(this.state.inputNumber);
    this.props.events.endTurn();
    this.setState({ inputNumber: this.state.inputNumber + 1 });
  }

  render() {
    let playerCards = [];
    for (let playerID in this.props.G.players) {
      playerCards.push(<div key={playerID}>player {playerID}: {this.props.G.players[playerID].card}</div>)
    }
    let message = <div>current player: {this.props.ctx.currentPlayer}</div>;
    let input = <input type="number" value={this.state.inputNumber} min={this.props.G.count + 1} step="1"  onChange={this.onChange}/>;
    let numberButton = <button type="button" onClick={(e) => this.onClickNumber(e)}>Say number</button>;
    return (
      <div>
        {playerCards}
        {message}
        <div>{input}{numberButton}</div>
      </div>
    );
  }
}
