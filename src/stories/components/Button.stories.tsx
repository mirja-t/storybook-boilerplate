import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "@/components/Button"

type Story = StoryObj<typeof Button>;

export const Primary: Story = { 
    args: {
        children: 'Primary',
    }
} 
export const Secondary: Story = {
    args: {
        color: 'secondary',
        children: 'Secondary',
    },
};
export const Text: Story = {
    args: {
        variant: 'text',
        children: 'Text',
    },
};
export const Contained: Story = {
    args: {
        variant: 'contained',
        children: 'Contained',
    },
};
export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outlined',
    },
};
export const Dashed: Story = {
    args: {
        variant: 'dashed',
        children: 'Dashed',
    },
};


const meta: Meta<typeof Button> = {
    title: 'components/Button',
    component: Button,
    // tags: ['autodocs'],
    args: {
        children: 'Button',
    },
    argTypes: {
        variant: {
            options: ['text', 'contained', 'outlined', 'dashed'],
            control: {
                type: 'select',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
    },
    // decorators: [
    //     (Story) => (
    //     <div style={{ padding: '1em 0' }}>
    //         {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //         <Story />
    //     </div>
    //     ),
    // ],
};

export default meta;