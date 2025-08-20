import { default as React } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    footer?: React.ReactNode;
    className?: string;
}
/**
 * @wizard
 * @name Modal
 * @description A dialog box that appears on top of the current page, requiring user interaction to dismiss.
 * @tags ui, overlay, dialog, popup
 * @props
 * - name: isOpen
 * type: boolean
 * description: Controls the visibility of the modal.
 * - name: onClose
 * type: () => void
 * description: Callback function triggered when the modal should close (e.g., on escape key press or close button click).
 * - name: children
 * type: React.ReactNode
 * description: The main content to be displayed inside the modal's body.
 * - name: title
 * type: string
 * description: An optional title displayed in the modal's header.
 * - name: footer
 * type: React.ReactNode
 * description: Optional content to be displayed in the modal's footer, typically action buttons.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the modal's content panel.
 * @category layout
 */
export declare const Modal: React.FC<ModalProps>;
export {};
