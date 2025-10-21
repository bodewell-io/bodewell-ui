/**
 * @file Button.tsx
 * @repository bodewell-ui
 * @description The primary Button component for the Bodewell design system.
 *
 * @developer_notes
 * STRATEGIC UPGRADE (10/20/2025):
 * This component has been upgraded to support polymorphism using the `asChild`
 * pattern, facilitated by the `@radix-ui/react-slot` package.
 *
 * 1. Why?: A hardcoded `<button>` element is inflexible. It prevents consumers
 * from rendering the component as a React Router `<Link>` or a standard `<a>` tag,
 * which is critical for navigation.
 *
 * 2. The Fix: The component now accepts an `asChild` prop.
 * - If `asChild` is `false` (default), it renders a `<button>` as before.
 * - If `asChild` is `true`, it renders a `<Slot>` component, which
 * "melts" its props onto the React component passed as its child.
 *
 * 3. Consistency: This pattern now matches our `MenuItem` component,
 * creating a consistent and predictable API across the entire `bodewell-ui` library.
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon, type IconName } from './Icon';
import { cn } from '../utils/cn';
import { Slot } from '@radix-ui/react-slot';

// ... (buttonVariants definition remains the same) ...
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        danger:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
      },
      size: {
        sm: 'h-9 rounded-md px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      asChild = false,
      loading,
      iconLeft,
      iconRight,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {/* --- THIS IS THE FIX ---
          If asChild is true, we must pass *only* the children.
          If asChild is false, we render the icons and children as before.
        */}
        {asChild ? (
          children
        ) : (
          <>
            {loading && <Icon name="loader-circle" className="animate-spin mr-2" />}
            {!loading && iconLeft && <Icon name={iconLeft} className="mr-2" />}
            {children}
            {!loading && iconRight && <Icon name={iconRight} className="ml-2" />}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };