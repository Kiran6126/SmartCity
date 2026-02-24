import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { useApp } from '../../context/AppContext';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const amenities = ['Government General Hospital', 'Vijayawada Bus Station', 'Vijayawada Water Supply', 'Indira Gandhi Municipal Stadium', 'Vijayawada Fire Station', 'Sri Krishna Devaraya Library', 'Vijayawada Waste Management', 'Swimming Pool Complex'];
export function FeedbackPage() {
  const navigate = useNavigate();
  const { addFeedback } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    amenity: '',
    comment: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.amenity || rating === 0) {
      toast.error('Please select an amenity and provide a rating');
      return;
    }
    // Save feedback
    const feedbackId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const feedbackData = {
      amenity: formData.amenity,
      comment: formData.comment,
      rating: rating,
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().toISOString(),
      id: feedbackId
    };
    
    // Save to context (localStorage)
    addFeedback(feedbackData);
    
    // Also save to sessionStorage for admin view
    const existingSessionFeedback = JSON.parse(sessionStorage.getItem('adminFeedback') || '[]');
    existingSessionFeedback.push(feedbackData);
    sessionStorage.setItem('adminFeedback', JSON.stringify(existingSessionFeedback));
    
    setSubmitted(true);
    toast.success('Thank you for your feedback!');
  };
  if (submitted) {
    return /*#__PURE__*/_jsxs("div", {
      className: "min-h-screen bg-gray-50 flex items-center justify-center p-4",
      children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsx(motion.div, {
        initial: {
          scale: 0.8,
          opacity: 0
        },
        animate: {
          scale: 1,
          opacity: 1
        },
        className: "max-w-md w-full",
        children: /*#__PURE__*/_jsxs(Card, {
          className: "p-8 text-center",
          children: [/*#__PURE__*/_jsx(motion.div, {
            initial: {
              scale: 0
            },
            animate: {
              scale: 1
            },
            transition: {
              delay: 0.2,
              type: 'spring',
              stiffness: 200
            },
            className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
            children: /*#__PURE__*/_jsx(CheckCircle, {
              className: "w-12 h-12 text-green-600"
            })
          }), /*#__PURE__*/_jsx("h2", {
            className: "text-2xl font-bold mb-2",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Feedback Submitted!"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600 mb-6",
            children: "Thank you for helping us improve city services. Your feedback is valuable to us."
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsx(Button, {
              onClick: () => {
                setSubmitted(false);
                setRating(0);
                setFormData({
                  amenity: '',
                  comment: ''
                });
              },
              variant: "outline",
              className: "w-full",
              children: "Submit Another Feedback"
            }), /*#__PURE__*/_jsx(Button, {
              onClick: () => navigate('/citizen'),
              className: "w-full bg-[#00C2CB] hover:bg-[#00C2CB]/90",
              children: "Back to Home"
            })]
          })]
        })
      })]
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsx("div", {
      className: "bg-gradient-to-r from-[#00C2CB] to-[#1A3C6E] text-white",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-3xl mx-auto px-4 md:px-6 py-8",
        children: [/*#__PURE__*/_jsx("h1", {
          className: "text-3xl md:text-4xl font-bold mb-2",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Service Feedback"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-white/90",
          children: "Help us improve by sharing your experience"
        })]
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "max-w-3xl mx-auto px-4 md:px-6 py-6",
      children: [/*#__PURE__*/_jsx(Card, {
        className: "p-6 md:p-8",
        children: /*#__PURE__*/_jsxs("form", {
          onSubmit: handleSubmit,
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsxs(Label, {
              htmlFor: "amenity",
              children: ["Select Service/Amenity ", /*#__PURE__*/_jsx("span", {
                className: "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/_jsxs(Select, {
              value: formData.amenity,
              onValueChange: value => setFormData({
                ...formData,
                amenity: value
              }),
              children: [/*#__PURE__*/_jsx(SelectTrigger, {
                className: "h-12",
                children: /*#__PURE__*/_jsx(SelectValue, {
                  placeholder: "Choose a service to rate"
                })
              }), /*#__PURE__*/_jsx(SelectContent, {
                children: amenities.map(amenity => /*#__PURE__*/_jsx(SelectItem, {
                  value: amenity,
                  children: amenity
                }, amenity))
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsxs(Label, {
              children: ["Rating ", /*#__PURE__*/_jsx("span", {
                className: "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "flex gap-2",
              children: [1, 2, 3, 4, 5].map(star => /*#__PURE__*/_jsx("button", {
                type: "button",
                onClick: () => setRating(star),
                onMouseEnter: () => setHoverRating(star),
                onMouseLeave: () => setHoverRating(0),
                className: "transition-transform hover:scale-110 focus:outline-none",
                children: /*#__PURE__*/_jsx(Star, {
                  className: `w-12 h-12 transition-colors ${star <= (hoverRating || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`
                })
              }, star))
            }), rating > 0 && /*#__PURE__*/_jsxs(motion.p, {
              initial: {
                opacity: 0,
                y: -10
              },
              animate: {
                opacity: 1,
                y: 0
              },
              className: "text-sm font-medium",
              children: [rating === 1 && '⭐ Poor', rating === 2 && '⭐⭐ Fair', rating === 3 && '⭐⭐⭐ Good', rating === 4 && '⭐⭐⭐⭐ Very Good', rating === 5 && '⭐⭐⭐⭐⭐ Excellent']
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsx(Label, {
              htmlFor: "comment",
              children: "Your Comments (Optional)"
            }), /*#__PURE__*/_jsx(Textarea, {
              id: "comment",
              placeholder: "Tell us about your experience...",
              value: formData.comment,
              onChange: e => setFormData({
                ...formData,
                comment: e.target.value
              }),
              className: "min-h-32 resize-none"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-gray-500",
              children: "Share any suggestions or concerns you have"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "bg-gradient-to-r from-[#00C2CB]/10 to-[#1A3C6E]/10 border border-[#00C2CB]/20 rounded-lg p-4",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold text-[#1A3C6E] mb-2",
              children: "Why your feedback matters"
            }), /*#__PURE__*/_jsxs("ul", {
              className: "text-sm text-gray-700 space-y-1",
              children: [/*#__PURE__*/_jsx("li", {
                children: "\u2022 Helps us identify areas for improvement"
              }), /*#__PURE__*/_jsx("li", {
                children: "\u2022 Influences future city planning decisions"
              }), /*#__PURE__*/_jsx("li", {
                children: "\u2022 Ensures better services for all citizens"
              })]
            })]
          }), /*#__PURE__*/_jsx(Button, {
            type: "submit",
            className: "w-full h-14 text-lg font-bold bg-gradient-to-r from-[#00C2CB] to-[#1A3C6E]",
            children: "Submit Feedback"
          })]
        })
      }), /*#__PURE__*/_jsxs(Card, {
        className: "mt-6 p-6",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "text-xl font-bold mb-4",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Community Feedback Stats"
        }), /*#__PURE__*/_jsxs("div", {
          className: "grid md:grid-cols-3 gap-4",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "text-center p-4 bg-green-50 rounded-lg",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold text-green-600 mb-1",
              children: "4.6"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-gray-600",
              children: "Average Rating"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-center p-4 bg-blue-50 rounded-lg",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold text-blue-600 mb-1",
              children: "1,247"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-gray-600",
              children: "Total Reviews"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-center p-4 bg-purple-50 rounded-lg",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-3xl font-bold text-purple-600 mb-1",
              children: "89%"
            }), /*#__PURE__*/_jsx("div", {
              className: "text-sm text-gray-600",
              children: "Satisfaction Rate"
            })]
          })]
        })]
      })]
    })]
  });
}
