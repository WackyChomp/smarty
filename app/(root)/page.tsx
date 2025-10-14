import { Button } from "@/components/ui/button"
import TradingViewWidget from "@/components/TradingViewWidget"
import { MARKET_OVERVIEW_WIDGET_CONFIG_ONE, MARKET_OVERVIEW_WIDGET_CONFIG_TWO } from "@/lib/constants"

// chart types
// https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js


const Home = () => {
  return (
    <div className="flex min-h-screen home_wrapper">
      <section className="grid w-full gap-8 home_section">
        <div className="md:col-span-1 xl:col-span-1">
          {/* Widge 1 */}
          <TradingViewWidget 
            title='General Markets'
            scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
            config={MARKET_OVERVIEW_WIDGET_CONFIG_TWO}
            className=""
            height={600}
          />
        </div>

        {/* Widget 2 */}
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget 
            title='General Markets'
            scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
            config={MARKET_OVERVIEW_WIDGET_CONFIG_TWO}
            className=""
            height={600}
          />          
        </div>

        <Button>Halal or Nah</Button>
      </section>
    </div>
  )
}

export default Home