'use client';

import { useState } from 'react';
import Navbar from '@/components/Header';
import CreateSignIn from '@/components/CreateSignIn';

export default function ClientLayoutWrapper({ children }) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <Navbar onSignInClick={() => setShowSignIn(true)} />
      {showSignIn && <CreateSignIn onClose={() => setShowSignIn(false)} />}
      {children}
    </>
  );
}
