import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, MapPin, FileText, MessageSquare, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const navItems = [{
  path: '/citizen',
  icon: Home,
  label: 'Home'
}, {
  path: '/citizen/services',
  icon: MapPin,
  label: 'Services'
}, {
  path: '/citizen/my-reports',
  icon: FileText,
  label: 'Reports'
}, {
  path: '/citizen/feedback',
  icon: MessageSquare,
  label: 'Feedback'
}];
export function CitizenLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    setUserRole
  } = useApp();
  const handleLogout = () => {
    setUserRole(null);
    toast.success('Logged out successfully');
    navigate('/login');
  };
  const isActive = path => {
    if (path === '/citizen') {
      return location.pathname === '/citizen';
    }
    return location.pathname.startsWith(path);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50 flex flex-col",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsx("header", {
      className: "bg-gradient-to-r from-[#1A3C6E] to-[#00C2CB] text-white shadow-lg sticky top-0 z-40",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex items-end gap-1",
            children: [12, 16, 14].map((height, i) => /*#__PURE__*/_jsx("div", {
              className: "w-2 bg-white/80 rounded-t",
              style: {
                height: `${height}px`
              }
            }, i))
          }), /*#__PURE__*/_jsx("h1", {
            className: "text-xl md:text-2xl font-bold",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "SmartCity"
          })]
        }), /*#__PURE__*/_jsxs("button", {
          onClick: handleLogout,
          className: "hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
          children: [/*#__PURE__*/_jsx(LogOut, {
            className: "w-4 h-4"
          }), /*#__PURE__*/_jsx("span", {
            children: "Logout"
          })]
        })]
      })
    }), /*#__PURE__*/_jsx("main", {
      className: "flex-1 pb-20 md:pb-6",
      children: /*#__PURE__*/_jsx(Outlet, {})
    }), /*#__PURE__*/_jsx("nav", {
      className: "md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40",
      children: /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-4 h-16",
        children: navItems.map(item => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return /*#__PURE__*/_jsxs("button", {
            onClick: () => navigate(item.path),
            className: `flex flex-col items-center justify-center gap-1 relative transition-colors ${active ? 'text-[#00C2CB]' : 'text-gray-600'}`,
            children: [active && /*#__PURE__*/_jsx(motion.div, {
              layoutId: "activeTab",
              className: "absolute top-0 left-0 right-0 h-1 bg-[#00C2CB]",
              initial: false,
              transition: {
                type: 'spring',
                stiffness: 500,
                damping: 30
              }
            }), /*#__PURE__*/_jsx(Icon, {
              className: "w-5 h-5",
              strokeWidth: active ? 2.5 : 2
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xs font-medium",
              children: item.label
            })]
          }, item.path);
        })
      })
    }), /*#__PURE__*/_jsx("aside", {
      className: "hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-30",
      children: /*#__PURE__*/_jsxs("nav", {
        className: "p-4 space-y-2",
        children: [navItems.map(item => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return /*#__PURE__*/_jsxs("button", {
            onClick: () => navigate(item.path),
            className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active ? 'bg-gradient-to-r from-[#00C2CB]/10 to-[#1A3C6E]/10 text-[#1A3C6E] font-semibold' : 'text-gray-600 hover:bg-gray-50'}`,
            children: [/*#__PURE__*/_jsx(Icon, {
              className: "w-5 h-5",
              strokeWidth: active ? 2.5 : 2
            }), /*#__PURE__*/_jsx("span", {
              children: item.label
            }), active && /*#__PURE__*/_jsx(motion.div, {
              layoutId: "desktopActiveTab",
              className: "ml-auto w-1 h-6 bg-[#00C2CB] rounded-full",
              initial: false,
              transition: {
                type: 'spring',
                stiffness: 500,
                damping: 30
              }
            })]
          }, item.path);
        }), /*#__PURE__*/_jsx("div", {
          className: "pt-6 mt-6 border-t border-gray-200",
          children: /*#__PURE__*/_jsxs("button", {
            onClick: handleLogout,
            className: "w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors",
            children: [/*#__PURE__*/_jsx(LogOut, {
              className: "w-5 h-5"
            }), /*#__PURE__*/_jsx("span", {
              children: "Logout"
            })]
          })
        })]
      })
    }), /*#__PURE__*/_jsx("style", {
      children: `
        @media (min-width: 768px) {
          main {
            margin-left: 16rem;
          }
        }
      `
    })]
  });
}
