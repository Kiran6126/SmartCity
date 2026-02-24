import { useNavigate, useParams } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { ArrowLeft, MapPin, Clock, Phone, Mail, Globe, Navigation, Star } from 'lucide-react';
import { motion } from 'motion/react';

// This would come from API/database in real app
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const serviceData = {
  '1': {
    name: 'Government General Hospital',
    category: 'Health',
    location: 'Governorpet, Vijayawada, Andhra Pradesh',
    hours: '24/7',
    phone: '(0866) 257 4444',
    email: 'info@ggh-vijayawada.gov.in',
    website: 'www.ggh-vijayawada.gov.in',
    status: 'active',
    description: 'Full-service emergency medical care with state-of-the-art facilities and experienced medical staff available 24/7.',
    facilities: ['Emergency Room', 'Trauma Center', 'Ambulance Service', 'Intensive Care Unit'],
    rating: 4.8,
    reviews: 1247
  },
  '2': {
    name: 'Vijayawada Bus Station',
    category: 'Transport',
    location: 'Pandit Nehru Bus Station, Vijayawada',
    hours: '24/7',
    phone: '(0866) 247 7777',
    email: 'info@pnbus-vijayawada.gov.in',
    website: 'www.pnbus-vijayawada.gov.in',
    status: 'active',
    description: 'Main bus terminal serving multiple routes across Andhra Pradesh with modern amenities and real-time tracking.',
    facilities: ['Multiple Bus Routes', 'Ticket Counter', 'Waiting Area', 'Information Desk', 'Restrooms'],
    rating: 4.5,
    reviews: 892
  }
};
export function ServiceDetailPage() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id || '1'] || serviceData['1'];
  const getCategoryColor = category => {
    const colors = {
      Health: 'from-red-500 to-pink-500',
      Transport: 'from-blue-500 to-cyan-500',
      Utilities: 'from-cyan-500 to-teal-500',
      Parks: 'from-green-500 to-emerald-500',
      Emergency: 'from-orange-500 to-red-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/*#__PURE__*/_jsx("div", {
      className: `bg-gradient-to-br ${getCategoryColor(service.category)} text-white`,
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-4xl mx-auto px-4 md:px-6 py-6",
        children: [/*#__PURE__*/_jsxs(Button, {
          variant: "ghost",
          onClick: () => navigate(-1),
          className: "text-white hover:bg-white/20 mb-4",
          children: [/*#__PURE__*/_jsx(ArrowLeft, {
            className: "w-4 h-4 mr-2"
          }), "Back"]
        }), /*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          children: [/*#__PURE__*/_jsx(Badge, {
            className: "bg-white/20 text-white mb-3",
            children: service.category
          }), /*#__PURE__*/_jsx("h1", {
            className: "text-3xl md:text-4xl font-bold mb-4",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: service.name
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-1",
              children: [/*#__PURE__*/_jsx(Star, {
                className: "w-5 h-5 fill-yellow-300 text-yellow-300"
              }), /*#__PURE__*/_jsx("span", {
                className: "font-bold",
                children: service.rating
              })]
            }), /*#__PURE__*/_jsxs("span", {
              className: "text-white/80",
              children: ["(", service.reviews, " reviews)"]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
        children: [/*#__PURE__*/_jsxs(Button, {
          className: "h-auto py-4 flex-col gap-2 bg-[#00C2CB] hover:bg-[#00C2CB]/90",
          children: [/*#__PURE__*/_jsx(Phone, {
            className: "w-5 h-5"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-xs",
            children: "Call"
          })]
        }), /*#__PURE__*/_jsxs(Button, {
          className: "h-auto py-4 flex-col gap-2 bg-[#1A3C6E] hover:bg-[#1A3C6E]/90",
          children: [/*#__PURE__*/_jsx(Mail, {
            className: "w-5 h-5"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-xs",
            children: "Email"
          })]
        }), /*#__PURE__*/_jsxs(Button, {
          className: "h-auto py-4 flex-col gap-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90",
          children: [/*#__PURE__*/_jsx(Navigation, {
            className: "w-5 h-5"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-xs",
            children: "Navigate"
          })]
        }), /*#__PURE__*/_jsxs(Button, {
          className: "h-auto py-4 flex-col gap-2 bg-purple-600 hover:bg-purple-700",
          children: [/*#__PURE__*/_jsx(Globe, {
            className: "w-5 h-5"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-xs",
            children: "Website"
          })]
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        className: "p-6",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-3",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "About"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-gray-700 leading-relaxed",
          children: service.description
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        className: "p-6",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Contact Information"
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-start gap-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 bg-[#00C2CB]/10 rounded-lg flex items-center justify-center flex-shrink-0",
              children: /*#__PURE__*/_jsx(MapPin, {
                className: "w-5 h-5 text-[#00C2CB]"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "font-semibold mb-1",
                children: "Address"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-gray-600",
                children: service.location
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-start gap-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 bg-[#00C2CB]/10 rounded-lg flex items-center justify-center flex-shrink-0",
              children: /*#__PURE__*/_jsx(Clock, {
                className: "w-5 h-5 text-[#00C2CB]"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "font-semibold mb-1",
                children: "Operating Hours"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-gray-600",
                children: service.hours
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-start gap-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 bg-[#00C2CB]/10 rounded-lg flex items-center justify-center flex-shrink-0",
              children: /*#__PURE__*/_jsx(Phone, {
                className: "w-5 h-5 text-[#00C2CB]"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "font-semibold mb-1",
                children: "Phone"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-gray-600",
                children: service.phone
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-start gap-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 bg-[#00C2CB]/10 rounded-lg flex items-center justify-center flex-shrink-0",
              children: /*#__PURE__*/_jsx(Mail, {
                className: "w-5 h-5 text-[#00C2CB]"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "font-semibold mb-1",
                children: "Email"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-gray-600",
                children: service.email
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-start gap-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-10 h-10 bg-[#00C2CB]/10 rounded-lg flex items-center justify-center flex-shrink-0",
              children: /*#__PURE__*/_jsx(Globe, {
                className: "w-5 h-5 text-[#00C2CB]"
              })
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "font-semibold mb-1",
                children: "Website"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-[#00C2CB]",
                children: service.website
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        className: "p-6",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Facilities & Amenities"
        }), /*#__PURE__*/_jsx("div", {
          className: "grid md:grid-cols-2 gap-3",
          children: service.facilities.map((facility, index) => /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg",
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-2 h-2 bg-[#00C2CB] rounded-full"
            }), /*#__PURE__*/_jsx("span", {
              children: facility
            })]
          }, index))
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        className: "p-6",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Location Map"
        }), /*#__PURE__*/_jsx("div", {
          className: "w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center",
          children: /*#__PURE__*/_jsxs("div", {
            className: "text-center",
            children: [/*#__PURE__*/_jsx(MapPin, {
              className: "w-12 h-12 text-gray-400 mx-auto mb-2"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-gray-600",
              children: "Interactive map would appear here"
            })]
          })
        })]
      }), /*#__PURE__*/_jsx(Button, {
        onClick: () => navigate('/citizen/report'),
        className: "w-full h-14 text-lg font-bold bg-gradient-to-r from-[#FF6B35] to-[#ff8c5f]",
        children: "Report an Issue with this Service"
      })]
    })]
  });
}
