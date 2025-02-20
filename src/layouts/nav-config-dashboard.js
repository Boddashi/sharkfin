export const navData = {
  items: [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'solar:home-2-bold-duotone',
    },
    {
      title: 'Invoices',
      path: '/dashboard/invoice',
      icon: 'solar:file-text-bold-duotone',
      children: [
        {
          title: 'List',
          path: '/dashboard/invoice',
        },
        {
          title: 'Create',
          path: '/dashboard/invoice/new',
        },
      ],
    },
    // ... other existing navigation items
  ],
}; 