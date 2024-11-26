# Role-Based Access Control (RBAC) Dashboard

A modern, production-ready Role-Based Access Control system built with React, TypeScript, and Tailwind CSS. This dashboard provides a comprehensive interface for managing users, roles, and permissions in your application.

![RBAC Dashboard](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000&h=600)

## Features

### User Management
- Create, read, update, and delete users
- Assign multiple roles to users
- Manage user status (active/inactive)
- Search and filter users
- User profile images support
- Track last login timestamps

### Role Management
- Create and manage roles with descriptions
- Assign granular permissions to roles
- Group permissions by modules
- Visual permission management interface
- Role-based access control enforcement

### Permission System
- Module-based permission organization
- Granular permission controls
- Clear permission descriptions
- Easy permission assignment interface

### Modern UI/UX
- Clean, intuitive interface
- Responsive design
- Real-time updates
- Toast notifications
- Confirmation dialogs
- Loading states
- Error handling

## Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Notifications**: React Hot Toast

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── UserList.tsx    # User management
│   ├── UserModal.tsx   # User creation/editing
│   ├── RoleList.tsx    # Role management
│   └── RoleModal.tsx   # Role creation/editing
├── store/              # State management
│   └── useStore.ts     # Zustand store
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main application
└── main.tsx           # Entry point
```

## Key Components

### UserList
- Displays all users in a table format
- Supports searching and filtering
- Provides actions for editing and deleting users
- Shows user status and assigned roles

### RoleList
- Shows all roles in card format
- Displays permissions assigned to each role
- Supports role editing and deletion
- Groups permissions by module

### Modals
- UserModal: Form for creating/editing users
- RoleModal: Form for creating/editing roles with permission management

## State Management

The application uses Zustand for state management, providing:
- Centralized state storage
- Real-time updates
- Persistent data
- Type-safe state management

## Types

```typescript
type Permission = {
  id: string;
  name: string;
  description: string;
  module: string;
};

type Role = {
  id: string;
  name: string;
  description: string;
  permissions: string[];
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roles: string[];
  status: 'active' | 'inactive';
  lastLogin: string;
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.
