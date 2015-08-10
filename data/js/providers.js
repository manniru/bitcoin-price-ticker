// Configuration data for each possible ticker ID. These IDs are declared in file index.js
var tickersRepository = {
  // US Dollar prices
  'BitStampUSD': { exchangeName:'BitStamp', currency:'$', baseCurrency:'\u0243', url:"https://www.bitstamp.net/api/ticker/", jsonPath:['last']},
  'BTCeUSD': { exchangeName:'BTCe', currency:'$', baseCurrency:'\u0243', url:"https://btc-e.com/api/2/btc_usd/ticker", jsonPath:['ticker','last']},
  'KrakenUSD': { exchangeName:'Kraken', currency:'$', baseCurrency:'\u0243', url:"https://api.kraken.com/0/public/Ticker?pair=XBTUSD", jsonPath:['result','XXBTZUSD','c',0]},
  'CoinDeskUSD': { exchangeName:'CoinDesk', currency:'$', baseCurrency:'\u0243', url:"http://api.coindesk.com/v1/bpi/currentprice.json", jsonPath:['bpi','USD','rate_float']},
  'CoinbaseUSD': { exchangeName:'Coinbase', currency:'$', baseCurrency:'\u0243', url:"https://coinbase.com/api/v1/currencies/exchange_rates", jsonPath:['btc_to_usd']},
  'CampBXUSD': { exchangeName:'CampBX', currency:'$', baseCurrency:'\u0243', url:"http://campbx.com/api/xticker.php", jsonPath:['Last Trade']},
  'BitPayUSD': { exchangeName:'BitPay', currency:'$', baseCurrency:'\u0243', url:"https://bitpay.com/api/rates", jsonPath:[1,'rate']},
  'TheRockTradingUSD': { exchangeName:'TheRockTrading', currency:'$', baseCurrency:'\u0243', url:"https://www.therocktrading.com/api/ticker/BTCUSD", jsonPath:['result',0,'last']},
  'BitFinexUSD': { exchangeName:'BitFinex', currency:'$', baseCurrency:'\u0243', url:"https://api.bitfinex.com/v1/ticker/btcusd", jsonPath:['last_price']},
  // Euro prices
  'BTCeEUR': { exchangeName:'BTCe', currency:'\u20ac', baseCurrency:'\u0243', url:"https://btc-e.com/api/2/btc_eur/ticker", jsonPath:['ticker','last']},
  'KrakenEUR': { exchangeName:'Kraken', currency:'\u20ac', baseCurrency:'\u0243', url:"https://api.kraken.com/0/public/Ticker?pair=XBTEUR", jsonPath:['result','XXBTZEUR','c',0]},
  'CoinDeskEUR': { exchangeName:'CoinDesk', currency:'\u20ac', baseCurrency:'\u0243', url:"http://api.coindesk.com/v1/bpi/currentprice.json", jsonPath:['bpi','EUR','rate_float']},
  'BitPayEUR': { exchangeName:'BitPay', currency:'\u20ac', baseCurrency:'\u0243', url:"https://bitpay.com/api/rates", jsonPath:[2,'rate']},
  'BitonicEUR': { exchangeName:'Bitonic', currency:'\u20ac', baseCurrency:'\u0243', url:"https://bitonic.nl/api/price", jsonPath:['price']},
  'Bitcoin-CentralEUR': { exchangeName:'Bitcoin-Central', currency:'\u20ac', baseCurrency:'\u0243', url:"https://bitcoin-central.net/api/v1/data/eur/ticker", jsonPath:['price']},
  'TheRockTradingEUR': { exchangeName:'TheRockTrading', currency:'\u20ac', baseCurrency:'\u0243', url:"https://www.therocktrading.com/api/ticker/BTCEUR", jsonPath:['result',0,'last']},
  // Pound prices
  'CoinDeskGBP': { exchangeName:'CoinDesk', currency:'\u00a3', baseCurrency:'\u0243', url:"http://api.coindesk.com/v1/bpi/currentprice.json", jsonPath:['bpi','GBP','rate_float']},
  'LocalbitcoinsGBP': { exchangeName:'Localbitcoins', currency:'\u00a3', baseCurrency:'\u0243', url:"https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/", jsonPath:['GBP','rates','last']},
  'BittyliciousGBP': { exchangeName:'Bittylicious', currency:'\u00a3', baseCurrency:'\u0243', url:"https://bittylicious.com/api/v1/quote/BTC/GB/GBP/BANK/1", jsonPath:['totalPrice']},
  'BitPayGBP': { exchangeName:'BitPay', currency:'\u00a3', baseCurrency:'\u0243', url:"https://bitpay.com/api/rates", jsonPath:[3,'rate']},
  // Polish zloty
  'BitcurexPLN': { exchangeName:'Bitcurex', currency:'z\u0141', baseCurrency:'\u0243', url:"https://bitcurex.com/api/pln/ticker.json", jsonPath:['last_tx_price']},
  // Canadian dollar prices
  'CaVirTexCAD': { exchangeName:'CaVirTex', currency:'C$', baseCurrency:'\u0243', url:"https://www.cavirtex.com/api/CAD/ticker.json", jsonPath:['last']},
  // Yuan prices
  'BTCChinaCNY': { exchangeName:'BTCChina', currency:'\u5143', baseCurrency:'\u0243', url:"https://data.btcchina.com/data/ticker", jsonPath:['ticker','last']},
  // Ruble prices
  'BTCeRUR': { exchangeName:'BTCe', currency:'RUR', baseCurrency:'\u0243', url:"https://btc-e.com/api/2/btc_rur/ticker", jsonPath:['ticker','last']},
  // Brazilian Real prices
  'MercadoBitcoinBRL': { exchangeName:'MercadoBitcoin', currency:'R$', baseCurrency:'\u0243', url:"https://www.mercadobitcoin.com.br/api/ticker/", jsonPath:['ticker','last']},
  // Turkish Lira
  'BTCTurkTRY': { exchangeName:'BTCTurk', currency:'\u20ba', baseCurrency:'\u0243', url:"https://www.btcturk.com/api/ticker", jsonPath:['last']},
  // Venezuelan Bolivar
  'BitcoinVenezuelaVEF': { exchangeName:'BitcoinVenezuela', currency:'Bs', baseCurrency:'\u0243', url:"http://bitcoinvenezuela.com/api/btcven.json", jsonPath:['BTC','VEF']},
  'LocalbitcoinsVEF': { exchangeName:'Localbitcoins', currency:'Bs', baseCurrency:'\u0243', url:"https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/", jsonPath:['VEF','rates','last']},
  'CoinbaseVEF': { exchangeName:'Coinbase', currency:'Bs', baseCurrency:'\u0243', url:"https://coinbase.com/api/v1/currencies/exchange_rates", jsonPath:['btc_to_vef']},
  // Argentinian Peso
  'BitcoinVenezuelaARS': { exchangeName:'BitcoinVenezuela', currency:'ARS$', baseCurrency:'\u0243', url:"http://bitcoinvenezuela.com/api/btcven.json", jsonPath:['BTC','ARS']},
  'LocalbitcoinsARS': { exchangeName:'Localbitcoins', currency:'ARS$', baseCurrency:'\u0243', url:"https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/", jsonPath:['ARS','rates','last']},
  'CoinbaseARS': { exchangeName:'Coinbase', currency:'ARS$', baseCurrency:'\u0243', url:"https://coinbase.com/api/v1/currencies/exchange_rates", jsonPath:['btc_to_ars']},
  'BitexARS': { exchangeName:'Bitex', currency:'ARS$', baseCurrency:'\u0243', url:"https://bitex.la/api-v1/rest/btc/market/ticker", jsonPath:['last']},
  // Chilean Peso
  'LocalbitcoinsCLP': { exchangeName:'Localbitcoins', currency:'$', baseCurrency:'\u0243', url:"https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/", jsonPath:['CLP','rates','last']},
  // Mexican Peso
  'BitsoMXN': { exchangeName:'Bitso', currency:'$', baseCurrency:'\u0243', url:"https://api.bitso.com/public/info", jsonPath:['btc_mxn','rate']},
  // South African Rand
  'BitXZAR': { exchangeName:'BitX', currency:'R', baseCurrency:'\u0243', url:"https://bitx.co.za/api/1/BTCZAR/ticker", jsonPath:['last_trade']},
  'CoinbaseZAR': { exchangeName:'Coinbase', currency:'R', baseCurrency:'\u0243', url:"https://coinbase.com/api/v1/currencies/exchange_rates", jsonPath:['btc_to_zar']},
  // Shekel (Israel)
  'Bit2CILS': { exchangeName:'Bit2C', currency:'\u20AA', baseCurrency:'\u0243', url:"https://www.bit2c.co.il/Exchanges/BtcNis/Ticker.json", jsonPath:['ll']},
  // Litecoin prices
  'BTCeLitecoin': { exchangeName:'BTCe', currency:'\u0243', baseCurrency:'\u0141', url:"https://btc-e.com/api/2/ltc_btc/ticker", jsonPath:['ticker','last']},
  'KrakenLitecoin': { exchangeName:'Vircurex', currency:'\u0243', baseCurrency:'\u0141', url:"https://api.vircurex.com/api/get_last_trade.json?base=LTC&alt=BTC", jsonPath:['value']},
  'VircurexLitecoin': { exchangeName:'Kraken', currency:'\u0141', baseCurrency:'\u0243', url:"https://api.kraken.com/0/public/Ticker?pair=XBTLTC", jsonPath:['result','XXBTXLTC','c',0]},
  // Litecoin USD prices
  'BTCeLitecoinUSD': { exchangeName:'BTCe', currency:'$', baseCurrency:'\u0141', url:"https://btc-e.com/api/2/ltc_usd/ticker", jsonPath:['ticker','last']},
  // Litecoin EUR prices
  'BTCeLitecoinEUR': { exchangeName:'BTCe', currency:'\u20ac', baseCurrency:'\u0141', url:"https://btc-e.com/api/2/ltc_eur/ticker", jsonPath:['ticker','last']},
  // WorldCoin prices
  'VircurexWorldcoin': { exchangeName:'Vircurex', currency:'\u0243', baseCurrency:'WDC', url:"https://api.vircurex.com/api/get_last_trade.json?base=WDC&alt=BTC", jsonPath:['value']},
  // Dogecoin prices
  'CryptsyDogecoin': { exchangeName:'Cryptsy', currency:'\u0243', baseCurrency:'DOGE', url:"http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=132", jsonPath:['return','markets','DOGE','lasttradeprice']},
  'KrakenDogecoin': { exchangeName:'Kraken', currency:'DOGE', baseCurrency:'\u0243', url:"https://api.kraken.com/0/public/Ticker?pair=XBTXDG", jsonPath:['result','XXBTXXDG','c',0]},
  // Namecoin prices
  'BTCeNamecoinUSD': { exchangeName:'BTCe', currency:'$', baseCurrency:'NMC', url:"https://btc-e.com/api/2/nmc_usd/ticker", jsonPath:['ticker','last']},
  // Auroracoin prices
  'CryptsyAuroracoin': { exchangeName:'Cryptsy', currency:'\u0243', baseCurrency:'AUR', url:"http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=160", jsonPath:['return','markets','AUR','lasttradeprice']},
  // Blackcoin prices
  'CryptsyBlackcoin': { exchangeName:'Cryptsy', currency:'\u0243', baseCurrency:'BC', url:"http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=179", jsonPath:['return','markets','BC','lasttradeprice']},
  // Nxt prices
  'CryptsyNxt': { exchangeName:'Cryptsy', currency:'\u0243', baseCurrency:'NXT', url:"http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=159", jsonPath:['return','markets','NXT','lasttradeprice']},
  'PoloniexNxt': { exchangeName:'Poloniex', currency:'\u0243', baseCurrency:'NXT', url:"https://poloniex.com/public?command=returnTicker", jsonPath:['BTC_NXT', 'last']},
  // Bitshares prices
  'PoloniexBitshares': { exchangeName:'Poloniex', currency:'\u0243', baseCurrency:'BTS', url:"https://poloniex.com/public?command=returnTicker", jsonPath:['BTC_BTS', 'last']},
  // Ripple prices
  'KrakenRipple': { exchangeName:'Kraken', currency:'\u0243', baseCurrency:'XRP', url:"https://api.kraken.com/0/public/Ticker?pair=XBTXRP", jsonPath:['result','XXBTXXRP','c',0]},
  // Maidsafe prices
  'PoloniexMaidsafe': { exchangeName:'Poloniex', currency:'\u0243', baseCurrency:'MAID', url:"https://poloniex.com/public?command=returnTicker", jsonPath:['BTC_MAID', 'last']},
  // BitcoinDark prices
  'PoloniexBitcoindark': { exchangeName:'Poloniex', currency:'\u0243', baseCurrency:'BTCD', url:"https://poloniex.com/public?command=returnTicker", jsonPath:['BTC_BTCD', 'last']},
  // Monero prices
  'PoloniexMonero': { exchangeName:'Poloniex', currency:'\u0243', baseCurrency:'XMR', url:"https://poloniex.com/public?command=returnTicker", jsonPath:['BTC_XMR', 'last']},
  // Dash prices
  'CryptsyDashBTC': { exchangeName:'Cryptsy', currency:'\u0243', baseCurrency:'DASH', url:"http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=155", jsonPath:['return','markets','DRK','lasttradeprice']},
  'CryptsyDashUSD': { exchangeName:'BitFinex', currency:'\u0243', baseCurrency:'DASH', url:"https://api.bitfinex.com/v1/ticker/drkbtc", jsonPath:['last_price']},
  'BitFinexDashBTC': { exchangeName:'Cryptsy', currency:'$', baseCurrency:'DASH', url:"http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=213", jsonPath:['return','markets','DRK','lasttradeprice']},
  'BitFinexDashUSD': { exchangeName:'BitFinex', currency:'$', baseCurrency:'DASH', url:"https://api.bitfinex.com/v1/ticker/drkusd", jsonPath:['last_price']},
  // Burst prices
  'PoloniexBurst': { exchangeName:'Poloniex', currency:'\u0243', baseCurrency:'BURST', url:"https://poloniex.com/public?command=returnTicker", jsonPath:['BTC_BURST', 'last']}
}