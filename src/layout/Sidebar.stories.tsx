import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from './Sidebar';

// Import our new, isolated component for the content
import { StorySidebarContent } from './StorySidebarContent';

// THIS IS THE BLOCK THAT WAS MISSING OR BROKEN
const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      // Add MemoryRouter here to provide the necessary context for NavLink
      <MemoryRouter initialEntries={['/']}> 
        <SidebarProvider>
          <div className="flex h-[800px] w-full bg-background">
            <Story />
            <main className="flex-1 p-8 relative">
              <SidebarTrigger />
              <div className="mt-8 md:mt-0">
                  <h1 className="text-2xl font-bold">Main Content Area</h1>
                  <p className="text-muted-foreground">
                      Use <kbd className="font-mono bg-muted text-muted-foreground p-1 rounded-md">Cmd+B</kbd> to toggle the sidebar.
                  </p>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

// THIS IS THE REQUIRED DEFAULT EXPORT
export default meta;

type Story = StoryObj<typeof Sidebar>;

// --- Stories ---

export const Default: Story = {
  render: () => (
    <Sidebar>
      <StorySidebarContent />
    </Sidebar>
  ),
};

export const InitiallyCollapsed: Story = {
  render: () => {
    const { setIsOpen } = useSidebar();
    
    React.useEffect(() => {
      // This hook will only run once on story mount
      setIsOpen(false);
    }, [setIsOpen]);

    return (
      <Sidebar>
        <StorySidebarContent />
      </Sidebar>
    );
  },
};