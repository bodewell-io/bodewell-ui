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
    ResponsiveContainer 
} from 'recharts';
import { useTheme } from '../contexts/ThemeContext';

export interface LineChartProps {
  data: any[];
  dataKeyX: string;
  lineKeys: { key: string; color: string }[];
  title?: string;
}

/**
 * @wizard
 * @name LineChart
 * @description A theme-aware line chart component powered by Recharts, for visualizing trends over time or categories.
 * @tags charts, data-visualization, rechart
 * @category charts
 */
export const LineChart: React.FC<LineChartProps> = ({ data, dataKeyX, lineKeys, title }) => {
  const { theme } = useTheme();

  const axisColor = theme === 'light' ? '#314155' : '#D1D5DB';
  const gridColor = theme === 'light' ? '#E5E7EB' : '#4B5563';
  const tooltipBg = theme === 'light' ? '#FFFFFF' : '#1F2937';
  const tooltipText = theme === 'light' ? '#314155' : '#D1D5DB';

  return (
    <div className="w-full h-96 bg-card border border-border rounded-lg shadow-md p-4 flex flex-col">
      {title && <h3 className="text-xl font-semibold mb-4 text-text">{title}</h3>}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey={dataKeyX} stroke={axisColor} tick={{ fill: axisColor }} />
          <YAxis stroke={axisColor} tick={{ fill: axisColor }} />
          <Tooltip
            contentStyle={{ backgroundColor: tooltipBg, borderColor: gridColor }}
            itemStyle={{ color: tooltipText }}
            labelStyle={{ color: tooltipText }}
          />
          <Legend />
          {lineKeys.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};