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
    tabs: [
      {
        title: 'Financial',
        symbols: [
          { s: 'NYSE:JPM', d: 'JPMorgan Chase' },
          { s: 'NYSE:WFC', d: 'Wells Fargo & Co' },
          { s: 'NYSE:BAC', d: 'Bank of America Corp' },
          { s: 'NYSE:HSBC', d: 'HSBC Holdings Plc' },
          { s: 'NYSE:C', d: 'Citigroup Inc' },
          { s: 'NYSE:MA', d: 'Mastercard Incorporated' },
          { s: 'NYSE:V', d: 'Visa' },
          //{ s: 'NYSE:', d: '' },
        ],
      },
      {
        title: 'Technology',
        symbols: [
          { s: 'NASDAQ:AMZN', d: 'Amazon' },
          { s: 'NASDAQ:AAPL', d: 'Apple' },
          { s: 'NASDAQ:GOOGL', d: 'Alphabet' },
          { s: 'NASDAQ:MSFT', d: 'Microsoft' },
          { s: 'NASDAQ:NFLX', d: 'Netflix' },
          { s: 'NASDAQ:META', d: 'Meta Platforms' },
          { s: 'NASDAQ:TSLA', d: 'Tesla Inc' },
          { s: 'NYSE:ORCL', d: 'Oracle Corp' },
          { s: 'NASDAQ:PLTR', d: 'Palantir Technologies Inc' },
          //{ s: 'NASDAQ:', d: '' },
        ],
      },
      {
        title: 'Services',
        symbols: [
          { s: 'NYSE:BABA', d: 'Alibaba Group Holdings Ltd' },
          { s: 'NYSE:T', d: 'AT&T Inc' },
          { s: 'NYSE:WMT', d: 'Walmart' },
          { s: 'NYSE:PG', d: 'Procter & Gamble Co' },
          { s: 'NYSE:HD', d: 'Home Depot Inc' },
          { s: 'NYSE:KO', d: 'Coca-Cola Co' },
          { s: 'NYSE:JNJ', d: 'Johnson & Johnson' },
          //{ s: 'NYSE:', d: '' },
        ],
      },
    ],
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
  }

/* ------------------------------------------------------------------------- */

export const HEATMAP_WIDGET_CONFIG = {
  dataSource: 'SPX500',
  blockSize: 'market_cap_basic',
  blockColor: 'change',
  grouping: 'sector',
  isTransparent: true,
  locale: 'en',
  symbolUrl: '',
  colorTheme: 'dark',
  exchanges: [],
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  isMonoSize: false,
  width: '100%',
  height: '600',
};

export const LATEST_STORIES_WIDGET_CONFIG = {
  displayMode: 'regular',
  feedMode: 'market',
  colorTheme: 'dark',
  isTransparent: true,
  locale: 'en',
  market: 'stock',
  width: '100%',
  height: '600',
};