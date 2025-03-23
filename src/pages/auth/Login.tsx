
import React from 'react';
import PageTransition from '../../components/ui/PageTransition';
import LoginForm from '../../components/auth/LoginForm';

const Login: React.FC = () => {
  return (
    <PageTransition>
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="glass-card overflow-hidden rounded-lg shadow-sm">
            <LoginForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Login;
