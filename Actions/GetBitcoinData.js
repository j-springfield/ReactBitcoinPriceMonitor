import constants from '../Utilities/Constants';

export default class GetBitcoinData {
  static getRealTime() {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((response) => response.json());
  }

  static getHistorical() {
    return fetch("https://api.coindesk.com/v1/bpi/historical/close.json").then((response) => response.json());
  }
}
