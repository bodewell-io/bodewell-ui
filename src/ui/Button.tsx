import React, { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type FC, type ReactNode } from 'react';

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:brightness-110 active:brightness-105 focus:ring-primary disabled:hover:brightness-100',
  secondary: 'bg-secondary text-secondary-foreground hover:brightness-110 active:brightness-105 focus:ring-secondary disabled:hover:brightness-100',
  danger: 'bg-danger text-danger-foreground hover:brightness-110 active:brightness-95 focus:ring-danger disabled:hover:brightness-100',
  outline: 'border border-border text-text hover:bg-primary/10 hover:text-primary focus:ring-primary disabled:hover:bg-transparent disabled:hover:text-text',
  accent: 'bg-accent text-accent-foreground hover:brightness-110 active:brightness-105 focus:ring-accent disabled:hover:brightness-100',
  ghost: 'bg-transparent text-text hover:bg-border focus:ring-primary disabled:hover:bg-transparent',
  link: 'bg-transparent text-primary hover:underline focus:ring-primary underline-offset-4 shadow-none disabled:hover:no-underline',
};

const buttonSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export type CommonProps = {
  children?: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  isIconOnly?: boolean;
};

export type ButtonAsButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonAsAnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Spinner: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`animate-spin -ml-1 mr-3 h-5 w-5 text-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

/**
 * @wizard
 * @name Button
 * @description A versatile component for user interactions, supporting various styles, sizes, and states. It renders as a button or an anchor tag if an href is provided.
 * @tags ui, action, form, clickable
 * @props
 * - name: children
 * type: React.ReactNode
 * description: The content displayed inside the button (e.g., text, icon).
 * - name: variant
 * type: "'primary' | 'secondary' | 'danger' | 'outline' | 'accent' | 'ghost' | 'link'"
 * description: Defines the visual style and importance of the button.
 * default: "'primary'"
 * - name: size
 * type: "'sm' | 'md' | 'lg'"
 * description: Controls the padding and font size of the button.
 * default: "'md'"
 * - name: iconBefore
 * type: React.ReactNode
 * description: An optional icon to display before the button's text content.
 * - name: iconAfter
 * type: React.ReactNode
 * description: An optional icon to display after the button's text content.
 * - name: loading
 * type: boolean
 * description: If true, displays a loading spinner and disables the button.
 * default: false
 * - name: fullWidth
 * type: boolean
 * description: If true, the button will take up the full width of its parent container.
 * default: false
 * - name: href
 * type: string
 * description: If provided, the component renders as an anchor `<a>` tag.
 * @category ui
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      size = 'md',
      iconBefore,
      iconAfter,
      loading = false,
      fullWidth = false,
      className,
      isIconOnly,
      ...rest
    } = props;
    const { href } = rest as ButtonAsAnchorProps;
  
    const isIconOnlyButton = isIconOnly || (!children && (iconBefore || iconAfter));
    const sizeClasses = {
      sm: `text-sm ${isIconOnlyButton ? 'p-1.5' : 'py-1 px-2'}`,
      md: `text-base ${isIconOnlyButton ? 'p-2' : 'py-2 px-4'}`,
      lg: `text-lg ${isIconOnlyButton ? 'p-3' : 'py-3 px-6'}`,
    };
    const baseStyles = 'appearance-none inline-flex items-center justify-center font-semibold rounded-md shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';
    const fullWidthClass = fullWidth ? 'w-full' : '';
    const disabledState = (props as ButtonAsButtonProps).disabled || loading;

    const content = (
      <>
        {loading && <Spinner />}
        {!loading && iconBefore && <span className={children ? 'mr-2' : ''}>{iconBefore}</span>}
        {!loading && children}
        {!loading && iconAfter && <span className={children ? 'ml-2' : ''}>{iconAfter}</span>}
      </>
    );

    const buttonClassNames = `${baseStyles} ${buttonVariants[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className || ''}`;

    if (href) {
      const { form, formAction, formEncType, formMethod, formNoValidate, formTarget, name, ...anchorProps } = rest as ButtonAsButtonProps & ButtonAsAnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={buttonClassNames}
          aria-disabled={disabledState}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = rest as ButtonAsButtonProps;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClassNames}
        disabled={disabledState}
        aria-busy={loading}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';