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
          <span className={cn('text-xl font-bold', !isOpen && 'hidden')}>Bodewell</span>
          <Button variant="ghost" size="icon" onClick={toggle} className="hidden md:flex">
            <Icon name="panel-left-close" />
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
                badge={item.badge && <Badge variant="primary">{item.badge}</Badge>}
              >
                {item.label}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3">
          {/* CORRECTED USAGE: Pass the 'name' prop */}
          <Avatar
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            name="Dane Troup"
          />
          <div className={cn(!isOpen && 'hidden')}>
            <p className="font-semibold text-sm">Dane Troup</p>
            <p className="text-xs text-muted-foreground">danetroup@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
};