import React from 'react';
export interface SectionHeaderProps {
    /** The title of the content section. */
    title: string;
    /** Optional additional CSS classes. */
    className?: string;
}
/**
 * @wizard
 * @name SectionHeader
 * @description A simple, consistent header for organizing sections of content within a page.
 * @tags layout, typography, header, ui
 * @props
 * - name: title
 * type: string
 * description: The main title for the content section.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the header container.
 * @category templates-patterns
 */
export declare const SectionHeader: React.FC<SectionHeaderProps>;
