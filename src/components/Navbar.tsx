import React from 'react';
import { Users, Shield, Key } from 'lucide-react';

type Tab = {
  name: string;
  icon: React.ElementType;
};

const tabs: Tab[] = [
  { name: 'Users', icon: Users },
  { name: 'Roles', icon: Shield },
  
];

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => onTabChange(tab.name)}
              className={`
                group inline-flex items-center px-1 py-4 border-b-2 font-medium text-sm
                ${
                  isActive
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <Icon
                className={`
                  -ml-0.5 mr-2 h-5 w-5
                  ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                  }
                `}
              />
              {tab.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
};