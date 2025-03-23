
import React from 'react';
import PageTransition from '../../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage: React.FC = () => {
  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
            <p className="text-muted-foreground mt-1">
              Manage your personal information and preferences
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <motion.div 
              className="glass-card rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Avatar className="h-24 w-24 border-2 border-primary">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                      <User className="h-12 w-12" />
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <h2 className="mt-4 text-xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">28, Software Engineer</p>
                
                <div className="mt-6 w-full">
                  <motion.button
                    className="w-full btn-love-outline py-2 px-4"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Edit Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div 
              className="glass-card rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>San Francisco, California</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p>January 15, 1995</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Looking For</p>
                    <p>Long-term relationship, Marriage</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-lg p-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4">Bio</h3>
              <p>
                Software engineer by day, avid hiker by weekend. I enjoy cooking international cuisines
                and am looking for someone with similar interests. I value honesty, communication, and
                shared goals for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProfilePage;
