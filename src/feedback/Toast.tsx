// src/feedback/Toast.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '../layout/Card'; // Assuming named export for Card

// Export the type for use in the container and context
export type ToastType = 'success' | 'error' | 'info' | 'warning';

// Export the props interface for external use
export interface ToastProps {
  id: string; // Unique ID for the toast
  message: string;
  type?: ToastType;
  duration?: number; // How long toast is visible in ms (0 for sticky)
  onDismiss: (id: string) => void;
}

/**
 * @wizard
 * @name Toast
 * @description A single, transient notification message that appears briefly to provide feedback.
 * @tags feedback, notification, message, ui
 * @props
 * - name: id
 * type: string
 * description: A unique identifier for this specific toast instance.
 * - name: message
 * type: string
 * description: The main text content of the toast notification.
 * - name: type
 * type: 'success' | 'error' | 'info' | 'warning'
 * description: Defines the visual style and semantic meaning of the toast.
 * default: 'info'
 * - name: duration
 * type: number
 * description: How long the toast should remain visible in milliseconds. Set to `0` for a sticky toast.
 * default: 3000
 * - name: onDismiss
 * type: (id: string) => void
 * description: Callback function triggered when the toast is dismissed (either automatically or by user).
 * @category feedback
 */
export const Toast: React.FC<ToastProps> = ({ id, message, type = 'info', duration = 3000, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-dismiss functionality
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false); // Start fade-out animation
        // Allow fade-out transition (300ms) before calling dismiss
        const dismissTimer = setTimeout(() => onDismiss(id), 300); 
        return () => clearTimeout(dismissTimer);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onDismiss]);

  // Determine styling based on toast type
  const typeStyles = {
    success: 'bg-green-600 border-green-700 text-white',
    error: 'bg-red-600 border-red-700 text-white',
    info: 'bg-primary border-primary-focus text-white', // Adjusted for better theme contrast
    warning: 'bg-orange-500 border-orange-600 text-white',
  };
  
  // Simple icons for each type
  const typeIcons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  }

  return (
    <Card 
      className={`p-4 mb-2 flex items-center shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${typeStyles[type]}`}
      // Removing default padding and borders to let the variant classes take full control
      padding="p-0"
      border="border-0"
    >
      <div className="px-3 text-xl">{typeIcons[type]}</div>
      <div className="flex-1 py-4 text-base">{message}</div>
      <button onClick={() => onDismiss(id)} className="px-3 py-4 text-white text-xl hover:bg-black/20 transition-colors">
        &times;
      </button>
    </Card>
  );
};