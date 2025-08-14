import React from 'react';
import { TableHeader } from '../data-display/Table';
export interface ChartWithTableProps {
    /** The title of the chart. */
    title: string;
    /** The chart component to be displayed. */
    children: React.ReactNode;
    /** The data used by the chart, which will be displayed in the table. */
    data: any[];
    /** The header configuration for the data table. */
    tableHeaders: TableHeader[];
}
/**
 * @wizard
 * @name ChartWithTable
 * @description A wrapper component that combines a chart with an option to view its underlying data in a table within a drawer.
 * @tags templates, charts, data-display, pattern, dashboard
 * @category templates-patterns
 */
export declare const ChartWithTable: React.FC<ChartWithTableProps>;
