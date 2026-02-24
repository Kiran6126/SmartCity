import { useState, useEffect } from 'react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { ArrowLeft, MessageSquare, Star, Search, Filter, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useApp } from '../../context/AppContext';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function ViewFeedback() {
  const navigate = useNavigate();
  const { feedback } = useApp();
  const [filteredFeedback, setFilteredFeedback] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [filterAmenity, setFilterAmenity] = useState('all');

  // Use sessionStorage for feedback
  const [sessionFeedback, setSessionFeedback] = useState(() => {
    const sessionData = sessionStorage.getItem('adminFeedback');
    return sessionData ? JSON.parse(sessionData) : [];
  });

  // Combine context feedback with session feedback, removing duplicates
  const allFeedback = [...feedback, ...sessionFeedback].filter((item, index, self) => 
    index === self.findIndex(f => f.id === item.id)
  );

  useEffect(() => {
    let filtered = allFeedback;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.comment?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.amenity?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterRating !== 'all') {
      filtered = filtered.filter(item => item.rating === parseInt(filterRating));
    }

    if (filterAmenity !== 'all') {
      filtered = filtered.filter(item => item.amenity === filterAmenity);
    }

    setFilteredFeedback(filtered);
  }, [allFeedback, searchTerm, filterRating, filterAmenity]);

  // Get unique amenities for filter
  const amenities = [...new Set(allFeedback.map(item => item.amenity))];

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRatingBg = (rating) => {
    if (rating >= 4) return 'bg-green-100';
    if (rating >= 3) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/_jsx(Button, {
          variant: "ghost",
          onClick: () => navigate('/admin'),
          className: "text-[#00C2CB]",
          children: /*#__PURE__*/_jsx(ArrowLeft, {
            className: "w-5 h-5"
          })
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-3xl md:text-4xl font-bold",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Citizen Feedback"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600",
            children: "View and manage feedback from citizens"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
        children: [/*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-[#00C2CB]",
            children: allFeedback.length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Total Feedback"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-green-600",
            children: allFeedback.filter(f => f.rating >= 4).length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Positive (4-5 stars)"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-yellow-600",
            children: allFeedback.filter(f => f.rating === 3).length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Neutral (3 stars)"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-red-600",
            children: allFeedback.filter(f => f.rating <= 2).length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-600",
            children: "Needs Improvement (1-2 stars)"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid md:grid-cols-3 gap-4",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "relative",
          children: [/*#__PURE__*/_jsx(Search, {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          }), /*#__PURE__*/_jsx(Input, {
            placeholder: "Search feedback...",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            className: "pl-10"
          })]
        }), /*#__PURE__*/_jsxs(Select, {
          value: filterRating,
          onValueChange: setFilterRating,
          children: [/*#__PURE__*/_jsx(SelectTrigger, {
            children: /*#__PURE__*/_jsx(SelectValue, {
              placeholder: "Filter by rating"
            })
          }), /*#__PURE__*/_jsxs(SelectContent, {
            children: [/*#__PURE__*/_jsx(SelectItem, {
              value: "all",
              children: "All Ratings"
            }), /*#__PURE__*/_jsx(SelectItem, {
              value: "5",
              children: "5 Stars"
            }), /*#__PURE__*/_jsx(SelectItem, {
              value: "4",
              children: "4 Stars"
            }), /*#__PURE__*/_jsx(SelectItem, {
              value: "3",
              children: "3 Stars"
            }), /*#__PURE__*/_jsx(SelectItem, {
              value: "2",
              children: "2 Stars"
            }), /*#__PURE__*/_jsx(SelectItem, {
              value: "1",
              children: "1 Star"
            })]
          })]
        }), /*#__PURE__*/_jsxs(Select, {
          value: filterAmenity,
          onValueChange: setFilterAmenity,
          children: [/*#__PURE__*/_jsx(SelectTrigger, {
            children: /*#__PURE__*/_jsx(SelectValue, {
              placeholder: "Filter by amenity"
            })
          }), /*#__PURE__*/_jsxs(SelectContent, {
            children: [/*#__PURE__*/_jsx(SelectItem, {
              value: "all",
              children: "All Amenities"
            }), amenities.map(amenity => /*#__PURE__*/_jsx(SelectItem, {
              value: amenity,
              children: amenity
            }, amenity))]
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-4",
        children: filteredFeedback.length > 0 ? filteredFeedback.map((item, index) => /*#__PURE__*/_jsx(motion.div, {
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
            className: "p-6 hover:shadow-lg transition-shadow",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-start justify-between mb-4",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "font-bold text-lg mb-1",
                  children: item.amenity
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsx(Calendar, {
                    className: "w-4 h-4 text-gray-400"
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-sm text-gray-600",
                    children: new Date(item.timestamp).toLocaleDateString()
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: `flex items-center gap-1 px-3 py-1 rounded-full ${getRatingBg(item.rating)}`,
                children: [/*#__PURE__*/_jsx(Star, {
                  className: `w-4 h-4 fill-current ${getRatingColor(item.rating)}`
                }), /*#__PURE__*/_jsxs("span", {
                  className: `font-bold ${getRatingColor(item.rating)}`,
                  children: [item.rating, "/5"]
                })]
              })]
            }), item.comment && /*#__PURE__*/_jsxs("div", {
              className: "mb-4",
              children: [/*#__PURE__*/_jsx("p", {
                className: "text-gray-700 leading-relaxed",
                children: item.comment
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "flex items-center gap-2 text-sm text-gray-500",
              children: /*#__PURE__*/_jsxs("span", {
                children: ["Feedback ID: ", item.id]
              })
            })]
          })
        }, item.id)) : /*#__PURE__*/_jsxs("div", {
          className: "text-center py-12",
          children: [/*#__PURE__*/_jsx(MessageSquare, {
            className: "w-16 h-16 text-gray-300 mx-auto mb-4"
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-lg font-medium text-gray-600 mb-2",
            children: "No feedback found"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-500",
            children: "Try adjusting your search or filter criteria"
          })]
        })
      })]
    })]
  });
}