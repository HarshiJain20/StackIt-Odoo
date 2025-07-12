import React, { useState } from 'react';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [authType, setAuthType] = useState('user'); // 'user' or 'admin'

  return (
    <div className="pt-20 min-h-screen bg-slate-100 flex justify-center items-start px-4 font-[Jost]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Admin/User Tabs */}
        <div className="flex justify-center border-b bg-gray-50">
          <button
            onClick={() => setAuthType('user')}
            className={`w-1/2 py-3 text-sm font-medium transition ${
              authType === 'user'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            Login as User
          </button>
          <button
            onClick={() => setAuthType('admin')}
            className={`w-1/2 py-3 text-sm font-medium transition ${
              authType === 'admin'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            Login as Admin
          </button>
        </div>

        {/* Auth Form */}
        <div className="px-6 py-8">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">
            {isSignup
              ? authType === 'admin'
                ? 'Admin Sign Up'
                : 'User Sign Up'
              : authType === 'admin'
              ? 'Admin Login'
              : 'User Login'}
          </h2>

          <form className="space-y-4">
            {isSignup && (
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-blue-500"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-blue-500"
              required
            />

            {isSignup && authType === 'user' && (
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-blue-500"
                required
              />
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
