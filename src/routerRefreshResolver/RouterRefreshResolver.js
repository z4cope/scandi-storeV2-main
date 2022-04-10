//General react import
import React from "react";
//Components
import Navbar from "../components/navbar/Navbar";
import { connect } from "react-redux";
import { toggleCartAction } from "../redux/actions/toggleCart/toggleCartAction";
class RouterRefreshResolver extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Navbar />
        <main
          onClick={() => {
            this.props.closeCartOnOutSideClick("close");
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
  };
};
export default connect(null, mapDispatchToProps)(RouterRefreshResolver);
