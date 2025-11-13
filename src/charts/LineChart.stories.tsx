// packages/ui/src/charts/LineChart.tsx
"use client";

import React from 'react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  XAxisProps,
  YAxisProps // <-- 1. Import YAxisProps
} from 'recharts';
import { useChartTheme } from '../hooks/useChartTheme';

export interface LineChartProps {
  data: any[];
  dataKeyX: string;
  lineKeys: string[];
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps; // <-- 2. Add prop for Y-axis rules
  [key: string]: any; 
}

/**
 * @wizard
 * @name LineChart
 * @description A theme-aware line chart component...
 */
export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  dataKeyX, 
  lineKeys, 
  xAxisProps, 
  yAxisProps, // <-- 3. Get the new prop
  ...restOfProps 
}) => {
  const { textColor, gridColor, tooltipBg, palette } = useChartTheme();

  // --- 4. ADD "NO DATA" STATE ---
  if (!data || data.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-sm text-muted-foreground">No data to display</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis 
          dataKey={dataKeyX} 
          stroke={textColor} 
          tick={{ fill: textColor }}
          {...xAxisProps} 
        />
        <YAxis 
          stroke={textColor} 
          tick={{ fill: textColor }}
          {...yAxisProps} // <-- 5. SPREAD the new rules here
        />
        <Tooltip
          contentStyle={{ backgroundColor: tooltipBg, borderColor: gridColor, borderRadius: '0.5rem' }}
          itemStyle={{ color: textColor }}
          labelStyle={{ color: textColor, fontWeight: 'bold' }}
        />
        <Legend wrapperStyle={{ color: textColor }} />
        {lineKeys.map((key, index) => (
          <Line 
            key={key} 
            type="monotone" 
            dataKey={key} 
            stroke={palette[index % palette.length]} 
            strokeWidth={2} 
            activeDot={{ r: 8 }} 
            {...restOfProps} // Pass dot, connectNulls
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};