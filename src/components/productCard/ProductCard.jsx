//General react imports
import React from "react";
import { Link } from "react-router-dom";
//Styles
import {
  CartImg,
  Product,
  ProductImage,
  OutOfStockLayer,
  Price,
} from "./style";
//Redux stuff
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions/addToCartAction";
import { getProductSelectedAttributes } from "../../utils/products";
//Utils
import { handelPrice } from "../../utils/changePrice";

class ProductCard extends React.Component {
  render() {
    const inStock = this.props.product.inStock;
    return (
      <Product>
        {!inStock ? (
          <Link to={`/product/${this.props.product.id}`}>
            <OutOfStockLayer inStock={inStock}>
              <h3>Out Of Stock</h3>
            </OutOfStockLayer>
          </Link>
        ) : null}
        <Link to={`/product/${this.props.product.id}`}>
          <ProductImage src={this.props.product.gallery[0]}></ProductImage>
        </Link>

        <CartImg
          onClick={() => this.props.addToCart(this.getProductForCart())}
          src="/images/iconcart.svg"
        />
        <Price>
          <h2>{this.props.product.name}</h2>
          <h3>
            {this.props.currencySymbol}
            {handelPrice(this.props.product.prices, this.props.currencySymbol)}
          </h3>
        </Price>
      </Product>
    );
  }

  getProductForCart = () => {
    const product = { ...this.props.product };
    product.attributes = getProductSelectedAttributes(this.props.product);
    return product;
  };
}

const mapStateToProps = (state) => {
  return {
    currencySymbol: state.currency.currentSymbol,
    currencyLabel: state.currency.Label,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCartAction(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
