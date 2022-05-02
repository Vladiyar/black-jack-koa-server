import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {game} from "../../reducers/actions";
import {players, currentPlayer} from "../../reducers/selectors"
import GameArea from "./GameArea";

const mapStateToProp = createStructuredSelector({
  currentPlayer,
  players,
})

const mapDispatchToProps = {
  getGame: game
}

export default connect(mapStateToProp, mapDispatchToProps)(GameArea);