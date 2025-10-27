// bodewell-ui/src/layout/Sidebar.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import {
  Sidebar,
  SidebarProvider,
  useSidebar,
  // SidebarTrigger is no longer needed here
} from './Sidebar';

// Import our new, updated content component
import { StorySidebarContent } from './StorySidebarContent';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      // MemoryRouter is still good practice in case we add NavLinks back
      <MemoryRouter initialEntries={['/']}>
        <SidebarProvider>
          {/* --- MODIFICATION ---
            The SidebarTrigger component is removed from the decorator.
            Our new StorySidebarContent now includes its own toggle button
            in the SidebarHeader.
          */}
          <div className="flex h-[800px] w-full bg-background">
            <Story />
            <main className="flex-1 p-8 relative">
              <div className="mt-8 md:mt-0">
                <h1 className="text-2xl font-bold">Main Content Area2</h1>
                <p className="text-muted-foreground">
                  Use{' '}
                  <kbd className="font-mono bg-muted text-muted-foreground p-1 rounded-md">
                    Cmd+B
                  </kbd>{' '}
                  to toggle the sidebar.
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
    // This hook still works because <Story /> is rendered inside <SidebarProvider>
    const { setIsOpen } = useSidebar();

    React.useEffect(() => {
      // Set initial state to collapsed
      setIsOpen(false);
    }, [setIsOpen]);

    return (
      <Sidebar>
        <StorySidebarContent />
      </Sidebar>
    );
  },
};