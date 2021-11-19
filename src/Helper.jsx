import { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { syncAdd } from "./actions";

class Helper extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    const { count, actions } = this.props;
    if (count > 0 && count < 2) {
      actions.add();
    }
  }
  render() {
    return null;
  }
}

export default connect(
  (state) => ({ count: state }),
  (dispatch) => ({ actions: bindActionCreators({ add: syncAdd }, dispatch) })
)(Helper);
