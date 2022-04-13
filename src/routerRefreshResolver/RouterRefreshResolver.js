//General react import
import React from "react";
//Components
import Navbar from "../components/navbar/Navbar";
import { connect } from "react-redux";
import {
  toggleCartAction,
  toggleCurrencyMenu,
} from "../redux/actions/toggleCart/toggleCartAction";
class RouterRefreshResolver extends React.Component {
  render() {
    return (
      <>
        <Navbar
          onClick={() => {
            this.props.closeCartOnOutSideClick("close");
            this.props.toggleCurrencyMenu("close");
          }}
        />
        <main
          onClick={() => {
            this.props.closeCartOnOutSideClick("close");
            this.props.toggleCurrencyMenu("close");
          }}
        >
          {this.props.children}
        </main>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    closeCartOnOutSideClick: (close) => dispatch(toggleCartAction(close)),
    toggleCurrencyMenu: (close) => dispatch(toggleCurrencyMenu(close)),
  };
};
export default connect(null, mapDispatchToProps)(RouterRefreshResolver);
