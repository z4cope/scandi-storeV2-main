//General react imports
import React from "react";

//Styles
import { SliderWrapper, Arrow } from "./style";

class ImageSlider extends React.Component {
  state = {
    imgIndex: 0,
    imagesNum: this.props.product.gallery.length - 1,
  };

  swipeRight() {
    this.setState({ imgIndex: this.state.imgIndex + 1 });
    if (this.state.imgIndex >= this.state.imagesNum) {
      this.setState({ imgIndex: this.state.imgIndex * 0 });
    }
  }
  swipeLeft() {
    this.setState({ imgIndex: this.state.imgIndex - 1 });
    if (this.state.imgIndex < 1) {
      this.setState({
        imgIndex: this.state.imgIndex + this.state.imagesNum,
      });
    }
  }

  render() {
    return (
      <SliderWrapper src={this.props.product.gallery[this.state.imgIndex]}>
        <Arrow onClick={() => this.swipeLeft()} src="/images/arrowLeft.png" />
        <Arrow onClick={() => this.swipeRight()} src="/images/arrowRight.png" />
      </SliderWrapper>
    );
  }
}

export default ImageSlider;
