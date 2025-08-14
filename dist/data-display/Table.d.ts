import React from 'react';
export interface TableHeader {
    key: string;
    label: string;
    render?: (value: any, row: Record<string, any>) => React.ReactNode;
}
export interface TableProps {
    headers: TableHeader[];
    data: Record<string, any>[];
    caption?: string;
    className?: string;
}
/**
 * @wizard
 * @name Table
 * @description A simple, theme-aware HTML table component for displaying tabular data, with support for custom cell rendering and empty states.
 * @tags data-display, table, ui
 * @props
 * - name: headers
 * type: "{ key: string; label: string; render?: (value: any, row: Record<string, any>) => React.ReactNode; }[]"
 * description: An array defining the table columns, including a `key`, `label`, and optional `render` function for custom cell content.
 * - name: data
 * type: "Record<string, any>[]"
 * description: An array of objects, where each object represents a row of data for the table.
 * - name: caption
 * type: string
 * description: An optional caption for the table, providing a title or summary.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the table container.
 * @category data-display
 */
export declare const Table: React.FC<TableProps>;
