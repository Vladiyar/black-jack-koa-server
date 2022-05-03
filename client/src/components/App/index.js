import {connect} from "react-redux";
import {result, fetched, token} from "../../reducers/selectors"
import App from "./App";
import {createStructuredSelector} from "reselect";
import {game, login} from "../../reducers/actions";

const mapStateToProp = createStructuredSelector({
  fetched,
  result,
  token,
})

const mapDispatchToProps = {
  game: game,
  login: login
}

export default connect(mapStateToProp, mapDispatchToProps)(App);