import React from 'react';
export interface PaginationProps {
    /** The currently active page number. */
    currentPage: number;
    /** The total number of pages available. */
    totalPages: number;
    /** Callback function invoked when the page is changed. */
    onPageChange: (page: number) => void;
    /** The maximum number of page buttons to display. */
    maxPageButtons?: number;
    /** Optional additional CSS classes for the container. */
    className?: string;
}
/**
 * A component for navigating through paginated content. It provides controls
 * for moving to the next, previous, or a specific page number.
 */
/**
 * @wizard
 * @name Pagination
 * @description A navigation control for moving between pages of content, providing 'Previous', 'Next', and direct page number access.
 * @tags navigation, ui, data-display
 * @props
 * - name: currentPage
 * type: number
 * description: The currently active page number (1-based index).
 * - name: totalPages
 * type: number
 * description: The total number of pages available for navigation.
 * - name: onPageChange
 * type: (page: number) => void
 * description: Callback function invoked when the user selects a new page number.
 * - name: maxPageButtons
 * type: number
 * description: The maximum number of visible page number buttons to display (excluding '...' and first/last page).
 * default: 5
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the pagination container.
 * @category navigation
 */
export declare const Pagination: React.FC<PaginationProps>;
