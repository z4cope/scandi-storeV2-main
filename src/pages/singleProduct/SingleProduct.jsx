//Genral imports
import React from "react";
import DOMPurify from "dompurify";
//Components
import Variants from "../../components/variants/Variants";
//utils
import { handelPrice } from "../../utils/changePrice";
//Redux stuff
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions/addToCartAction";
import {
  clearProduct,
  singleProductAction,
} from "../../redux/actions/singleProduct/singleProductAction";
import { fetchCategoriesAction } from "../../redux/actions/fetchCategories/fetchCategoriesAction";
//Styles
import {
  SingleProductWrapper,
  ProductGallery,
  ProductImageVarients,
  ProductMainImage,
  ProductMiniImage,
  ProductDetails,
  SingleProductTitle,
  Price,
  PriceValue,
  AddToCartBtn,
  ProductDescription,
  OutOfStock,
} from "./style";
import { getProductSelectedAttributes } from "../../utils/products";

class SingleProduct extends React.Component {
  state = {
    bgImg: "",
    productVariants: {},
  };

  changeBgImg(img) {
    this.setState({ bgImg: img });
  }

  componentDidMount() {
    this.props.getCategories();
  }

  componentWillUnmount() {
    this.setState({
      productVariants: {},
    });
  }

  onVariantsChange = (attribId, variant) => {
    this.setState({
      ...this.state,
      productVariants: {
        ...this.state.productVariants,
        [attribId]: variant,
      },
    });
  };

  getProductForCart = () => {
    return {
      ...this.props.product,
      attributes: this.props.product.attributes.map((attrib) => {
        const variant = JSON.parse(JSON.stringify(this.state.productVariants));
        attrib.selectedVariant = variant[attrib.id] || attrib.items[0];
        return { ...attrib };
      }),
    };
  };

  render() {
    return (
      <SingleProductWrapper>
        <ProductGallery>
          <ProductImageVarients>
            {this.props.product?.gallery?.map((img) => (
              <ProductMiniImage
                key={img}
                onClick={() => this.changeBgImg(img)}
                src={img}
              />
            ))}
          </ProductImageVarients>
          <ProductMainImage
            src={
              !this.state.bgImg && this.props.product?.gallery
                ? this.props.product?.gallery[0]
                : this.state.bgImg
            }
          />
        </ProductGallery>
        <ProductDetails>
          <SingleProductTitle>{this.props.product?.name}</SingleProductTitle>
          {this.props.product?.attributes?.length ? (
            <>
              {this.props.product.attributes.map((attr) => (
                <Variants
                  key={attr.id}
                  attr={attr}
                  onVariantsChange={this.onVariantsChange}
                  defaultVariant={attr.selectedVariant}
                  selectedVariant={this.state.productVariants[attr.id]}
                />
              ))}
            </>
          ) : null}
          <Price>PRICE:</Price>
          <PriceValue>
            {this.props.currencySymbol}
            {handelPrice(this.props.product?.prices, this.props.currencySymbol)}
          </PriceValue>
          {this.props.product?.inStock ? (
            <AddToCartBtn
              onClick={() => this.props.addToCart(this.getProductForCart())}
            >
              ADD TO CART
            </AddToCartBtn>
          ) : (
            <OutOfStock>OUT OF STOCK</OutOfStock>
          )}

          <ProductDescription
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(this.props.product?.description),
            }}
          />
        </ProductDetails>
      </SingleProductWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const productId = window.location.href.slice(30);
  const product = state?.categories?.products[productId];

  if (product?.attributes) {
    product.attributes = getProductSelectedAttributes(product);
  }

  return {
    product,
    currency: state.currency.data,
    currencySymbol: state.currency.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(singleProductAction(id)),
    addToCart: (product) => dispatch(addToCartAction(product)),
    clear: () => dispatch(clearProduct()),
    getCategories: () => dispatch(fetchCategoriesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
