import { Outlet, useNavigate, useLocation } from 'react-router';
import { LayoutDashboard, Database, Settings, Activity, FileText, LogOut, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';
import { useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const navItems = [{
  path: '/admin',
  icon: LayoutDashboard,
  label: 'Dashboard'
}, {
  path: '/admin/reports',
  icon: FileText,
  label: 'View Reports'
}, {
  path: '/admin/services',
  icon: Settings,
  label: 'Update Services'
}, {
  path: '/admin/infrastructure',
  icon: Activity,
  label: 'Infrastructure'
}, {
  path: '/admin/city-info',
  icon: Database,
  label: 'City Info'
}];
export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    setUserRole
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    setUserRole(null);
    toast.success('Logged out successfully');
    navigate('/login');
  };
  const isActive = path => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };
  const handleNavClick = path => {
    navigate(path);
    setMobileMenuOpen(false);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50 flex",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsxs("aside", {
      className: "hidden md:flex flex-col w-64 bg-gradient-to-b from-[#1A3C6E] to-[#1A3C6E]/90 text-white fixed left-0 top-0 bottom-0 z-40",
      children: [/*#__PURE__*/_jsx("div", {
        className: "p-6 border-b border-white/10",
        children: /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex items-end gap-1",
            children: [14, 18, 16].map((height, i) => /*#__PURE__*/_jsx("div", {
              className: "w-2 bg-[#00C2CB] rounded-t",
              style: {
                height: `${height}px`
              }
            }, i))
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h1", {
              className: "text-xl font-bold",
              style: {
                fontFamily: 'Poppins, sans-serif'
              },
              children: "SmartCity"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-white/70",
              children: "Admin Portal"
            })]
          })]
        })
      }), /*#__PURE__*/_jsx("nav", {
        className: "flex-1 p-4 space-y-2",
        children: navItems.map(item => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return /*#__PURE__*/_jsxs("button", {
            onClick: () => navigate(item.path),
            className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active ? 'bg-[#00C2CB] text-white font-semibold shadow-lg' : 'text-white/80 hover:bg-white/10'}`,
            children: [/*#__PURE__*/_jsx(Icon, {
              className: "w-5 h-5",
              strokeWidth: active ? 2.5 : 2
            }), /*#__PURE__*/_jsx("span", {
              children: item.label
            })]
          }, item.path);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "p-4 border-t border-white/10",
        children: /*#__PURE__*/_jsxs("button", {
          onClick: handleLogout,
          className: "w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors",
          children: [/*#__PURE__*/_jsx(LogOut, {
            className: "w-5 h-5"
          }), /*#__PURE__*/_jsx("span", {
            children: "Logout"
          })]
        })
      })]
    }), /*#__PURE__*/_jsxs("header", {
      className: "md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#1A3C6E] to-[#00C2CB] text-white shadow-lg z-50 flex items-center justify-between px-4",
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
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-lg font-bold",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "SmartCity"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xs text-white/80",
            children: "Admin"
          })]
        })]
      }), /*#__PURE__*/_jsx("button", {
        onClick: () => setMobileMenuOpen(!mobileMenuOpen),
        className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
        children: mobileMenuOpen ? /*#__PURE__*/_jsx(X, {
          className: "w-6 h-6"
        }) : /*#__PURE__*/_jsx(Menu, {
          className: "w-6 h-6"
        })
      })]
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      children: mobileMenuOpen && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          onClick: () => setMobileMenuOpen(false),
          className: "md:hidden fixed inset-0 bg-black/50 z-40"
        }), /*#__PURE__*/_jsx(motion.div, {
          initial: {
            x: '100%'
          },
          animate: {
            x: 0
          },
          exit: {
            x: '100%'
          },
          transition: {
            type: 'spring',
            damping: 20
          },
          className: "md:hidden fixed top-16 right-0 bottom-0 w-72 bg-white shadow-2xl z-40 p-4",
          children: /*#__PURE__*/_jsxs("nav", {
            className: "space-y-2",
            children: [navItems.map(item => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return /*#__PURE__*/_jsxs("button", {
                onClick: () => handleNavClick(item.path),
                className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active ? 'bg-gradient-to-r from-[#00C2CB]/20 to-[#1A3C6E]/20 text-[#1A3C6E] font-semibold' : 'text-gray-600 hover:bg-gray-50'}`,
                children: [/*#__PURE__*/_jsx(Icon, {
                  className: "w-5 h-5",
                  strokeWidth: active ? 2.5 : 2
                }), /*#__PURE__*/_jsx("span", {
                  children: item.label
                })]
              }, item.path);
            }), /*#__PURE__*/_jsx("div", {
              className: "pt-4 mt-4 border-t border-gray-200",
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
        })]
      })
    }), /*#__PURE__*/_jsx("main", {
      className: "flex-1 md:ml-64 pt-16 md:pt-0",
      children: /*#__PURE__*/_jsx(Outlet, {})
    })]
  });
}
