
import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { PlusCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  
  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage matrimony profiles and find the perfect match
            </p>
          </div>
          
          <button
            onClick={() => {/* Create new profile logic */}}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Profile
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder cards for profiles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-full h-40 mb-4 rounded-md bg-muted animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-2/3 rounded-md bg-muted animate-pulse"></div>
                <div className="h-3 rounded-md bg-muted animate-pulse"></div>
                <div className="h-3 w-3/4 rounded-md bg-muted animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Dashboard;
