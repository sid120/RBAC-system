import { create } from 'zustand';
import { Permission, Role, User } from '../types';

interface Store {
  users: User[];
  roles: Role[];
  permissions: Permission[];
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Role) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
}

const mockPermissions: Permission[] = [
  {
    id: '1',
    name: 'View Users',
    description: 'Can view user list',
    module: 'Users'
  },
  {
    id: '2',
    name: 'Create Users',
    description: 'Can create new users',
    module: 'Users'
  },
  {
    id: '3',
    name: 'Edit Users',
    description: 'Can edit existing users',
    module: 'Users'
  },
  {
    id: '4',
    name: 'View Roles',
    description: 'Can view role list',
    module: 'Roles'
  }
];

const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: ['1', '2', '3', '4']
  },
  {
    id: '2',
    name: 'User Manager',
    description: 'Can manage users',
    permissions: ['1', '2', '3']
  }
];

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    roles: ['1'],
    status: 'active',
    lastLogin: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    roles: ['2'],
    status: 'active',
    lastLogin: '2024-03-14T15:30:00Z'
  }
];

export const useStore = create<Store>((set) => ({
  users: mockUsers,
  roles: mockRoles,
  permissions: mockPermissions,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (id, updatedRole) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === id ? { ...role, ...updatedRole } : role
      ),
    })),
  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((role) => role.id !== id),
    })),
}));