// packages/ui/src/data-display/DataTable.tsx
"use client";

import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // <-- ADD THIS LINE
import 'ag-grid-community/styles/ag-theme-quartz.css'; // <-- ADD THIS LINE
import { 
  type ColDef, 
  type GridOptions
} from 'ag-grid-community';

export interface DataTableProps {
  rowData: any[];
  columnDefs: ColDef[];
  height?: string;
  defaultColDef?: ColDef;
  gridOptions?: GridOptions;
}

/**
 * @wizard
 * @name DataTable
 * @description A powerful data grid component that wraps AG Grid, providing advanced features like sorting, filtering, and resizing, fully themed to match the application.
 * @tags data-display, grid, table, ag-grid, advanced
 * @props
 * - name: rowData
 * type: any[]
 * description: The data to display in the grid, an array of row objects.
 * - name: columnDefs
 * type: ColDef[]
 * description: An array defining the columns of the grid, using AG Grid's `ColDef` structure.
 * - name: height
 * type: string
 * description: The height of the data table container (e.g., '500px', '100%').
 * default: '500px'
 * - name: defaultColDef
 * type: ColDef
 * description: Default column definitions applied to all columns unless overridden.
 * - name: gridOptions
 * type: GridOptions
 * description: Additional AG Grid options to configure the grid's behavior.
 * @category data-display
 */
export const DataTable: React.FC<DataTableProps> = ({
  rowData,
  columnDefs,
  height = '500px',
  defaultColDef,
  gridOptions,
}) => {

  const defaultColDefMemo = useMemo<ColDef>(() => ({
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true,
    ...defaultColDef,
  }), [defaultColDef]);
  
  // Using the modern AG Grid Quartz theme
  const gridClassName = "ag-theme-quartz"; 

  return (
    <div className={gridClassName} style={{ height, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDefMemo}
        gridOptions={gridOptions}
      />
    </div>
  );
};