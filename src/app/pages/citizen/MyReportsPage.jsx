import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Plus, Clock, CheckCircle, AlertCircle, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const statusConfig = {
  'pending': {
    label: 'Pending Review',
    color: 'text-orange-600',
    icon: Clock,
    bgColor: 'bg-orange-100'
  },
  'in-progress': {
    label: 'In Progress',
    color: 'text-blue-600',
    icon: AlertCircle,
    bgColor: 'bg-blue-100'
  },
  'resolved': {
    label: 'Resolved',
    color: 'text-green-600',
    icon: CheckCircle,
    bgColor: 'bg-green-100'
  }
};
export function MyReportsPage() {
  const navigate = useNavigate();
  const {
    reports
  } = useApp();

  // Filter reports to show only citizen's reports (in real app, filter by user ID)
  const myReports = reports;
  const getStatusStats = () => {
    return {
      pending: myReports.filter(r => r.status === 'pending').length,
      inProgress: myReports.filter(r => r.status === 'in-progress').length,
      resolved: myReports.filter(r => r.status === 'resolved').length
    };
  };
  const stats = getStatusStats();
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/*#__PURE__*/_jsx("div", {
      className: "bg-gradient-to-r from-[#1A3C6E] to-[#00C2CB] text-white",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-6xl mx-auto px-4 md:px-6 py-8",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h1", {
              className: "text-3xl md:text-4xl font-bold mb-2",
              style: {
                fontFamily: 'Poppins, sans-serif'
              },
              children: "My Reports"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-white/90",
              children: "Track the status of your submitted issues"
            })]
          }), /*#__PURE__*/_jsxs(Button, {
            onClick: () => navigate('/citizen/report'),
            className: "bg-[#FF6B35] hover:bg-[#FF6B35]/90 hidden md:flex",
            children: [/*#__PURE__*/_jsx(Plus, {
              className: "w-4 h-4 mr-2"
            }), "New Report"]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "grid grid-cols-3 gap-3 md:gap-4",
          children: [/*#__PURE__*/_jsxs(motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            className: "bg-white/10 backdrop-blur-md rounded-xl p-4",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-2xl md:text-3xl font-bold mb-1",
              children: stats.pending
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm md:text-base text-white/80",
              children: "Pending"
            })]
          }), /*#__PURE__*/_jsxs(motion.div, {
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
            className: "bg-white/10 backdrop-blur-md rounded-xl p-4",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-2xl md:text-3xl font-bold mb-1",
              children: stats.inProgress
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm md:text-base text-white/80",
              children: "In Progress"
            })]
          }), /*#__PURE__*/_jsxs(motion.div, {
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
            className: "bg-white/10 backdrop-blur-md rounded-xl p-4",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-2xl md:text-3xl font-bold mb-1",
              children: stats.resolved
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm md:text-base text-white/80",
              children: "Resolved"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "max-w-6xl mx-auto px-4 md:px-6 py-6",
      children: myReports.length === 0 ? /*#__PURE__*/_jsxs(Card, {
        className: "p-12 text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
          children: /*#__PURE__*/_jsx(AlertCircle, {
            className: "w-10 h-10 text-gray-400"
          })
        }), /*#__PURE__*/_jsx("h3", {
          className: "text-xl font-bold mb-2",
          children: "No Reports Yet"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-gray-600 mb-6",
          children: "You haven't submitted any reports. Start by reporting an issue."
        }), /*#__PURE__*/_jsxs(Button, {
          onClick: () => navigate('/citizen/report'),
          className: "bg-gradient-to-r from-[#FF6B35] to-[#ff8c5f]",
          children: [/*#__PURE__*/_jsx(Plus, {
            className: "w-4 h-4 mr-2"
          }), "Report an Issue"]
        })]
      }) : /*#__PURE__*/_jsx("div", {
        className: "space-y-4",
        children: myReports.map((report, index) => {
          const config = statusConfig[report.status];
          const StatusIcon = config.icon;
          return /*#__PURE__*/_jsx(motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              delay: index * 0.05
            },
            children: /*#__PURE__*/_jsx(Card, {
              className: "p-5 md:p-6 hover:shadow-lg transition-shadow",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex flex-col md:flex-row md:items-start gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: `w-14 h-14 ${config.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`,
                  children: /*#__PURE__*/_jsx(StatusIcon, {
                    className: `w-7 h-7 ${config.color}`
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3",
                    children: /*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("h3", {
                        className: "text-lg md:text-xl font-bold mb-1",
                        children: report.issueType
                      }), /*#__PURE__*/_jsx(Badge, {
                        className: `${config.bgColor} ${config.color} border-0`,
                        children: config.label
                      })]
                    })
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-gray-700 mb-4",
                    children: report.description
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex flex-wrap gap-4 text-sm text-gray-600",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/*#__PURE__*/_jsx(MapPin, {
                        className: "w-4 h-4 text-[#00C2CB]"
                      }), /*#__PURE__*/_jsx("span", {
                        children: report.location
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/*#__PURE__*/_jsx(Calendar, {
                        className: "w-4 h-4 text-[#00C2CB]"
                      }), /*#__PURE__*/_jsx("span", {
                        children: new Date(report.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })
                      })]
                    })]
                  }), report.status !== 'pending' && /*#__PURE__*/_jsx("div", {
                    className: "mt-4 pt-4 border-t border-gray-200",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "flex-1 h-2 bg-gray-200 rounded-full overflow-hidden",
                        children: /*#__PURE__*/_jsx(motion.div, {
                          initial: {
                            width: 0
                          },
                          animate: {
                            width: report.status === 'resolved' ? '100%' : '50%'
                          },
                          transition: {
                            duration: 1,
                            delay: 0.3
                          },
                          className: `h-full ${report.status === 'resolved' ? 'bg-green-500' : 'bg-blue-500'}`
                        })
                      }), /*#__PURE__*/_jsx("span", {
                        className: "text-xs font-medium text-gray-600",
                        children: report.status === 'resolved' ? '100%' : '50%'
                      })]
                    })
                  }), report.adminResponse && /*#__PURE__*/_jsxs("div", {
                    className: "mt-4 pt-4 border-t border-gray-200",
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "text-sm font-semibold text-gray-700 mb-2",
                      children: "Response from City Administration:"
                    }), /*#__PURE__*/_jsx("div", {
                      className: "bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm text-gray-700",
                      children: report.adminResponse
                    })]
                  })]
                })]
              })
            })
          }, report.id);
        })
      })
    }), /*#__PURE__*/_jsx(Button, {
      onClick: () => navigate('/citizen/report'),
      className: "md:hidden fixed bottom-20 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#ff8c5f] shadow-2xl",
      children: /*#__PURE__*/_jsx(Plus, {
        className: "w-6 h-6"
      })
    })]
  });
}
