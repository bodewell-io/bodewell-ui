import { default as React } from 'react';

export interface PageHeaderProps {
    /** The main title of the page. */
    title: string;
    /** A brief description or subtitle displayed below the title. */
    description?: string;
    /** A slot for action buttons or other controls, typically aligned to the right. */
    actions?: React.ReactNode;
    /** Optional additional CSS classes. */
    className?: string;
}
/**
 * @wizard
 * @name PageHeader
 * @description Displays the main header section of a page, including a title, optional description, and a slot for action buttons.
 * @tags layout, typography, header, ui, template
 * @props
 * - name: title
 * type: string
 * description: The main title of the page.
 * - name: description
 * type: string
 * description: A brief descriptive subtitle displayed below the main title.
 * - name: actions
 * type: React.ReactNode
 * description: A slot for action buttons or other controls, typically aligned to the right of the header.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the page header container.
 * @category templates-patterns
 */
export declare const PageHeader: React.FC<PageHeaderProps>;
