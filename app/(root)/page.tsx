import { Button } from "@/components/ui/button"
import TradingViewWidget from "@/components/TradingViewWidget"
import { 
  MARKET_OVERVIEW_WIDGET_CONFIG_ONE, 
  MARKET_OVERVIEW_WIDGET_CONFIG_TWO, 
  HEATMAP_WIDGET_CONFIG,
  LATEST_STORIES_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG
} from "@/lib/constants"

// chart types
// https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js


const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className="flex min-h-screen home_wrapper">
      <section className="grid w-full gap-8 home_section">
        <div className="md:col-span-1 xl:col-span-1">
          {/* Widge 1 */}
          <TradingViewWidget 
            title='General Markets'
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG_TWO}
            className=""
            height={600}
          />
        </div>

        {/* Widget 2 */}
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget 
            title='Stock Heatmap'
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            className=""
            height={600}
          />          
        </div>

        <Button>Halal or Nah</Button>
      </section>


      <section className="grid w-full gap-8 home_section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          {/* Widge 3 */}
          <TradingViewWidget 
            title='Stories'
            scriptUrl={`${scriptUrl}timeline.js`}
            config={LATEST_STORIES_WIDGET_CONFIG}
            className=""
            height={600}
          />
        </div>

        {/* Widget 4 */}
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget 
            title='General Quotes'
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
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