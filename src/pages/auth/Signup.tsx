
import React from 'react';
import PageTransition from '../../components/ui/PageTransition';
import SignupForm from '../../components/auth/SignupForm';

const Signup: React.FC = () => {
  return (
    <PageTransition>
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="glass-card overflow-hidden rounded-lg shadow-sm">
            <SignupForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Signup;
