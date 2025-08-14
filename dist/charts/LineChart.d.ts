import React from 'react';
export interface LineChartProps {
    data: any[];
    dataKeyX: string;
    lineKeys: {
        key: string;
        color: string;
    }[];
    title?: string;
}
/**
 * @wizard
 * @name LineChart
 * @description A theme-aware line chart component powered by Recharts, for visualizing trends over time or categories.
 * @tags charts, data-visualization, rechart
 * @category charts
 */
export declare const LineChart: React.FC<LineChartProps>;
