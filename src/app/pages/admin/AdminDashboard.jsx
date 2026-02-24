import { useNavigate } from 'react-router';
import { Card } from '../../components/ui/card';
import { Building2, AlertCircle, CheckCircle, Activity, Users, TrendingUp, ArrowRight, MessageSquare, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function AdminDashboard() {
  const navigate = useNavigate();
  const {
    reports,
    feedback
  } = useApp();
  const stats = {
    totalServices: 248,
    openReports: reports.filter(r => r.status !== 'resolved').length,
    infrastructureAlerts: 3,
    activeCitizens: 12847,
    resolvedToday: reports.filter(r => r.status === 'resolved').length,
    avgResponseTime: '2.5 days'
  };
  const recentReports = reports.slice(0, 5);
  const quickActions = [{
    label: 'View All Reports',
    icon: AlertCircle,
    color: 'from-orange-500 to-red-500',
    path: '/admin/reports'
  }, {
    label: 'Update Services',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    path: '/admin/services'
  }, {
    label: 'View Feedback',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    path: '/admin/feedback'
  }, {
    label: 'Infrastructure',
    icon: Activity,
    color: 'from-purple-500 to-pink-500',
    path: '/admin/infrastructure'
  }, {
    label: 'City Information',
    icon: Users,
    color: 'from-cyan-500 to-teal-500',
    path: '/admin/city-info'
  }];
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
    children: /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-3xl md:text-4xl font-bold mb-2",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Admin Dashboard"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600",
            children: "Welcome back! Here's what's happening today."
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
        children: [/*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-4 bg-gradient-to-br from-[#1A3C6E] to-[#2a5a9e] text-white",
            children: [/*#__PURE__*/_jsx(Building2, {
              className: "w-8 h-8 mb-2 opacity-80"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold mb-1",
              children: stats.totalServices
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-white/80",
              children: "Total Services"
            })]
          })
        }), /*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 0.05
          },
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-4 bg-gradient-to-br from-orange-500 to-red-500 text-white",
            children: [/*#__PURE__*/_jsx(AlertCircle, {
              className: "w-8 h-8 mb-2 opacity-80"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold mb-1",
              children: stats.openReports
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-white/80",
              children: "Open Reports"
            })]
          })
        }), /*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 0.1
          },
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-4 bg-gradient-to-br from-red-600 to-pink-600 text-white",
            children: [/*#__PURE__*/_jsx(Activity, {
              className: "w-8 h-8 mb-2 opacity-80"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold mb-1",
              children: stats.infrastructureAlerts
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-white/80",
              children: "Infra Alerts"
            })]
          })
        }), /*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 0.15
          },
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-4 bg-gradient-to-br from-[#00C2CB] to-[#00e5f0] text-white",
            children: [/*#__PURE__*/_jsx(Users, {
              className: "w-8 h-8 mb-2 opacity-80"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold mb-1",
              children: stats.activeCitizens.toLocaleString()
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-white/80",
              children: "Active Citizens"
            })]
          })
        }), /*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 0.2
          },
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white",
            children: [/*#__PURE__*/_jsx(CheckCircle, {
              className: "w-8 h-8 mb-2 opacity-80"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold mb-1",
              children: stats.resolvedToday
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-white/80",
              children: "Resolved Today"
            })]
          })
        }), /*#__PURE__*/_jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            delay: 0.25
          },
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white",
            children: [/*#__PURE__*/_jsx(TrendingUp, {
              className: "w-8 h-8 mb-2 opacity-80"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold mb-1",
              children: stats.avgResponseTime
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-white/80",
              children: "Avg Response"
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Quick Actions"
        }), /*#__PURE__*/_jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
          children: quickActions.map((action, index) => {
            const Icon = action.icon;
            return /*#__PURE__*/_jsx(motion.div, {
              initial: {
                opacity: 0,
                scale: 0.9
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                delay: 0.3 + index * 0.05
              },
              whileHover: {
                scale: 1.02
              },
              whileTap: {
                scale: 0.98
              },
              children: /*#__PURE__*/_jsxs(Card, {
                className: `p-6 bg-gradient-to-br ${action.color} text-white cursor-pointer hover:shadow-xl transition-shadow`,
                onClick: () => navigate(action.path),
                children: [/*#__PURE__*/_jsx(Icon, {
                  className: "w-10 h-10 mb-3 opacity-90"
                }), /*#__PURE__*/_jsx("h3", {
                  className: "text-lg font-bold",
                  children: action.label
                })]
              })
            }, action.label);
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-4",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-2xl font-bold",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Recent Reports"
          }), /*#__PURE__*/_jsxs(Button, {
            variant: "ghost",
            onClick: () => navigate('/admin/reports'),
            className: "text-[#00C2CB]",
            children: ["View All", /*#__PURE__*/_jsx(ArrowRight, {
              className: "w-4 h-4 ml-2"
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "space-y-3",
          children: recentReports.map((report, index) => /*#__PURE__*/_jsx(motion.div, {
            initial: {
              opacity: 0,
              x: -20
            },
            animate: {
              opacity: 1,
              x: 0
            },
            transition: {
              delay: 0.4 + index * 0.05
            },
            children: /*#__PURE__*/_jsx(Card, {
              className: "p-5 hover:shadow-lg transition-shadow cursor-pointer",
              onClick: () => navigate('/admin/reports'),
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: `w-12 h-12 rounded-lg flex items-center justify-center ${report.status === 'pending' ? 'bg-orange-100' : report.status === 'in-progress' ? 'bg-blue-100' : 'bg-green-100'}`,
                  children: report.status === 'pending' ? /*#__PURE__*/_jsx(AlertCircle, {
                    className: "w-6 h-6 text-orange-600"
                  }) : report.status === 'in-progress' ? /*#__PURE__*/_jsx(Activity, {
                    className: "w-6 h-6 text-blue-600"
                  }) : /*#__PURE__*/_jsx(CheckCircle, {
                    className: "w-6 h-6 text-green-600"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-start justify-between mb-2",
                    children: [/*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("h3", {
                        className: "font-bold text-lg",
                        children: report.issueType
                      }), /*#__PURE__*/_jsx("p", {
                        className: "text-sm text-gray-600",
                        children: report.citizenName
                      })]
                    }), /*#__PURE__*/_jsx(Badge, {
                      className: report.status === 'pending' ? 'bg-orange-100 text-orange-700' : report.status === 'in-progress' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700',
                      children: report.status.replace('-', ' ')
                    })]
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-gray-700 text-sm mb-2",
                    children: report.description
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex items-center gap-4 text-xs text-gray-500",
                    children: [/*#__PURE__*/_jsxs("span", {
                      children: ["\uD83D\uDCCD ", report.location]
                    }), /*#__PURE__*/_jsxs("span", {
                      children: ["\uD83D\uDCC5 ", new Date(report.date).toLocaleDateString()]
                    })]
                  })]
                })]
              })
            })
          }, report.id))
        })]
      })]
    })
  });
}
