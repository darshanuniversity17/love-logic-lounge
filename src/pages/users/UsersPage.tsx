
import React, { useState } from 'react';
import PageTransition from '../../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { Users, Heart, Trash2, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Mock user data - in a real app this would come from an API
const mockUsers = [
  {
    id: '1',
    name: 'Aisha Khan',
    city: 'Mumbai',
    mobile: '+91 9876543210',
    gender: 'Female',
  },
  {
    id: '2',
    name: 'Raj Sharma',
    city: 'Delhi',
    mobile: '+91 8765432109',
    gender: 'Male',
  },
  {
    id: '3',
    name: 'Priya Patel',
    city: 'Bangalore',
    mobile: '+91 7654321098',
    gender: 'Female',
  },
  {
    id: '4',
    name: 'Vikram Singh',
    city: 'Chennai',
    mobile: '+91 6543210987',
    gender: 'Male',
  },
  {
    id: '5',
    name: 'Deepa Gupta',
    city: 'Kolkata',
    mobile: '+91 5432109876',
    gender: 'Female',
  },
  {
    id: '6',
    name: 'Sameer Joshi',
    city: 'Hyderabad',
    mobile: '+91 4321098765',
    gender: 'Male',
  },
];

interface User {
  id: string;
  name: string;
  city: string;
  mobile: string;
  gender: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      toast.info('Removed from favorites');
    } else {
      setFavorites([...favorites, id]);
      toast.success('Added to favorites');
    }
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
    setFavorites(favorites.filter(favId => favId !== id));
    toast.success('User removed');
  };

  // Get initials from name
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground mt-1">
              Find your perfect match from our extensive user base
            </p>
          </div>
        </div>
        
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.1 
                  } 
                }}
              >
                <Card className="glass-card overflow-hidden hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12 border-2 border-primary">
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground/70" />
                            <span>{user.city}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-muted-foreground/70" />
                            <span>{user.mobile}</span>
                          </div>
                          <div className="text-muted-foreground/90 mt-1">
                            {user.gender}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => toggleFavorite(user.id)}
                    >
                      <Heart 
                        className={`mr-2 h-4 w-4 ${favorites.includes(user.id) ? 'fill-primary text-primary' : ''}`} 
                      />
                      {favorites.includes(user.id) ? 'Favorited' : 'Favorite'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => deleteUser(user.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-12"
          >
            <Users className="h-20 w-20 mx-auto text-primary/50" />
            <h2 className="mt-4 text-xl font-semibold">No Users Found</h2>
            <p className="mt-2 text-muted-foreground">
              There are currently no users to display.
            </p>
          </motion.div>
        )}
      </section>
    </PageTransition>
  );
};

export default UsersPage;
