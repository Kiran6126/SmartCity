import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { MapPin, Clock, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const defaultServices = [{
  id: '1',
  name: 'Government General Hospital',
  category: 'Health',
  location: 'Governorpet, Vijayawada',
  hours: '24/7',
  phone: '(0866) 257 4444',
  status: 'active',
  description: 'Emergency medical services and urgent care'
}, {
  id: '2',
  name: 'Vijayawada Bus Station',
  category: 'Transport',
  location: 'Pandit Nehru Bus Station',
  hours: '24/7',
  phone: '(0866) 247 7777',
  status: 'active',
  description: 'Main bus terminal with multiple routes'
}, {
  id: '3',
  name: 'Vijayawada Water Supply',
  category: 'Utilities',
  location: 'Water Works, Vijayawada',
  hours: '24/7 Operations',
  phone: '(0866) 244 4444',
  status: 'maintenance',
  description: 'Municipal water supply and treatment'
}, {
  id: '4',
  name: 'Indira Gandhi Municipal Stadium',
  category: 'Parks',
  location: 'Governorpet, Vijayawada',
  hours: '6:00 AM - 9:00 PM',
  phone: '(0866) 257 7777',
  status: 'active',
  description: 'Sports complex and recreational facilities'
}, {
  id: '5',
  name: 'Vijayawada Fire Station',
  category: 'Emergency',
  location: 'MG Road, Vijayawada',
  hours: '24/7',
  phone: '101',
  status: 'active',
  description: 'Emergency fire and rescue services'
}, {
  id: '6',
  name: 'Sri Krishna Devaraya Library',
  category: 'Education',
  location: 'Governorpet, Vijayawada',
  hours: '9:00 AM - 8:00 PM',
  phone: '(0866) 257 8888',
  status: 'active',
  description: 'Public library and learning resources'
}, {
  id: '7',
  name: 'Vijayawada Waste Management',
  category: 'Utilities',
  location: 'Industrial Area, Vijayawada',
  hours: '7:00 AM - 6:00 PM',
  phone: '(0866) 244 5555',
  status: 'active',
  description: 'Recycling and waste disposal services'
}, {
  id: '8',
  name: 'Swimming Pool Complex',
  category: 'Parks',
  location: 'Sports Authority, Vijayawada',
  hours: '6:00 AM - 8:00 PM',
  phone: '(0866) 257 9999',
  status: 'maintenance',
  description: 'Public swimming facility (under renovation)'
}];
export function CityServicesPage() {
  const { services } = useApp();
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const currentServices = services.length > 0 ? services : defaultServices;
  const filteredServices = currentServices.filter(service => {
    if (filter === 'all') return true;
    return service.status === filter;
  });
  const getCategoryColor = category => {
    const colors = {
      Health: 'bg-red-500',
      Transport: 'bg-blue-500',
      Utilities: 'bg-cyan-500',
      Parks: 'bg-green-500',
      Emergency: 'bg-orange-600',
      Education: 'bg-purple-500'
    };
    return colors[category] || 'bg-gray-500';
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/*#__PURE__*/_jsx("div", {
      className: "bg-white border-b border-gray-200 sticky top-16 md:top-0 z-10",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6 py-6",
        children: [/*#__PURE__*/_jsx("h1", {
          className: "text-3xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "City Services"
        }), /*#__PURE__*/_jsx(Tabs, {
          value: filter,
          onValueChange: v => setFilter(v),
          children: /*#__PURE__*/_jsxs(TabsList, {
            className: "grid w-full max-w-md grid-cols-3",
            children: [/*#__PURE__*/_jsx(TabsTrigger, {
              value: "all",
              children: "All Services"
            }), /*#__PURE__*/_jsx(TabsTrigger, {
              value: "active",
              children: "Active"
            }), /*#__PURE__*/_jsx(TabsTrigger, {
              value: "maintenance",
              children: "Maintenance"
            })]
          })
        })]
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 py-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "mb-4 text-sm text-gray-600",
        children: ["Showing ", filteredServices.length, " service", filteredServices.length !== 1 ? 's' : '']
      }), /*#__PURE__*/_jsx("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
        children: filteredServices.map((service, index) => /*#__PURE__*/_jsx(motion.div, {
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
          children: /*#__PURE__*/_jsxs(Card, {
            className: "p-5 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-[#00C2CB]/50 h-full",
            onClick: () => navigate(`/citizen/services/${service.id}`),
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-start justify-between mb-3",
              children: [/*#__PURE__*/_jsx(Badge, {
                className: `${getCategoryColor(service.category)} text-white`,
                children: service.category
              }), service.status === 'active' ? /*#__PURE__*/_jsx(CheckCircle, {
                className: "w-5 h-5 text-green-500"
              }) : /*#__PURE__*/_jsx(AlertTriangle, {
                className: "w-5 h-5 text-orange-500"
              })]
            }), /*#__PURE__*/_jsx("h3", {
              className: "text-lg font-bold mb-2 line-clamp-2",
              children: service.name
            }), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-gray-600 mb-4 line-clamp-2",
              children: service.description
            }), /*#__PURE__*/_jsxs("div", {
              className: "space-y-2 text-sm",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-gray-700",
                children: [/*#__PURE__*/_jsx(MapPin, {
                  className: "w-4 h-4 text-[#00C2CB]"
                }), /*#__PURE__*/_jsx("span", {
                  className: "line-clamp-1",
                  children: service.location
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-gray-700",
                children: [/*#__PURE__*/_jsx(Clock, {
                  className: "w-4 h-4 text-[#00C2CB]"
                }), /*#__PURE__*/_jsx("span", {
                  children: service.hours
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-gray-700",
                children: [/*#__PURE__*/_jsx(Phone, {
                  className: "w-4 h-4 text-[#00C2CB]"
                }), /*#__PURE__*/_jsx("span", {
                  children: service.phone
                })]
              })]
            }), service.status === 'maintenance' && /*#__PURE__*/_jsx("div", {
              className: "mt-4 pt-4 border-t border-gray-200",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-orange-600 text-sm",
                children: [/*#__PURE__*/_jsx(AlertTriangle, {
                  className: "w-4 h-4"
                }), /*#__PURE__*/_jsx("span", {
                  className: "font-medium",
                  children: "Under Maintenance"
                })]
              })
            })]
          })
        }, service.id))
      }), filteredServices.length === 0 && /*#__PURE__*/_jsxs("div", {
        className: "text-center py-12",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
          children: /*#__PURE__*/_jsx(MapPin, {
            className: "w-12 h-12 text-gray-400"
          })
        }), /*#__PURE__*/_jsx("h3", {
          className: "text-xl font-bold mb-2",
          children: "No Services Found"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-gray-600",
          children: "Try adjusting your filters"
        })]
      })]
    })]
  });
}
