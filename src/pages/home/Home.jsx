//General react imports
import React from "react";
//Components
import ProductCard from "../../components/productCard/ProductCard";
//Redux stuff
import { connect } from "react-redux";
import {
  fetchCategoriesAction,
  fetchCategoryProducts,
} from "../../redux/actions/fetchCategories/fetchCategoriesAction";
//Styles
import { HomeWrapper, HomeHeadLine, ProductsWrapper } from "./style";

class Home extends React.Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
  }

  render() {
    return (
      <HomeWrapper>
        <HomeHeadLine>{this.props.catName}</HomeHeadLine>
        <ProductsWrapper>
          {this.props.categories?.length
            ? this.props?.products?.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))
            : null}
        </ProductsWrapper>
      </HomeWrapper>
    );
  }
}

//Dispatch
const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    products: state.categories?.products
      ? Object.values(state.categories?.products)
      : null,
    cart: state.cart.data,
    filteredProducts: state.filterPages.arrayIndex,
    catName: state.filterPages.catName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategoriesAction()),
    getProducts: () => dispatch(fetchCategoryProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
