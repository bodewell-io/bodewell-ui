import { default as React } from 'react';

export interface BarChartProps {
    data: any[];
    dataKeyX: string;
    barKeys: {
        key: string;
        color: string;
    }[];
    title?: string;
}
/**
 * @wizard
 * @name BarChart
 * @description A theme-aware bar chart component powered by Recharts, for comparing categorical data.
 * @tags charts, data-visualization, rechart
 * @props
 * - name: data
 * type: any[]
 * description: The dataset for the chart. Each object in the array represents a category.
 * - name: dataKeyX
 * type: string
 * description: The key from your data objects to be used for the X-axis (e.g., 'name', 'category').
 * - name: barKeys
 * type: { key: string; color: string }[]
 * description: An array of objects, each specifying a data key for a bar series and its color (e.g., `[{ key: 'pv', color: '#8884d8' }]`).
 * - name: title
 * type: string
 * description: An optional title to display above the chart.
 * @category charts
 */
export declare const BarChart: React.FC<BarChartProps>;
