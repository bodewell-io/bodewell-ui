import React from 'react';
interface AccordionItemProps {
    id: string;
    header: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (id: string, isOpen: boolean) => void;
}
/**
 * @wizard
 * @name AccordionItem
 * @description A single, collapsible section within an `Accordion` component, consisting of a header and a hidden content body.
 * @tags layout, ui, collapsible, expandable
 * @props
 * - name: id
 * type: string
 * description: A unique identifier for this accordion item. Essential for `singleOpen` behavior.
 * - name: header
 * type: React.ReactNode
 * description: The content displayed in the clickable header of the accordion item.
 * - name: children
 * type: React.ReactNode
 * description: The content that will be revealed or hidden when the accordion item is toggled.
 * - name: isOpen
 * type: boolean
 * description: Controls the open/closed state for this specific item (when used in a controlled `Accordion`).
 * - name: onToggle
 * type: (id: string, isOpen: boolean) => void
 * description: Callback triggered when the item is toggled, providing its `id` and new `isOpen` state.
 * @category layout
 */
declare const AccordionItem: React.FC<AccordionItemProps>;
interface AccordionProps {
    children: React.ReactElement<AccordionItemProps>[];
    singleOpen?: boolean;
    className?: string;
}
/**
 * @wizard
 * @name Accordion
 * @description A container for multiple collapsible sections (`AccordionItem`s), useful for organizing content.
 * @tags layout, ui, collapsible, expandable
 * @props
 * - name: children
 * type: React.ReactElement<AccordionItemProps>[]
 * description: A collection of `AccordionItem` components to be managed by this Accordion.
 * - name: singleOpen
 * type: boolean
 * description: If true, only one `AccordionItem` can be open at a time. Opening one closes others.
 * default: false
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the Accordion container.
 * @category layout
 */
declare const Accordion: React.FC<AccordionProps>;
export { Accordion, AccordionItem };
