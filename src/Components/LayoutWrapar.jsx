'use client';

import { useState } from 'react';
import Header from "@/Components/Header"
import CreateSignIn from '@/Components/CreateSignIn';

export default function ClientLayoutWrapper({ children }) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <Header onSignInClick={() => setShowSignIn(true)} />
      {showSignIn && <CreateSignIn onClose={() => setShowSignIn(false)} />}
      {children}
    </>
  );
}
