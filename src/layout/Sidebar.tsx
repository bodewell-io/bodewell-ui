// bodewell-ui/src/layout/Sidebar.tsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { TippyTooltip } from '../feedback/TippyTooltip';
import { cn } from '../utils/cn';

// --- Context for Sidebar State ---
interface SidebarContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

// --- Main Sidebar Component ---
const sidebarVariants = cva(
  'h-screen flex flex-col border-r border-border bg-card text-foreground transition-all duration-300 ease-in-out',
  {
    variants: {
      isOpen: { true: 'w-64', false: 'w-16' },
    },
    defaultVariants: { isOpen: true },
  },
);

/**
 * @wizard
 * @description A collapsible sidebar component for application navigation.
 * @props
 * @prop {React.ReactNode} children - The content of the sidebar (Header, Content, Footer).
 */
export const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof sidebarVariants>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSidebar();
  return (
    <aside
      ref={ref}
      className={cn(sidebarVariants({ isOpen, className }))}
      {...props}
    />
  );
});
Sidebar.displayName = 'Sidebar';

// --- Structural Sub-Components ---
export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'p-4 border-b border-border h-16 flex items-center shrink-0',
      className,
    )}
    {...props}
  />
));
SidebarHeader.displayName = 'SidebarHeader';

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-1 overflow-y-auto p-4 space-y-2', className)}
    {...props}
  />
));
SidebarContent.displayName = 'SidebarContent';

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mb-4', className)} {...props} />
));
SidebarGroup.displayName = 'SidebarGroup';

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-4 border-t border-border mt-auto shrink-0', className)}
    {...props}
  />
));
SidebarFooter.displayName = 'SidebarFooter';

// --- Navigation Sub-Components ---
export const SidebarMenu = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav ref={ref} className={cn('space-y-0', className)} {...props} />
));
SidebarMenu.displayName = 'SidebarMenu';

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  tooltip?: string;
  href?: string;
  isActive?: boolean;
  as?: React.ElementType; // <-- THE NEW PROP
}

export const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  SidebarMenuItemProps
>(
  (
    {
      className,
      children,
      icon,
      badge,
      tooltip,
      href = '#',
      isActive,
      as: Component = 'a',
      ...props
    },
    ref,
  ) => {
    const { isOpen } = useSidebar();

    const componentProps: any = {
      to: href,
      href: href,
    };

    // --- MODIFICATION ---
    // Define states clearly
    const baseStyles = 'group flex flex-nowrap items-center h-8 px-2 rounded-md transition-colors duration-200 cursor-pointer';
    const defaultStateStyles = 'text-muted-foreground hover:bg-primary/10 ';
    const activeStateStyles = 'bg-primary/20 '; // No hover
    const collapsedStyles = !isOpen && 'w-10 justify-center px-0';
    // --- END MODIFICATION ---

    if (typeof Component === 'string') {
      const isActuallyActive = isActive;
      componentProps.className = cn(
        baseStyles,
        isActuallyActive ? activeStateStyles : defaultStateStyles,
        // No conditional hover needed, it's built into defaultStateStyles
        collapsedStyles,
        className,
      );
    } else {
      componentProps.className = ({
        isActive: isNavLinkActive,
      }: { isActive?: boolean } = {}) => {
        const isActuallyActive = isActive || isNavLinkActive;
        return cn(
          baseStyles,
          isActuallyActive ? activeStateStyles : defaultStateStyles,
          // No conditional hover needed, it's built into defaultStateStyles
          collapsedStyles,
          className,
        );
      };
    }

    const content = (
      <Component {...componentProps}>
        {icon && (
          <div
            className={cn(
              'transition-all flex-shrink-0 [&_svg]:w-4 [&_svg]:h-4',
              isOpen && 'mr-2',
            )}
          >
            {icon}
          </div>
        )}
        <span
          className={cn(
            'text-sm flex-1 whitespace-nowrap overflow-hidden text-ellipsis transition-opacity duration-200',
            !isOpen && 'opacity-0 w-0',
          )}
        >
          {children}
        </span>
        {badge && (
          <div
            className={cn(
              'ml-auto flex-shrink-0 transition-opacity duration-200',
              !isOpen && 'opacity-0',
            )}
          >
            {badge}
          </div>
        )}
      </Component>
    );

    return (
      <div ref={ref} {...props}>
        {isOpen || !tooltip ? (
          content
        ) : (
          <TippyTooltip content={tooltip} placement="right">
            {content}
          </TippyTooltip>
        )}
      </div>
    );
  },
);
SidebarMenuItem.displayName = 'SidebarMenuItem';

// --- Control Component ---
export const SidebarTrigger = () => {
  const { toggle, isOpen } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="fixed top-3 left-3 z-50 md:hidden"
    >
      <Icon name={isOpen ? 'panel-left-close' : 'panel-left-open'} />
    </Button>
  );
};