import React from 'react';
interface FileUploadProps {
    onFileUpload: (files: File[]) => void;
    multiple?: boolean;
    acceptedFileTypes?: string;
    label?: string;
    className?: string;
}
/**
 * @wizard
 * @name FileUpload
 * @description A component allowing users to upload files via drag-and-drop or a file browser, with support for multiple files and accepted types.
 * @tags form, input, upload, files, ui
 * @props
 * - name: onFileUpload
 * type: (files: File[]) => void
 * description: Callback function triggered when files are selected or dropped, providing an array of File objects.
 * - name: multiple
 * type: boolean
 * description: If true, allows the user to select and upload multiple files.
 * default: false
 * - name: acceptedFileTypes
 * type: string
 * description: A string specifying acceptable file types (e.g., ".pdf,.txt,.xml", "image/*").
 * - name: label
 * type: string
 * description: An optional label displayed above the file upload area.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for custom styling of the file upload container.
 * @category form
 */
export declare const FileUpload: React.FC<FileUploadProps>;
export {};
