import { default as React } from 'react';

export interface PieChartProps {
    /** The data to display in the chart. */
    data: any[];
    /** The key in the data object that corresponds to the value of each slice. */
    dataKey: string;
    /** The key in the data object that corresponds to the name of each slice. */
    nameKey: string;
    /** An optional title to display above the chart. */
    title?: string;
}
/**
 * @wizard
 * @name PieChart
 * @description A theme-aware pie chart component powered by Recharts, for showing proportional relationships of parts to a whole.
 * @tags charts, data-visualization, rechart
 * @category charts
 */
export declare const PieChart: React.FC<PieChartProps>;
