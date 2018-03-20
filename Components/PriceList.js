import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import getBitcoinData from "../Actions/GetBitcoinData";

export default class PriceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      USDData: [],
      currencyCode: [],
      description: [],
      exchangeRate: [],
      exchangeRateFloat: [],
      currencySymbol: [],
      historicalPrices: []
    };
  }

  componentWillMount() {
    getBitcoinData.getRealTime().then(response => {
      this.setState({
        USDData: response.bpi.USD,
        currencyCode: response.bpi.USD.code,
        description: response.bpi.USD.description,
        exchangeRate: response.bpi.USD.rate,
        exchangeRateFloat: response.bpi.USD.rate_float,
        currencySymbol: response.bpi.USD.symbol
      });
    });

    getBitcoinData.getHistorical().then(response => {
      this.setState({
        historicalPrices: response.bpi
      });
    });
  }

  historicalPrices = [];
  historicalList = [];

  historicalPricesJSONtoList() {
    days = [];
    prices = [];

    for (var day in Object.keys(this.state.historicalPrices)) {
      days.push(Object.keys(this.state.historicalPrices)[day]);
    }

    for (var price in this.state.historicalPrices) {
      prices.push(this.state.historicalPrices[price]);
    }

    for (i = 0; i < days.length; i++) {
      dayPriceObject = {};
      dayPriceObject["day"] = days[i];
      dayPriceObject["price"] = prices[i];
      this.historicalList.push(dayPriceObject);
    }
  }

  render() {
      this.historicalPricesJSONtoList();
      return (
        <View>
            <Text style={styles.bodyText}>
                One Bitcoin is currently priced at ${this.state.exchangeRate} {this.state.currencyCode}.
            </Text>
            
            <FlatList
                data={this.historicalList}
                renderItem={({item}) => <Text style={styles.bodyText}>Date: {item.day}, Price: {item.price}</Text>}
            />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  priceList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  bodyText: {
    color: 'orange',
  },
});
