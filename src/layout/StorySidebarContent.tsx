// bodewell-ui/src/layout/StorySidebarContent.tsx
import { cn } from '../utils/cn';
import { useSidebar } from './Sidebar';
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from './Sidebar';
import { Button } from '../ui/Button';
import { Icon, type IconName } from '../ui/Icon';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';

export const StorySidebarContent = () => {
  const { isOpen, toggle } = useSidebar();

  const navItems: { label: string; icon: IconName; badge?: string }[] = [
    { label: 'Dashboard', icon: 'home' },
    { label: 'AI Chat', icon: 'bot' },
    { label: 'Data Grid', icon: 'table', badge: 'New' },
    { label: 'Accounting', icon: 'book-open' },
    { label: 'Style Guide', icon: 'palette' },
  ];

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
          {/* We hide the "Bodewell" text when the sidebar is closed */}
          <span
            className={cn(
              'text-xl font-bold transition-opacity duration-200',
              !isOpen && 'opacity-0 w-0',
            )}
          >
            Bodewell
          </span>
          {/* This toggle button is part of the header content now */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="hidden md:flex" // Only show on desktop
          >
            <Icon name={isOpen ? 'panel-left-close' : 'panel-left-open'} />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem
                key={item.label}
                icon={<Icon name={item.icon} />}
                tooltip={item.label}
                // Use the 'as' prop for a non-interactive div, since these aren't links
                as="div" 
                badge={
                  item.badge && <Badge variant="primary">{item.badge}</Badge>
                }
              >
                {item.label}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3">
          <Avatar
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            name="Dane Troup" // Using 'name' for fallback/tooltip
          />
          <div
            className={cn(
              'flex-1 whitespace-nowrap overflow-hidden transition-opacity duration-200',
              !isOpen && 'opacity-0 w-0',
            )}
          >
            <p className="font-semibold text-sm">Dane Troup</p>
            <p className="text-xs text-muted-foreground">
              danetroup@gmail.com
            </p>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
};