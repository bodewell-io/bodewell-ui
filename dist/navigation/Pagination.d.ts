import { default as React } from 'react';

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
 * @wizard
 * @name Pagination
 * @description A navigation control for moving between pages of content.
 * @tags navigation, ui, data-display
 * @props
 * - name: currentPage
 * type: number
 * description: The currently active page number (1-based index).
 * - name: totalPages
 * type: number
 * description: The total number of pages available.
 * - name: onPageChange
 * type: (page: number) => void
 * description: Callback function invoked when the user selects a new page.
 * - name: maxPageButtons
 * type: number
 * description: The maximum number of visible page number buttons.
 * default: 5
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the container.
 * @category navigation
 */
export declare const Pagination: React.FC<PaginationProps>;
