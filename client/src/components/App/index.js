import {connect} from "react-redux";
import {result, fetched} from "../../reducers/selectors"
import App from "./App";
import {createStructuredSelector} from "reselect";
import {game} from "../../reducers/actions";

const mapStateToProp = createStructuredSelector({
  fetched,
  result,
  // token,
})

const mapDispatchToProps = {
  game: game
}

export default connect(mapStateToProp, mapDispatchToProps)(App);