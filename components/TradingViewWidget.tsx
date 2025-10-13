'use client'

import React, { useRef, memo } from 'react';
import { cn } from '@/lib/utils';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';

// Source-- https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/


interface TradingViewWidgetProps{
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>
  height?: number;
  className: string;
}

const TradingViewWidget = ({ title, scriptUrl, config, height=600, className}: TradingViewWidgetProps) => {

  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && <h3 className='font-semibold text-2xl text-yellow-400 mb-5'>{title}</h3>}
      <div className={cn("tradingview_widget_container", className)} ref={containerRef}>
        <div className="tradingview_widget_container_widget" style={{ height, width: "100%" }} />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
