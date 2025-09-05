import { default as React } from 'react';

export interface PieChartProps {
    data: any[];
    dataKey: string;
    nameKey: string;
}
/**
 * @wizard
 * @name PieChart
 * @description A theme-aware pie chart component powered by Recharts, for showing proportional relationships of parts to a whole.
 * @tags charts, data-visualization, rechart
 * @category charts
 */
export declare const PieChart: React.FC<PieChartProps>;
