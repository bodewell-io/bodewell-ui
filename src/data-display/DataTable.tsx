// packages/ui/src/data-display/DataTable.tsx
"use client";

import React, { useMemo } from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'; // Import AgGridReactProps
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { 
  type ColDef, 
  type GridOptions
} from 'ag-grid-community';

// Extend our props from AgGridReact's own props
export interface DataTableProps extends AgGridReactProps {
  height?: string;
}

/**
 * @wizard
 * @name DataTable
 * ... (wizard docs can remain the same) ...
 */
export const DataTable: React.FC<DataTableProps> = ({
  height = '500px',
  defaultColDef,
  ...rest // <-- CAPTURE ALL OTHER PROPS
}) => {

  const defaultColDefMemo = useMemo<ColDef>(() => ({
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true,
    ...defaultColDef,
  }), [defaultColDef]);
  
  const gridClassName = "ag-theme-quartz"; 

  return (
    <div className={gridClassName} style={{ height, width: '100%' }}>
      <AgGridReact
        defaultColDef={defaultColDefMemo}
        {...rest} // <-- SPREAD ALL OTHER PROPS ONTO AG GRID
      />
    </div>
  );
};