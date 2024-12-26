import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { User, Settings } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b">
          <div className="bg-indigo-100 p-4 rounded-full">
            <User className="w-16 h-16 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Account Settings
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => {/* TODO: Implement password change */}}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Change Password
              </button>
              <button
                onClick={() => {/* TODO: Implement email preferences */}}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Email Preferences
              </button>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
              >
                Sign Out
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Subscription Status</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Free Plan</p>
              <button className="mt-2 text-indigo-600 font-medium hover:text-indigo-700">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};