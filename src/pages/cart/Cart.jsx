//General react imports
import React from "react";
//Components
import ImageSlider from "../../components/imageSlider/ImageSlider";
//Redux stuff
import { connect } from "react-redux";
import {
  productQuantityIncrementAction,
  productQuatityDecrementAction,
} from "../../redux/actions/productQuantity/productQuantityAction";
//Utils
import { handelPrice } from "../../utils/changePrice";
//Styles
import {
  CartWrapper,
  HeadLine,
  ProductWrapper,
  ProductDetails,
  ProductName,
  Price,
  Sizes,
  ProductQuantity,
  Qunatity,
  SelectedVariants,
  Color,
} from "./style";

class Cart extends React.Component {
  render() {
    return (
      <>
        <CartWrapper>
          <HeadLine>Cart</HeadLine>
          {this.props.cart.length
            ? this.props.cart.map((product) => (
                <ProductWrapper key={product.cartId}>
                  <ProductDetails>
                    <ProductName>{product.name}</ProductName>

                    <Price>
                      {this.props.currencySymbol}
                      {handelPrice(product.prices, this.props.currencySymbol)}
                    </Price>
                    <Sizes>
                      {product.attributes.map((attr, i) =>
                        attr.id === "Color" ? (
                          <Color
                            key={attr.selectedVariant.id}
                            color={attr.selectedVariant.value}
                          />
                        ) : (
                          <SelectedVariants key={i}>
                            {attr.selectedVariant.id}
                          </SelectedVariants>
                        )
                      )}
                    </Sizes>
                  </ProductDetails>
                  <ProductQuantity>
                    <Qunatity>
                      <button
                        onClick={() => this.props.incrementProduct(product)}
                      >
                        +
                      </button>
                      <h5>{product.qty}</h5>
                      <button
                        onClick={() => this.props.decrementProduct(product)}
                      >
                        -
                      </button>
                    </Qunatity>
                    <ImageSlider product={product} />
                  </ProductQuantity>
                </ProductWrapper>
              ))
            : null}
        </CartWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.cart.data),
    currencySymbol: state.currency.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementProduct: (product) =>
      dispatch(productQuantityIncrementAction(product)),
    decrementProduct: (product) =>
      dispatch(productQuatityDecrementAction(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
