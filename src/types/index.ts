export type Permission = {
  id: string;
  name: string;
  description: string;
  module: string;
};

export type Role = {
  id: string;
  name: string;
  description: string;
  permissions: string[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roles: string[];
  status: 'active' | 'inactive';
  lastLogin: string;
};