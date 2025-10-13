export const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard'},
  { href: '/search', label: 'Search'},
  { href: '/watchlist', label: 'Watchlist'},
  { href: '/faq', label: 'FAQ'},
  // { href: '/', label: ''},
]

/* ------------------------------------------------------------------------- */

export const MARKET_OVERVIEW_WIDGET_CONFIG_ONE = {
  "allow_symbol_change": true,
  "calendar": false,
  "details": false,
  "hide_side_toolbar": true,
  "hide_top_toolbar": false,
  "hide_legend": false,
  "hide_volume": false,
  "hotlist": false,
  "interval": "D",
  "locale": "en",
  "save_image": true,
  "style": "1",
  "symbol": "NASDAQ:AAPL",
  "theme": "light",
  "timezone": "Etc/UTC",
  "backgroundColor": "#ffffff",
  "gridColor": "rgba(46, 46, 46, 0.06)",
  "watchlist": [],
  "withdateranges": false,
  "compareSymbols": [],
  "studies": [],
  "autosize": true
}


export const MARKET_OVERVIEW_WIDGET_CONFIG_TWO = {
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    locale: 'en', // language
    largeChartUrl: '', // link to a large chart if needed
    isTransparent: true, // makes background transparent
    showFloatingTooltip: true, // show tooltip on hover
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    scaleFontColor: '#DBDBDB', // font color for scale
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
  }

/* ------------------------------------------------------------------------- */