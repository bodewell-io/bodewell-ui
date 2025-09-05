import React from 'react';
import { Icon, type IconName } from '../ui/Icon';

// A utility for safely merging Tailwind classes.
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** An optional label to display above the input field. */
  label?: string;
  /** An optional icon to display inside the input, on the left. */
  icon?: IconName;
  /** A string that provides a hint or an error message below the input. */
  helperText?: string;
  /** If true, the input will be styled to indicate an error. */
  error?: boolean;
  /** If true, a required indicator (*) will be displayed next to the label. */
  required?: boolean;
  /** If true, an "(optional)" indicator will be displayed next to the label. */
  showOptionalLabel?: boolean;
  /** Optional additional CSS classes for the outer container. */
  containerClassName?: string;
}

/**
 * @wizard
 * @name Input
 * @description A theme-aware text input component with support for labels, icons, helper text, and validation states.
 * @tags form, input, ui, text
 * @props
 * - name: label
 * type: string
 * description: An optional label to display above the input field.
 * - name: icon
 * type: IconName
 * description: Optional icon name to display inside the input field.
 * - name: helperText
 * type: string
 * description: A string that provides a hint or an error message below the input.
 * - name: error
 * type: boolean
 * description: If true, the input will be styled to indicate an error.
 * default: false
 * - name: required
 * type: boolean
 * description: If true, a required indicator (*) will be displayed next to the label.
 * default: false
 * - name: showOptionalLabel
 * type: boolean
 * description: If true, an "(optional)" indicator will be displayed next to the label.
 * default: false
 * - name: containerClassName
 * type: string
 * description: Optional additional CSS classes for the container.
 * - name: All other standard HTML input attributes are also supported.
 * @category form
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    icon,
    helperText,
    error = false,
    required = false,
    showOptionalLabel = false,
    className,
    containerClassName,
    ...props
  }, ref) => {
    // --- THEME-AWARE STYLES ---
    const baseInputStyles = cn(
      'flex h-10 w-full items-center rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'bg-[--app-input-bg-color]',
      'text-[--app-input-text-color]',
      'placeholder:text-[--app-input-placeholder-color]'
    );

    const stateStyles = error
      ? 'border-destructive ring-destructive'
      : 'border-input focus-visible:border-primary';

    const iconPadding = icon ? 'pl-9' : 'pl-3';

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <div className="flex justify-between items-center mb-1">
            <label htmlFor={props.id || props.name} className="block text-sm font-medium text-foreground">
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </label>
            {showOptionalLabel && !required && (
              <span className="text-xs text-muted-foreground">Optional</span>
            )}
          </div>
        )}
        <div className="relative w-full">
          {icon && (
            <Icon
              name={icon}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          )}
          <input
            ref={ref}
            className={cn(baseInputStyles, stateStyles, iconPadding, className)}
            required={required}
            {...props}
          />
        </div>
        {helperText && (
          <p className={cn('mt-1 text-xs', error ? 'text-destructive' : 'text-muted-foreground')}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';