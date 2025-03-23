
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavigationBar: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/users">
              <motion.div
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-2",
                  location.pathname === '/users' && "bg-accent/50"
                )}
                whileHover={{ 
                  backgroundColor: "var(--accent)", 
                  color: "var(--accent-foreground)",
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Users className="h-4 w-4" />
                <span>Users</span>
              </motion.div>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/favorites">
              <motion.div
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center gap-2",
                  location.pathname === '/favorites' && "bg-accent/50"
                )}
                whileHover={{ 
                  backgroundColor: "var(--accent)", 
                  color: "var(--accent-foreground)",
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </motion.div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <Link to="/profile">
        <motion.div
          className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary p-0.5 transition-all duration-300"
          whileHover={{ 
            scale: 1.05, 
            borderColor: "var(--primary)",
            boxShadow: "0 0 0 2px rgba(var(--primary), 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </Link>
    </div>
  );
};

export default NavigationBar;
