import React, { useState } from 'react';
import { Edit2, Trash2, Shield, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import { RoleModal } from './RoleModal';
import type { Role } from '../types';

export const RoleList = () => {
  const { roles, permissions, deleteRole } = useStore();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (roleId: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      deleteRole(roleId);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Roles</h2>
            <button
              onClick={() => {
                setSelectedRole(null);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Role
            </button>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6">
            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-white border rounded-lg p-6 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-blue-500" />
                    <h3 className="text-lg font-medium text-gray-900">
                      {role.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedRole(role);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(role.id)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{role.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    Permissions
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {role.permissions.map((permId) => {
                      const permission = permissions.find((p) => p.id === permId);
                      return (
                        <span
                          key={permId}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        >
                          {permission?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RoleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={selectedRole}
      />
    </>
  );
};