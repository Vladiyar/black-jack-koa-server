import {connect} from "react-redux";
import {token} from "../../../reducers/selectors"
import {login} from "../../../reducers/actions";
import {createStructuredSelector} from "reselect";
import Login from "./Login";

const mapStateToProp = createStructuredSelector({

    token,
})

const mapDispatchToProps = {
    login: login
}

export default connect(mapStateToProp, mapDispatchToProps)(Login);