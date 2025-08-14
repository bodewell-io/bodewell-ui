import React from 'react';
interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
}
/**
 * @wizard
 * @name ListItem
 * @description Represents a single item within a `List` component.
 * @tags ui, layout, typography
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content of the list item.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the list item (`<li>`).
 * @category layout
 */
declare const ListItem: React.FC<ListItemProps>;
interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
    type?: 'ul' | 'ol';
    children: React.ReactNode;
}
/**
 * @wizard
 * @name List
 * @description A component for displaying either ordered or unordered lists of `ListItem`s.
 * @tags ui, layout, typography
 * @props
 * - name: type
 * type: 'ul' | 'ol'
 * description: Specifies whether the list should be unordered ('ul') or ordered ('ol').
 * default: 'ul'
 * - name: children
 * type: React.ReactNode
 * description: The list items, typically `ListItem` components.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the list container (`<ul>` or `<ol>`).
 * @category layout
 */
declare const List: React.FC<ListProps>;
interface DefinitionTermProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
/**
 * @wizard
 * @name DefinitionTerm
 * @description Represents a term within a `DefinitionList`.
 * @tags ui, layout, typography
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content of the definition term.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the definition term (`<dt>`).
 * @category layout
 */
declare const DefinitionTerm: React.FC<DefinitionTermProps>;
interface DefinitionDescriptionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
/**
 * @wizard
 * @name DefinitionDescription
 * @description Represents the description for a term within a `DefinitionList`.
 * @tags ui, layout, typography
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content of the definition description.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the definition description (`<dd>`).
 * @category layout
 */
declare const DefinitionDescription: React.FC<DefinitionDescriptionProps>;
interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
    children: React.ReactNode;
}
/**
 * @wizard
 * @name DefinitionList
 * @description Displays a list of terms and their corresponding definitions.
 * @tags ui, layout, typography, data-display
 * @props
 * - name: children
 * type: React.ReactNode
 * description: A collection of `DefinitionTerm` and `DefinitionDescription` components.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the definition list container (`<dl>`).
 * @category layout
 */
declare const DefinitionList: React.FC<DefinitionListProps>;
export { List, ListItem, DefinitionList, DefinitionTerm, DefinitionDescription };
