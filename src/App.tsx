import  { useState } from 'react';
import { Navbar } from './components/Navbar';
import { UserList } from './components/UserList';
import { RoleList } from './components/RoleList';
import {  ShieldCheck } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [activeTab, setActiveTab] = useState('Users');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-blue-500" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Access Control
              </h1>
            </div>
          </div>
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {activeTab === 'Users' && <UserList />}
          {activeTab === 'Roles' && <RoleList />}
          
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;