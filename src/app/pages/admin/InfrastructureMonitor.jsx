import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Activity, Zap, Droplet, Wind, Wifi } from 'lucide-react';
import { motion } from 'motion/react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const infrastructureData = [{
  id: '1',
  name: 'Water Supply System',
  category: 'Utilities',
  status: 'ok',
  metric: '98% Capacity',
  location: 'North Treatment Plant',
  lastChecked: '5 mins ago',
  icon: Droplet
}, {
  id: '2',
  name: 'Power Grid - Sector A',
  category: 'Energy',
  status: 'ok',
  metric: '85% Load',
  location: 'Central Power Station',
  lastChecked: '2 mins ago',
  icon: Zap
}, {
  id: '3',
  name: 'Air Quality Monitors',
  category: 'Environment',
  status: 'warning',
  metric: 'AQI: 78 (Moderate)',
  location: 'City-wide Network',
  lastChecked: '1 min ago',
  icon: Wind
}, {
  id: '4',
  name: 'Traffic Management',
  category: 'Transport',
  status: 'ok',
  metric: 'Normal Flow',
  location: 'Downtown District',
  lastChecked: '3 mins ago',
  icon: Activity
}, {
  id: '5',
  name: 'Communication Network',
  category: 'Technology',
  status: 'ok',
  metric: '99.9% Uptime',
  location: 'Main Data Center',
  lastChecked: '1 min ago',
  icon: Wifi
}, {
  id: '6',
  name: 'Water Quality Sensors',
  category: 'Utilities',
  status: 'critical',
  metric: 'pH Level Alert',
  location: 'South Reservoir',
  lastChecked: '30 secs ago',
  icon: Droplet
}, {
  id: '7',
  name: 'Power Grid - Sector B',
  category: 'Energy',
  status: 'warning',
  metric: '92% Load',
  location: 'East Substation',
  lastChecked: '4 mins ago',
  icon: Zap
}, {
  id: '8',
  name: 'Emergency Alert System',
  category: 'Safety',
  status: 'ok',
  metric: 'All Systems Active',
  location: 'City-wide',
  lastChecked: '2 mins ago',
  icon: Activity
}];
const statusConfig = {
  ok: {
    label: 'Operational',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-200',
    icon: CheckCircle
  },
  warning: {
    label: 'Warning',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-200',
    icon: AlertTriangle
  },
  critical: {
    label: 'Critical',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-200',
    icon: XCircle
  }
};
export function InfrastructureMonitor() {
  const okCount = infrastructureData.filter(i => i.status === 'ok').length;
  const warningCount = infrastructureData.filter(i => i.status === 'warning').length;
  const criticalCount = infrastructureData.filter(i => i.status === 'critical').length;
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
    children: /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h1", {
          className: "text-3xl md:text-4xl font-bold mb-2",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Infrastructure Monitor"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-gray-600",
          children: "Real-time status of city infrastructure systems"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-3 gap-4",
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
            className: "p-6 bg-green-50 border-green-200",
            children: [/*#__PURE__*/_jsx(CheckCircle, {
              className: "w-10 h-10 text-green-600 mb-3"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold text-green-700 mb-1",
              children: okCount
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-green-600 font-medium",
              children: "Operational"
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
            className: "p-6 bg-yellow-50 border-yellow-200",
            children: [/*#__PURE__*/_jsx(AlertTriangle, {
              className: "w-10 h-10 text-yellow-600 mb-3"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold text-yellow-700 mb-1",
              children: warningCount
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-yellow-600 font-medium",
              children: "Warning"
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
            className: "p-6 bg-red-50 border-red-200",
            children: [/*#__PURE__*/_jsx(XCircle, {
              className: "w-10 h-10 text-red-600 mb-3"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold text-red-700 mb-1",
              children: criticalCount
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-red-600 font-medium",
              children: "Critical"
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        className: "p-6 bg-gradient-to-br from-[#1A3C6E] to-[#00C2CB] text-white",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h2", {
              className: "text-2xl font-bold mb-2",
              style: {
                fontFamily: 'Poppins, sans-serif'
              },
              children: "Overall System Health"
            }), /*#__PURE__*/_jsxs("p", {
              className: "text-white/80",
              children: ["Last updated: ", new Date().toLocaleTimeString()]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-right",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "text-5xl font-bold mb-1",
              children: [Math.round(okCount / infrastructureData.length * 100), "%"]
            }), /*#__PURE__*/_jsx("div", {
              className: "text-white/80",
              children: "Healthy"
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "mt-6",
          children: /*#__PURE__*/_jsx("div", {
            className: "h-3 bg-white/20 rounded-full overflow-hidden",
            children: /*#__PURE__*/_jsx(motion.div, {
              initial: {
                width: 0
              },
              animate: {
                width: `${okCount / infrastructureData.length * 100}%`
              },
              transition: {
                duration: 1,
                delay: 0.3
              },
              className: "h-full bg-white rounded-full"
            })
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "System Status"
        }), /*#__PURE__*/_jsx("div", {
          className: "grid md:grid-cols-2 gap-4",
          children: infrastructureData.map((item, index) => {
            const config = statusConfig[item.status];
            const StatusIcon = config.icon;
            const ItemIcon = item.icon;
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
                className: `p-5 border-2 ${config.borderColor} hover:shadow-xl transition-all`,
                children: /*#__PURE__*/_jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: `w-14 h-14 ${config.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`,
                    children: /*#__PURE__*/_jsx(ItemIcon, {
                      className: `w-7 h-7 ${config.color}`
                    })
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex items-start justify-between mb-2",
                      children: [/*#__PURE__*/_jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [/*#__PURE__*/_jsx("h3", {
                          className: "font-bold text-lg mb-1 truncate",
                          children: item.name
                        }), /*#__PURE__*/_jsx(Badge, {
                          className: `${config.bgColor} ${config.color} text-xs`,
                          children: config.label
                        })]
                      }), /*#__PURE__*/_jsx(StatusIcon, {
                        className: `w-6 h-6 ${config.color} flex-shrink-0 ml-2`
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "space-y-2 text-sm",
                      children: [/*#__PURE__*/_jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/_jsx("span", {
                          className: "text-gray-500",
                          children: "Category:"
                        }), /*#__PURE__*/_jsx("span", {
                          className: "font-medium text-gray-700",
                          children: item.category
                        })]
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/_jsx("span", {
                          className: "text-gray-500",
                          children: "Metric:"
                        }), /*#__PURE__*/_jsx("span", {
                          className: "font-medium text-gray-700",
                          children: item.metric
                        })]
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "flex items-center gap-2 truncate",
                        children: [/*#__PURE__*/_jsx("span", {
                          className: "text-gray-500",
                          children: "Location:"
                        }), /*#__PURE__*/_jsx("span", {
                          className: "font-medium text-gray-700 truncate",
                          children: item.location
                        })]
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "flex items-center gap-2 text-xs text-gray-500",
                        children: [/*#__PURE__*/_jsx(Activity, {
                          className: "w-3 h-3"
                        }), /*#__PURE__*/_jsxs("span", {
                          children: ["Checked ", item.lastChecked]
                        })]
                      })]
                    }), item.status !== 'ok' && /*#__PURE__*/_jsx("div", {
                      className: "mt-4 pt-4 border-t border-gray-200",
                      children: /*#__PURE__*/_jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/_jsx(motion.div, {
                          animate: {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          },
                          transition: {
                            duration: 2,
                            repeat: Infinity
                          },
                          className: `w-2 h-2 rounded-full ${item.status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'}`
                        }), /*#__PURE__*/_jsx("span", {
                          className: `text-xs font-medium ${item.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}`,
                          children: item.status === 'critical' ? 'Immediate Action Required' : 'Monitoring Required'
                        })]
                      })
                    })]
                  })]
                })
              })
            }, item.id);
          })
        })]
      })]
    })
  });
}
