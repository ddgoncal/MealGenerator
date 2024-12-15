import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SocialLogin: React.FC = () => {
  const { loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <div className="space-y-4">
      <button
        onClick={loginWithGoogle}
        className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 
          rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>

      <button
        onClick={loginWithFacebook}
        className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 
          rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
        Continue with Facebook
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
    </div>
  );
};