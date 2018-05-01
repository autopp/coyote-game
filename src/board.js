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

  onClickCoyote(e) {
    this.props.moves.sayCoyote();
    this.props.events.endTurn();
  }

  render() {
    let count = <div>count: {this.props.G.count}</div>
    let playerCards = [];
    for (let playerID in this.props.G.players) {
      let card = playerID === this.props.ctx.currentPlayer ? "-" : this.props.G.players[playerID].card;
      playerCards.push(<div key={playerID}>player {playerID}: {card}</div>)
    }
    let message = <div>current player: {this.props.ctx.currentPlayer}</div>;
    let input = <input type="number" value={this.state.inputNumber} min={this.props.G.count + 1} step="1"  onChange={this.onChange}/>;
    let numberButton = <button type="button" onClick={(e) => this.onClickNumber(e)}>Say number</button>;
    let coyoteButton = <button type="button" onClick={(e) => this.onClickCoyote(e)}>Say coyote</button>;
    return (
      <div>
        {count}
        {playerCards}
        {message}
        <div>{input}{numberButton}</div>
        <div>{coyoteButton}</div>
        <div>Lose: {this.props.ctx.gameover}</div>
      </div>
    );
  }
}
