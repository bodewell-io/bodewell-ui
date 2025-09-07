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
 * @category layout
 */
export declare const Modal: React.FC<ModalProps>;
export {};
