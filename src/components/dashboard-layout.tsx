"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  Home,
  Search,
  User2,
  ClipboardCheck,
  BellDot,
  LogOutIcon,
  LayoutDashboard,
  Users,
} from "lucide-react";
import AlertModal from "./AlertModal";
import ChatWidget from "./ChatWidget";

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
  const [modal, setModal] = useState("");

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "https://health-fe-kappa.vercel.app/";
  };

  const sidebarItems = [
    { icon: Home, label: "Home", href: "/home" },
    {
      icon: Users,
      label: "Patient Registery",
      href: "/patient",
    },
    { icon: Search, label: "Search", href: "/search" },
    { icon: ClipboardCheck, label: "Tasks", href: "/tasks" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: BellDot, label: "Notification", href: "/notification" },
    { icon: LogOutIcon, label: "Logout", href: "/" },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const getUserDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user?.email || "User";
  };

  const getPageTitle = () => {
    const currentPage = sidebarItems.find((item) => item.href === pathname);
    return currentPage?.label || "Dashboard";
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }


  return (
    <div className="flex  bg-sidebar pl-16 pr-5 pt-5">
      {/* Sidebar */}
      <div
        className={`fixed left-0 transform ${
          sidebarOpen ? "translate-x-full" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:translate-x-0 `}
      >
        {/* Sidebar Header */}

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 justify-center ">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-5"
          >
            <g>
              <path
                d="M16.6768 8.48389H13.5128L1.37196 20.6303C-0.330443 22.3327 -0.414443 25.2055 1.33836 26.8519C2.15596 27.6191 3.19756 27.9999 4.24476 27.9999C5.29196 27.9999 6.41756 27.5855 7.24636 26.7567L19.516 14.4871V11.3231C19.516 9.75509 18.2448 8.48389 16.6768 8.48389Z"
                fill="#AFD8D4"
              />
              <path
                d="M15.764 -1.52346e-05H4.24484C1.85364 -1.52346e-05 -0.0727555 1.97118 4.447e-05 4.37358C0.0672445 6.69759 2.09444 8.48398 4.41844 8.48398H13.5128L20.4176 1.57918C19.18 0.604785 17.5952 -0.00561523 15.764 -0.00561523V-1.52346e-05Z"
                fill="#AFD8D4"
              />
              <path
                d="M28 4.2448C28 3.052 27.5072 1.9712 26.712 1.204C25.9224 0.431197 24.8304 -0.0336027 23.6264 -2.74437e-06C22.4672 0.0335973 21.5376 0.459197 20.7592 1.2376L20.4176 1.5792C23.7216 4.1832 24.5672 9.4304 21.1064 12.8912L19.516 14.4816V23.7496C19.516 26.1352 21.4872 28.0616 23.8896 27.9888C26.2136 27.9216 28 25.8944 28 23.5704V4.2448Z"
                fill="#F88265"
              />
              <path
                d="M20.4176 1.57959L13.5128 8.48439H16.6768C18.2448 8.48439 19.516 9.75559 19.516 11.3236V14.4876L21.1064 12.8972C24.5672 9.43639 23.7272 4.18919 20.4176 1.58519V1.57959Z"
                fill="#283754"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_8951">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            if (item.label === "Logout")
              return (
                <button
                  key={item.label}
                  onClick={() => setModal("confirm")}
                  className="flex items-center  text-sm font-medium rounded-lg transition-colors duration-200 p-2"
                >
                  <LogOut className="w-4 h-4 text-alpha-80 " />
                  {/* Logout */}
                </button>
              );
             return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center p-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  active ? "bg-base-muted" : ""
                }`}
              >
                <Icon className="w-4 h-4 text-alpha-80 " />
                {/* {item.label} */}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-0 rounded-xl mb-4 flex h-vh  bg-white">
        {/* <button
          onClick={() => setSidebarOpen(true)}
          className=" text-gray-400 hover:text-gray-600 mr-4"
        >
          <Menu className="w-6 h-6" />
        </button> */}
        {/* Page Content */}
        {children}
             
      </div>
      <AlertModal open={modal === "confirm"} onClose={() => setModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Log out confirmation
          </div>
          <div className="text-muted mb-6">
            Are you sure you want to log out?
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="border rounded-xl px-5 py-2 text-base-primary bg-white"
              onClick={() => setModal("")}
            >
              No
            </button>
            <button
              className="rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                handleLogout();
                setModal("");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </AlertModal>
        <ChatWidget />

    </div>
  );
}
