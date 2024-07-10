import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './Signin.css';
import React from 'react';

export default () => {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" className="signin">
          <button>Log in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </>
  );
};


