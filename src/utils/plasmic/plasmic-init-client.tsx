'use client';

import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from './plasmic-init';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle, 
  alertVariants 
} from '@/components/ui/alert';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Button, 
  buttonVariants 
} from '@/components/ui/button';
import {  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar';
import { 
  Tabs,
  TabsContent, 
  TabsList, 
  TabsTrigger  
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';




// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

/**
 * PlasmicClientRootProvider is a Client Component that passes in the loader for you.
 *
 * Why? Props passed from Server to Client Components must be serializable.
 * https://beta.nextjs.org/docs/rendering/server-and-client-components#passing-props-from-server-to-client-components-serialization
 * However, PlasmicRootProvider requires a loader, but the loader is NOT serializable.
 */
export function PlasmicClientRootProvider(props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, 'loader'>) {
  return <PlasmicRootProvider loader={PLASMIC} {...props}></PlasmicRootProvider>;
}

// ...

// Register the Card component
PLASMIC.registerComponent(Card, {
  name: 'Card',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the CardHeader component
PLASMIC.registerComponent(CardHeader, {
  name: 'CardHeader',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the CardTitle component
PLASMIC.registerComponent(CardTitle, {
  name: 'CardTitle',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the CardDescription component
PLASMIC.registerComponent(CardDescription, {
  name: 'CardDescription',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the CardContent component
PLASMIC.registerComponent(CardContent, {
  name: 'CardContent',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the CardFooter component
PLASMIC.registerComponent(CardFooter, {
  name: 'CardFooter',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Alert component registration with variant mapping
PLASMIC.registerComponent(Alert, {
  name: 'Alert',
  props: {
    children: 'slot',
    className: 'string',
    // Manually define the variant as a Plasmic prop since Plasmic doesn't automatically parse cva configurations
    variant: {
      type: 'choice',
      options: ['default', 'destructive'],
      defaultValue: 'default'
    }
  },
  // Directly using cva in Plasmic registration isn't feasible; instead, you map the cva variants to Plasmic choice options
});

// AlertTitle and AlertDescription don't have variants but are registered for completeness
PLASMIC.registerComponent(AlertTitle, {
  name: 'AlertTitle',
  props: {
    children: 'slot',
    className: 'string',
  },
});

PLASMIC.registerComponent(AlertDescription, {
  name: 'AlertDescription',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the Table component
PLASMIC.registerComponent(Table, {
  name: 'Table',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the TableHeader component
PLASMIC.registerComponent(TableHeader, {
  name: 'TableHeader',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the TableBody component
PLASMIC.registerComponent(TableBody, {
  name: 'TableBody',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the TableFooter component
PLASMIC.registerComponent(TableFooter, {
  name: 'TableFooter',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the TableRow component
PLASMIC.registerComponent(TableRow, {
  name: 'TableRow',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the TableHead component
PLASMIC.registerComponent(TableHead, {
  name: 'TableHead',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// // Register the TableCell component
PLASMIC.registerComponent(TableCell, {
  name: 'TableCell',
  props: {
    children: 'slot',
    className: 'string',
  },
});

// Register the TableCaption component
PLASMIC.registerComponent(TableCaption, {
  name: 'TableCaption',
  props: {
    children: 'slot',
    className: 'string',
  },
});

PLASMIC.registerComponent(Textarea, {
  name: 'Textarea',
  props: {
    // Standard textarea props can be passed through directly
    children: 'slot',
    placeholder: 'string',
    disabled: 'boolean',
    readOnly: 'boolean',
    value: 'string',
    defaultValue: 'string',
    // You may want to add support for event handlers your component supports
    onChange: {
      type: 'object',
      description: "Handler for the input's change events",
    },
    onFocus: {
      type: 'object',
      description: "Handler for the input's focus events",
    },
    onBlur: {
      type: 'object',
      description: "Handler for the input's blur events",
    },
    // Adding className allows Plasmic users to apply additional styling if needed
    className: 'string',
  },
  // Optionally, you can specify default styles or behaviors here. For example:
  defaultStyles: {
    minWidth: '200px',
    minHeight: '80px',
  }
});

// Register the Badge component with Plasmic
PLASMIC.registerComponent(Badge, {
  name: 'Badge',
  props: {
    children: 'slot',
    className: 'string',
    variant: {
      type: 'choice',
      options: ['default', 'secondary', 'destructive', 'outline'],
      defaultValue: 'default',
    },
    // Add any additional props specific to the Badge component here
  },
  defaultStyles: {
    padding: '2px 10px',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '9999px', // Fully rounded corners
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Register the Input component with Plasmic
PLASMIC.registerComponent(Input, {
  name: 'Input',
  props: {
    // Directly use props from InputHTMLAttributes, plus any custom ones
    type: {
      type: 'choice',
      options: ['text', 'password', 'email', 'number', 'url', 'search', 'tel'],
      defaultValue: 'text',
    },
    placeholder: 'string',
    disabled: 'boolean',
    readOnly: 'boolean',
    value: 'string',
    defaultValue: 'string',
    onChange: {
      type: 'object',
      description: "Handler for the input's change events",
    },
    onFocus: {
      type: 'object',
      description: "Handler for the input's focus events",
    },
    onBlur: {
      type: 'object',
      description: "Handler for the input's blur events",
    },
    className: 'string', // Allows custom styling to be applied in Plasmic Studio
  },
  defaultStyles: {
    height: '40px', // Matches the h-10 class in Tailwind
    width: '100%', // Full width
    padding: '8px 12px', // Matches px-3 py-2 in Tailwind
    fontSize: '14px', // Matches text-sm in Tailwind
    borderRadius: '8px', // Matches rounded-md in Tailwind
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#CBD5E0',
    backgroundColor: '#F7FAFC', // Matbches bg-background assuming it's a custom property
    // Add additional default styles as necessary, such as focus and disabled states
  },
});

// Register the Label component
PLASMIC.registerComponent(Label, {
  name: 'Label',
  props: {
    children: 'slot',
    className: 'string',
    // If your Label component uses additional props (e.g., for variants), you might need to handle them here.
    // Given your setup, it seems the variants are primarily managed via className, so no additional props are listed.
  },
  defaultStyles: {
    fontSize: '14px', // text-sm
    fontWeight: 'medium', // font-medium
    lineHeight: 'none', // leading-none
    // For peer-dependent styles like 'peer-disabled:...', you'll need to ensure
    // these are handled within your app's CSS, as Plasmic's defaultStyles might not directly support them.
  },
});

PLASMIC.registerComponent(Button, {
  name: 'Button',
  props: {
    children: 'slot',
    className: 'string',
    // Mapping variant and size as 'choice' props for Plasmic
    variant: {
      type: 'choice',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      defaultValue: 'default',
    },
    size: {
      type: 'choice',
      options: ['default', 'sm', 'lg', 'icon'],
      defaultValue: 'default',
    },
    asChild: {
      type: 'boolean',
      defaultValue: false,
      description: "Whether the button should be rendered as a child component.",
    },
    // Include other props you wish to expose in Plasmic
  },
  defaultStyles: {
    // Add some sensible default styles if needed
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '8px',
    // Note: You will manually need to map these styles to correspond with the classes defined by `cva`
  },
});

PLASMIC.registerComponent(Menubar, {
  name: 'Menubar',
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    display: 'flex',
    height: '40px', // Matches h-10
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px', // Matches rounded-md
    borderWidth: '1px', // Separating border properties
    borderStyle: 'solid',
    borderColor: '#CBD5E0', // Example border color, adjust as needed
    padding: '4px', // Matches p-1
    backgroundColor: '#F7FAFC', // Example background color; adjust as needed
  },
});

// Then, register the MenubarTrigger component
PLASMIC.registerComponent(MenubarTrigger, {
  name: 'MenubarTrigger',
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    display: 'flex',
    cursor: 'default',
    userSelect: 'none',
    alignItems: 'center',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '14px',
    fontWeight: 'medium',
  },
});

// Register the MenubarSubTrigger component
PLASMIC.registerComponent(MenubarSubTrigger, {
  name: 'MenubarSubTrigger',
  props: {
    children: 'slot',
    className: 'string',
    inset: 'boolean', // Additional custom prop for inset styling
  },
  defaultStyles: {
    display: 'flex',
    cursor: 'default',
    userSelect: 'none',
    alignItems: 'center',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '14px',
  },
});

PLASMIC.registerComponent(MenubarSubContent, {
  name: 'MenubarSubContent', // Consider using camelCase or similar consistent naming conventions
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    minWidth: '128px', // Adjust based on your design system
    overflow: 'hidden',
    borderRadius: '8px',
    borderWidth: '1px', // Separated from the shorthand 'border'
    borderStyle: 'solid',
    borderColor: '#CBD5E0', // Example border color, adjust as needed
    padding: '4px',
    backgroundColor: '#F7FAFC',
    color: '#2D3748',
    zIndex: '50',
  },
});

PLASMIC.registerComponent(MenubarContent, {
  name: 'MenubarContent', // Consider using consistent naming conventions
  props: {
    children: 'slot',
    className: 'string',
    align: {
      type: 'choice',
      options: ['start', 'end'],
      defaultValue: 'start'
    },
    alignOffset: 'number',
    sideOffset: 'number',
  },
  defaultStyles: {
    minWidth: '192px',
    overflow: 'hidden',
    borderRadius: '8px',
    borderWidth: '1px', // Separated from the shorthand 'border'
    borderStyle: 'solid',
    borderColor: '#CBD5E0', // Example border color, adjust as needed
    backgroundColor: '#F7FAFC',
    zIndex: '50',
  
  },
});
// Register MenubarItem with an optional inset prop
PLASMIC.registerComponent(MenubarItem, {
  name: 'MenubarItem',
  props: {
    children: 'slot',
    className: 'string',
    inset: 'boolean',
  },
  defaultStyles: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px',
  },
});

// Register MenubarCheckboxItem
PLASMIC.registerComponent(MenubarCheckboxItem, {
  name: 'MenubarCheckboxItem',
  props: {
    children: 'slot',
    className: 'string',
    checked: 'boolean',
  },
  defaultStyles: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '32px', // Considering inset effect
    paddingRight: '8px',
    fontSize: '14px',
  },
});

// Register MenubarRadioItem
PLASMIC.registerComponent(MenubarRadioItem, {
  name: 'MenubarRadioItem',
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '32px', // Considering inset effect
    paddingRight: '8px',
    fontSize: '14px',
  },
});

// Register MenubarLabel with an optional inset prop
PLASMIC.registerComponent(MenubarLabel, {
  name: 'MenubarLabel',
  props: {
    children: 'slot',
    className: 'string',
    inset: 'boolean',
  },
  defaultStyles: {
    paddingLeft: '32px', // If inset is true
    fontSize: '14px',
    fontWeight: 'bold',
  },
});

// Register MenubarSeparator
PLASMIC.registerComponent(MenubarSeparator, {
  name: 'MenubarSeparator',
  props: {
    className: 'string',
  },
  defaultStyles: {
    margin: '-4px 0', // Adjust the mx-1 my-1 values to standard CSS
    height: '1px',
    backgroundColor: '#CBD5E0', // Assuming bg-muted maps to this color in your design system
  },
});

// Register MenubarShortcut
PLASMIC.registerComponent(MenubarShortcut, {
  name: 'MenubarShortcut',
  props: {
    className: 'string',
    // Since MenubarShortcut seems to be a simpler component primarily for display,
    // you might not need to register other specific props unless they affect its rendering or behavior.
  },
  defaultStyles: {
    marginLeft: 'auto', // Aligns shortcut text to the right
    fontSize: '12px', // Assuming text-xs maps to this size in your design system
    letterSpacing: 'widest', // Maps to tracking-widest; you may need to specify an actual value here
    color: '#718096', // Assuming text-muted-foreground maps to this color in your design system
  },
});

// Register the MenubarGroup component
PLASMIC.registerComponent(MenubarGroup, {
  name: 'MenubarGroup',
  props: {
    children: 'slot',
  },
  // MenubarGroup typically does not need default styles as it's more about logical grouping
});

PLASMIC.registerComponent(MenubarMenu, {
  name: 'MenubarMenu',
  props: {
    children: 'slot',
  },
  // MenubarMenu might not visually render itself but acts as a context provider for its children
});

// Register the MenubarPortal component
PLASMIC.registerComponent(MenubarPortal, {
  name: 'MenubarPortal',
  props: {
    children: 'slot',
  },
  // MenubarPortal is used for rendering components outside the normal DOM flow, so it might not need visible styles.
});

// Register the MenubarRadioGroup component
PLASMIC.registerComponent(MenubarRadioGroup, {
  name: 'MenubarRadioGroup',
  props: {
    children: 'slot',
  },
  // MenubarRadioGroup is for logical grouping of radio items, might not need default styles
});

// Register the MenubarSub component
PLASMIC.registerComponent(MenubarSub, {
  name: 'MenubarSub',
  props: {
    children: 'slot',
  },
  defaultStyles: {
    // Define any default styles for your submenus if applicable
  },
});

// Register the Tabs component (Root)
PLASMIC.registerComponent(Tabs, {
  name: 'Tabs',
  props: {
    children: 'slot',
  },
  // Tabs might not need defaultStyles unless you want to enforce a specific look
});

// Register TabsList
PLASMIC.registerComponent(TabsList, {
  name: 'TabsList',
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    display: 'inline-flex',
    height: '40px', // h-10
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px', // rounded-md
    backgroundColor: '#E2E8F0', // bg-muted; adjust color to match your theme
    padding: '4px', // p-1
    color: '#4A5568', // text-muted-foreground; adjust color to match your theme
  },
});

// Register TabsTrigger
PLASMIC.registerComponent(TabsTrigger, {
  name: 'TabsTrigger',
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    borderRadius: '4px', // rounded-sm
    padding: '6px 12px', // px-3 py-1.5
    fontSize: '14px', // text-sm
    fontWeight: 'medium', // font-medium
  },
});

// Register TabsContent
PLASMIC.registerComponent(TabsContent, {
  name: 'TabsContent',
  props: {
    children: 'slot',
    className: 'string',
  },
  defaultStyles: {
    marginTop: '8px', // mt-2
  },
});


PLASMIC.registerComponent(Separator, {
  name: 'Separator',
  props: {
    orientation: {
      type: 'choice',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    decorative: 'boolean',
    className: 'string',
  },
  defaultStyles: {
    // Instead of using 'border', specify 'borderWidth', 'borderStyle', and 'borderColor'
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#CBD5E0', // Example color, adjust as needed
    // Adjust width and height based on orientation
    width: '100%', // This applies when orientation is 'horizontal'
    height: '1px', // For 'horizontal'; adjust or use conditional styling for 'vertical'
  },
});
