//General react imports
import React from "react";

//Redux stuff
import { connect } from "react-redux";
import {
  currencyAction,
  activeCurrency,
} from "../../redux/actions/currencyAction/currencyAction";
import { toggleCurrencyMenu } from "../../redux/actions/toggleCart/toggleCartAction";

//Styles
import { SwitcherWrapper, Currency } from "./style";

class CurrencySwitcher extends React.Component {
  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    return (
      <SwitcherWrapper active={this.props.toggle}>
        {this.props.currencyTypes.currencies
          ? this.props.currencyTypes.currencies.map((curr) => (
              <Currency
                activeCurrency={this.props.activeCurrency}
                key={curr.label}
                onClick={() => {
                  this.props.switchCurrentCurrency(curr.symbol);
                  this.props.closeCurrencyMenu();
                }}
              >
                {curr.symbol} {curr.label}
              </Currency>
            ))
          : null}
      </SwitcherWrapper>
    );
  }
}

//State To Props & Dispatch To Props
const mapStateToProps = (state) => {
  return {
    toggle: state.toggle.toggleCurrencyMenuState,
    currencyTypes: state.currency.currency,
    currentCurrency: state.currency.currentSymbol,
  };
};

const mapDisoatchToProps = (dispatch) => {
  return {
    getCurrencies: () => dispatch(currencyAction()),
    switchCurrentCurrency: (currentCurrency) =>
      dispatch(activeCurrency(currentCurrency)),
    closeCurrencyMenu: () => dispatch(toggleCurrencyMenu()),
  };
};

export default connect(mapStateToProps, mapDisoatchToProps)(CurrencySwitcher);
