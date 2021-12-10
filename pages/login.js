import React, { useState } from 'react';
import { Moralis } from 'moralis';
import { useMoralis } from 'react-moralis';

export default function SignupForm() {
    //state to hold user input for email/password
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    //moralis sdk hooks for auth
    const { authenticate, login, authError, isAuthenticated } = useMoralis();

    // handle login via username + password
    const handleLogin = (e) => {
        e.preventDefault();
        login(userEmail, userPassword);

        if(isAuthenticated) {
            history.push("/dashboard")
        } 
    }

    // handle login via metamask (eth wallet)
    const handleEthLogin = async (e) => {
      e.preventDefault();

      let user = Moralis.User.current();
      if (!user) {
        user =  Moralis.authenticate({ signingMessage: "Log into Cryptiq" })
          .then(user => {
            history.push("/dashboard")
          })
          .catch(error => {
            console.log(error);
          });
      }
    }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 md:-mt-10">
        <div className="max-w-md w-full space-y-8">
          {authError ? (
            <div className="flex flex-col items-center mt-5 md:mt-0">
            <h1 className="text-red-500 text-sm">{authError.message === 'non ethereum enabled browser' ? 'You do not have Metamask installed. To login with your Ethereum wallet please download the extension' : authError.message}</h1>
            <div className="mt-5">
              <p className="text-white text-lg">Try again</p>
            </div>
          </div>
          ) : (
              <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Welcome back, Login</h2>
              <p className="hidden md:block mt-2 text-center text-white">
                Or{' '}
                <span href="#" className="font-medium text-indigo-600 cursor-pointer" onClick={handleEthLogin}>
                  sign in using Metamask
                </span>
              </p>
            </div>
            )}
          <form className="mt-8 space-y-6" action="/" method="post" onSubmit={handleLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => setUserPassword(e.target.value)}
                  value={userPassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
            <div className="text-center">
              <p className="text-white">Or simply <span className="text-indigo-500 cursor-pointer" onClick={() => history.push("/signup")}> Sign up</span></p>
            </div>
        </div>
        </div>
        <div>
      </div>
    </>
  )
}
