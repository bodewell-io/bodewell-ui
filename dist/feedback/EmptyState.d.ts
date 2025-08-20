import { default as React } from 'react';
import { Icon } from '../ui/Icon';

interface EmptyStateProps {
    /** The name of the Lucide icon to display. */
    icon?: React.ComponentProps<typeof Icon>['name'];
    /** The main title for the empty state. */
    title: string;
    /** A longer description of the empty state. */
    description?: string;
    /** An optional action button. */
    actionButton?: React.ReactNode;
    /** Additional styling for the outer container. */
    className?: string;
}
/**
 * A component for displaying an empty state message. It's used when there is no
 * data to show, such as in an empty table or after a search with no results.
 */
/**
 * @wizard
 * @name EmptyState
 * @description A component for displaying a message when there is no data or content to show.
 * @tags ui, feedback, empty, placeholder
 * @props
 * - name: icon
 * type: React.ComponentProps<typeof Icon>['name']
 * description: The name of a Lucide icon to visually represent the empty state.
 * - name: title
 * type: string
 * description: The main heading or title for the empty state message.
 * - name: description
 * type: string
 * description: A longer, descriptive text explaining the empty state or next steps.
 * - name: actionButton
 * type: React.ReactNode
 * description: An optional React node, typically a Button, to provide a primary action.
 * - name: className
 * type: string
 * description: Additional CSS classes for custom styling of the container.
 * @category feedback
 */
export declare const EmptyState: React.FC<EmptyStateProps>;
export {};
