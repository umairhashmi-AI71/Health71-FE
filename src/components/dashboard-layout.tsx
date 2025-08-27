'use client';

import { ReactNode, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Users, 
  Shield, 
  FileCheck, 
  Code, 
  Settings, 
  LogOut,
  User,
  Bell,
  BookOpen
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

interface UserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      router.push('/');
      return;
    }
    
    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    router.push('/');
  };

  const sidebarItems = [
    { icon: Users, label: 'Patients', href: '/patients' },
    { icon: Shield, label: 'Eligibility Check', href: '/eligibility' },
    { icon: FileCheck, label: 'Claim Pre Authorization', href: '/pre-authorization' },
    { icon: Code, label: 'Medical Coding', href: '/medical-coding' },
    { icon: BookOpen, label: 'Policy Knowledgebase', href: '/knowledgebase' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const isActive = (href: string) => pathname === href;

  const getUserDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user?.email || 'User';
  };

  const getPageTitle = () => {
    const currentPage = sidebarItems.find(item => item.href === pathname);
    return currentPage?.label || 'Dashboard';
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      

      {/* Main Content Area */}
      <div className=" m-auto w-full max-w-7xl m-auto">
        {/* Top Navigation Bar - Fixed */}
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200 h-16 ">
          <div className="flex items-center justify-between h-full px-6">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-gray-600 mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">{getPageTitle()}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                {/* <span className="hidden md:block font-medium text-gray-700">{getUserDisplayName()}</span> */}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="overflow-auto">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
