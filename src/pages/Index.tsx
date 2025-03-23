
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, ShieldCheck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const { ref: featureRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Find Your Perfect Match
            </motion.h1>
            
            <motion.p 
              className="mt-6 max-w-3xl text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our platform connects you with compatible partners 
              based on your values, interests, and life goals.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/auth/signup">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
              
              <Link to="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Sign In
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        ref={featureRef} 
        className="py-20 px-4 bg-secondary/50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="mt-4 text-muted-foreground">
              We make finding your perfect match simple and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Meaningful Connections",
                description: "Our intelligent matching algorithm helps you find compatible partners based on shared values and interests."
              },
              {
                icon: Users,
                title: "Verified Profiles",
                description: "Every profile is manually verified to ensure you meet genuine people looking for serious relationships."
              },
              {
                icon: ShieldCheck,
                title: "Privacy & Security",
                description: "Your data is protected with industry-leading security measures, ensuring a safe matrimony search experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Ready to Find Your Match?</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Join thousands of people who have already found their perfect match through our platform.
              </p>
              
              <div className="mt-8">
                <Link to="/auth/signup">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Create an Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
