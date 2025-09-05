// packages/ui/src/charts/LineChart.tsx
"use client";

import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useChartTheme } from '../hooks/useChartTheme';

export interface LineChartProps {
  data: any[];
  dataKeyX: string;
  lineKeys: string[];
}

/**
 * @wizard
 * @name LineChart
 * @description A theme-aware line chart component powered by Recharts, for visualizing trends over time or categories.
 * @tags charts, data-visualization, rechart
 * @category charts
 */


export const LineChart: React.FC<LineChartProps> = ({ data, dataKeyX, lineKeys }) => {
  const { textColor, gridColor, tooltipBg, palette } = useChartTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey={dataKeyX} stroke={textColor} tick={{ fill: textColor }} />
        <YAxis stroke={textColor} tick={{ fill: textColor }} />
        <Tooltip
          contentStyle={{ backgroundColor: tooltipBg, borderColor: gridColor, borderRadius: '0.5rem' }}
          itemStyle={{ color: textColor }}
          labelStyle={{ color: textColor, fontWeight: 'bold' }}
        />
        <Legend wrapperStyle={{ color: textColor }} />
        {lineKeys.map((key, index) => (
          <Line key={key} type="monotone" dataKey={key} stroke={palette[index % palette.length]} strokeWidth={2} activeDot={{ r: 8 }} />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};