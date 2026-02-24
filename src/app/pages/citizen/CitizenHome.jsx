import { useNavigate } from 'react-router';
import { Search, Heart, Bus, Droplet, Trees, AlertCircle, Plus, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { Badge } from '../../components/ui/badge';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const categories = [{
  icon: Heart,
  label: 'Health',
  color: 'from-red-500 to-pink-500',
  path: '/citizen/services'
}, {
  icon: Bus,
  label: 'Transport',
  color: 'from-blue-500 to-cyan-500',
  path: '/citizen/services'
}, {
  icon: Droplet,
  label: 'Utilities',
  color: 'from-cyan-500 to-teal-500',
  path: '/citizen/services'
}, {
  icon: Trees,
  label: 'Parks',
  color: 'from-green-500 to-emerald-500',
  path: '/citizen/services'
}, {
  icon: AlertCircle,
  label: 'Emergency',
  color: 'from-orange-500 to-red-600',
  path: '/citizen/services'
}, {
  icon: MapPin,
  label: 'More',
  color: 'from-purple-500 to-indigo-500',
  path: '/citizen/services'
}];
const newsItems = [{
  id: 1,
  title: 'New Public Transportation Routes',
  description: '5 new bus routes added to improve connectivity',
  date: '2 hours ago',
  tag: 'Transport',
  tagColor: 'bg-blue-500'
}, {
  id: 2,
  title: 'Smart Street Lights Installation',
  description: 'City-wide smart lighting project underway',
  date: '1 day ago',
  tag: 'Infrastructure',
  tagColor: 'bg-purple-500'
}, {
  id: 3,
  title: 'Community Health Camp',
  description: 'Free health checkup at Central Park this weekend',
  date: '2 days ago',
  tag: 'Health',
  tagColor: 'bg-red-500'
}];
const quickStats = [{
  label: 'Active Services',
  value: '248',
  icon: TrendingUp,
  color: 'text-green-600'
}, {
  label: 'Open Reports',
  value: '12',
  icon: AlertCircle,
  color: 'text-orange-600'
}];
export function CitizenHome() {
  const navigate = useNavigate();
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/*#__PURE__*/_jsx("div", {
      className: "bg-gradient-to-br from-[#1A3C6E] via-[#00C2CB] to-[#FF6B35] text-white",
      children: /*#__PURE__*/_jsx("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12",
        children: /*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6
          },
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-3xl md:text-4xl font-bold mb-2",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Welcome Back, Citizen! \uD83D\uDC4B"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-white/90 mb-6 md:text-lg",
            children: "What can we help you with today?"
          }), /*#__PURE__*/_jsxs("div", {
            className: "relative max-w-2xl",
            children: [/*#__PURE__*/_jsx(Search, {
              className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            }), /*#__PURE__*/_jsx(Input, {
              placeholder: "Search services, parks, utilities...",
              className: "pl-12 h-14 bg-white text-gray-900 border-0 shadow-lg"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "grid grid-cols-2 gap-4 mt-6",
            children: quickStats.map((stat, index) => /*#__PURE__*/_jsxs(motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                delay: 0.2 + index * 0.1
              },
              className: "bg-white/10 backdrop-blur-md rounded-xl p-4",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 mb-1",
                children: [/*#__PURE__*/_jsx(stat.icon, {
                  className: "w-4 h-4"
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-sm text-white/80",
                  children: stat.label
                })]
              }), /*#__PURE__*/_jsx("div", {
                className: "text-2xl font-bold",
                children: stat.value
              })]
            }, stat.label))
          })]
        })
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-8",
      children: [/*#__PURE__*/_jsxs("section", {
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center justify-between mb-4",
          children: /*#__PURE__*/_jsx("h2", {
            className: "text-2xl font-bold",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Categories"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4",
          children: categories.map((category, index) => {
            const Icon = category.icon;
            return /*#__PURE__*/_jsx(motion.button, {
              initial: {
                opacity: 0,
                scale: 0.8
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                delay: index * 0.05
              },
              onClick: () => navigate(category.path),
              className: "group",
              children: /*#__PURE__*/_jsxs(Card, {
                className: "p-4 md:p-6 hover:shadow-lg transition-all border-2 hover:border-[#00C2CB]/50",
                children: [/*#__PURE__*/_jsx("div", {
                  className: `w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`,
                  children: /*#__PURE__*/_jsx(Icon, {
                    className: "w-6 h-6 md:w-7 md:h-7 text-white",
                    strokeWidth: 2
                  })
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-sm md:text-base font-semibold text-center",
                  children: category.label
                })]
              })
            }, category.label);
          })
        })]
      }), /*#__PURE__*/_jsxs("section", {
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Quick Actions"
        }), /*#__PURE__*/_jsxs("div", {
          className: "grid md:grid-cols-2 gap-4",
          children: [/*#__PURE__*/_jsx(motion.div, {
            whileHover: {
              scale: 1.02
            },
            whileTap: {
              scale: 0.98
            },
            children: /*#__PURE__*/_jsx(Card, {
              className: "p-6 bg-gradient-to-br from-[#FF6B35] to-[#ff8c5f] text-white cursor-pointer hover:shadow-xl transition-shadow",
              onClick: () => navigate('/citizen/report'),
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",
                  children: /*#__PURE__*/_jsx(Plus, {
                    className: "w-8 h-8"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsx("h3", {
                    className: "text-xl font-bold mb-1",
                    children: "Report an Issue"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-white/90 text-sm",
                    children: "Found a problem? Let us know"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/_jsx(motion.div, {
            whileHover: {
              scale: 1.02
            },
            whileTap: {
              scale: 0.98
            },
            children: /*#__PURE__*/_jsx(Card, {
              className: "p-6 bg-gradient-to-br from-[#00C2CB] to-[#00e5f0] text-white cursor-pointer hover:shadow-xl transition-shadow",
              onClick: () => navigate('/citizen/my-reports'),
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center",
                  children: /*#__PURE__*/_jsx(AlertCircle, {
                    className: "w-8 h-8"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsx("h3", {
                    className: "text-xl font-bold mb-1",
                    children: "Track My Reports"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-white/90 text-sm",
                    children: "View status of your submissions"
                  })]
                })]
              })
            })
          })]
        })]
      }), /*#__PURE__*/_jsxs("section", {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between mb-4",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-2xl font-bold",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "City Updates"
          }), /*#__PURE__*/_jsx(Button, {
            variant: "ghost",
            className: "text-[#00C2CB]",
            children: "View All"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "space-y-3",
          children: newsItems.map((news, index) => /*#__PURE__*/_jsx(motion.div, {
            initial: {
              opacity: 0,
              x: -20
            },
            animate: {
              opacity: 1,
              x: 0
            },
            transition: {
              delay: index * 0.1
            },
            children: /*#__PURE__*/_jsx(Card, {
              className: "p-4 md:p-5 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-[#00C2CB]",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex gap-4",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [/*#__PURE__*/_jsx(Badge, {
                      className: `${news.tagColor} text-white`,
                      children: news.tag
                    }), /*#__PURE__*/_jsx("span", {
                      className: "text-xs text-gray-500",
                      children: news.date
                    })]
                  }), /*#__PURE__*/_jsx("h3", {
                    className: "font-bold text-lg mb-1",
                    children: news.title
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-gray-600 text-sm",
                    children: news.description
                  })]
                }), /*#__PURE__*/_jsx("div", {
                  className: "w-20 h-20 bg-gradient-to-br from-[#00C2CB]/20 to-[#1A3C6E]/20 rounded-lg flex items-center justify-center",
                  children: /*#__PURE__*/_jsx(TrendingUp, {
                    className: "w-8 h-8 text-[#00C2CB]"
                  })
                })]
              })
            })
          }, news.id))
        })]
      })]
    })]
  });
}
