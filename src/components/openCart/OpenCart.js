//General react imports
import React from "react";
import { Link } from "react-router-dom";
//Redux stuff
import { connect } from "react-redux";
import {
  productQuantityIncrementAction,
  productQuatityDecrementAction,
} from "../../redux/actions/productQuantity/productQuantityAction";
import { toggleCartAction } from "../../redux/actions/toggleCart/toggleCartAction";
//Styles
import {
  CartList,
  CartDetails,
  CartTitle,
  CardDetailsWrapper,
  CartPoductName,
  CartProductPrice,
  CartProductSpecs,
  CartProductNumber,
  Total,
  CallToActions,
  Color,
  SelectedVariants,
} from "./style";
//utils
import { generateTotalPrice } from "../../utils/calcTotalPrice";

class OpenCart extends React.Component {
  render() {
    return (
      <CartList active={this.props.toggle}>
        <CartTitle>My Bag, 2 items</CartTitle>
        {this.props.cart.length
          ? this.props.cart.map((product) => {
              return (
                <CartDetails key={product.cartId}>
                  <CardDetailsWrapper>
                    <CartPoductName>{product.name}</CartPoductName>
                    <CartProductPrice>
                      {product.prices[0].currency.symbol}
                      {product.prices[0].amount}
                    </CartProductPrice>
                    <CartProductSpecs>
                      {product.attributes.map((attr) => {
                        return attr.items.map((item, i) => {
                          if (attr.id === "Color") {
                            return (
                              <Color
                                key={i}
                                selected={
                                  attr.selectedVariant.value === item.value
                                }
                                color={item.value.toString()}
                              />
                            );
                          }
                          return (
                            <SelectedVariants
                              key={i}
                              selected={
                                attr.selectedVariant.value === item.value
                              }
                            >
                              {item.value}
                            </SelectedVariants>
                          );
                        });
                      })}
                    </CartProductSpecs>
                  </CardDetailsWrapper>
                  <CartProductNumber>
                    <div>
                      <button
                        onClick={() => this.props.incrementProduct(product)}
                      >
                        +
                      </button>
                      <h4>{product.qty}</h4>
                      <button
                        onClick={() => this.props.decrementProduct(product)}
                      >
                        -
                      </button>
                    </div>
                    <img src={product.gallery[0]} alt={product.name} />
                  </CartProductNumber>
                </CartDetails>
              );
            })
          : null}
        <Total>
          <h3>Total</h3>
          {this.props.currencySymbol}
          {generateTotalPrice(
            this.props.cart,
            this.props.currencySymbol
          ).toFixed(2)}
        </Total>
        <CallToActions>
          <Link onClick={() => this.props.toggleCart("close")} to="/cart">
            VIEW BAG
          </Link>
          <Link to="#">CHECKOUT</Link>
        </CallToActions>
      </CartList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.cart.data),
    toggle: state.toggle.toggleState,
    currencySymbol: state.currency.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementProduct: (product) =>
      dispatch(productQuantityIncrementAction(product)),
    decrementProduct: (product) =>
      dispatch(productQuatityDecrementAction(product)),
    toggleCart: (close) => dispatch(toggleCartAction(close)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenCart);
