import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Card } from '../../components/ui/card';
import { Upload, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const issueTypes = ['Road Maintenance', 'Street Light', 'Water Supply', 'Garbage Collection', 'Traffic Signal', 'Public Transport', 'Park Maintenance', 'Other'];
export function ReportIssuePage() {
  const navigate = useNavigate();
  const {
    addReport
  } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    issueType: '',
    description: '',
    location: '',
    image: null
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.issueType || !formData.description || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }
    addReport({
      issueType: formData.issueType,
      description: formData.description,
      location: formData.location
    });
    setSubmitted(true);
    toast.success('Report submitted successfully!');
  };
  const handleImageUpload = e => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    }
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
            children: "Report Submitted!"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600 mb-6",
            children: "Thank you for reporting. We'll review your submission and take appropriate action."
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsx(Button, {
              onClick: () => navigate('/citizen/my-reports'),
              className: "w-full bg-[#00C2CB] hover:bg-[#00C2CB]/90",
              children: "View My Reports"
            }), /*#__PURE__*/_jsx(Button, {
              onClick: () => navigate('/citizen'),
              variant: "outline",
              className: "w-full",
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
      className: "bg-gradient-to-r from-[#FF6B35] to-[#ff8c5f] text-white",
      children: /*#__PURE__*/_jsxs("div", {
        className: "max-w-3xl mx-auto px-4 md:px-6 py-6",
        children: [/*#__PURE__*/_jsxs(Button, {
          variant: "ghost",
          onClick: () => navigate(-1),
          className: "text-white hover:bg-white/20 mb-4",
          children: [/*#__PURE__*/_jsx(ArrowLeft, {
            className: "w-4 h-4 mr-2"
          }), "Back"]
        }), /*#__PURE__*/_jsx("h1", {
          className: "text-3xl md:text-4xl font-bold mb-2",
          style: {
            fontFamily: 'Poppins, sans-serif'
          },
          children: "Report an Issue"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-white/90",
          children: "Help us improve the city by reporting problems"
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "max-w-3xl mx-auto px-4 md:px-6 py-6",
      children: /*#__PURE__*/_jsx(Card, {
        className: "p-6 md:p-8",
        children: /*#__PURE__*/_jsxs("form", {
          onSubmit: handleSubmit,
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsxs(Label, {
              htmlFor: "issueType",
              children: ["Issue Type ", /*#__PURE__*/_jsx("span", {
                className: "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/_jsxs(Select, {
              value: formData.issueType,
              onValueChange: value => setFormData({
                ...formData,
                issueType: value
              }),
              children: [/*#__PURE__*/_jsx(SelectTrigger, {
                className: "h-12",
                children: /*#__PURE__*/_jsx(SelectValue, {
                  placeholder: "Select issue type"
                })
              }), /*#__PURE__*/_jsx(SelectContent, {
                children: issueTypes.map(type => /*#__PURE__*/_jsx(SelectItem, {
                  value: type,
                  children: type
                }, type))
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsxs(Label, {
              htmlFor: "location",
              children: ["Location ", /*#__PURE__*/_jsx("span", {
                className: "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative",
              children: [/*#__PURE__*/_jsx(MapPin, {
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              }), /*#__PURE__*/_jsx(Input, {
                id: "location",
                placeholder: "e.g., Main Street, near Central Park",
                value: formData.location,
                onChange: e => setFormData({
                  ...formData,
                  location: e.target.value
                }),
                className: "pl-11 h-12"
              })]
            }), /*#__PURE__*/_jsxs(Button, {
              type: "button",
              variant: "outline",
              size: "sm",
              className: "mt-2 text-[#00C2CB]",
              children: [/*#__PURE__*/_jsx(MapPin, {
                className: "w-4 h-4 mr-2"
              }), "Use Current Location"]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsxs(Label, {
              htmlFor: "description",
              children: ["Description ", /*#__PURE__*/_jsx("span", {
                className: "text-red-500",
                children: "*"
              })]
            }), /*#__PURE__*/_jsx(Textarea, {
              id: "description",
              placeholder: "Please describe the issue in detail...",
              value: formData.description,
              onChange: e => setFormData({
                ...formData,
                description: e.target.value
              }),
              className: "min-h-32 resize-none"
            }), /*#__PURE__*/_jsxs("p", {
              className: "text-sm text-gray-500",
              children: [formData.description.length, "/500 characters"]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-2",
            children: [/*#__PURE__*/_jsx(Label, {
              htmlFor: "photo",
              children: "Photo (Optional)"
            }), /*#__PURE__*/_jsxs("div", {
              className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00C2CB] transition-colors cursor-pointer",
              children: [/*#__PURE__*/_jsx("input", {
                type: "file",
                id: "photo",
                accept: "image/*",
                onChange: handleImageUpload,
                className: "hidden"
              }), /*#__PURE__*/_jsxs("label", {
                htmlFor: "photo",
                className: "cursor-pointer",
                children: [/*#__PURE__*/_jsx(Upload, {
                  className: "w-12 h-12 text-gray-400 mx-auto mb-3"
                }), /*#__PURE__*/_jsx("p", {
                  className: "font-medium text-gray-700 mb-1",
                  children: formData.image ? formData.image.name : 'Click to upload photo'
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-sm text-gray-500",
                  children: "PNG, JPG up to 10MB"
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold text-blue-900 mb-2",
              children: "What happens next?"
            }), /*#__PURE__*/_jsxs("ul", {
              className: "text-sm text-blue-800 space-y-1",
              children: [/*#__PURE__*/_jsx("li", {
                children: "\u2022 Your report will be reviewed by our team"
              }), /*#__PURE__*/_jsx("li", {
                children: "\u2022 You'll receive updates on the progress"
              }), /*#__PURE__*/_jsx("li", {
                children: "\u2022 Expected resolution time: 3-7 business days"
              })]
            })]
          }), /*#__PURE__*/_jsx(Button, {
            type: "submit",
            className: "w-full h-14 text-lg font-bold bg-gradient-to-r from-[#FF6B35] to-[#ff8c5f]",
            children: "Submit Report"
          })]
        })
      })
    })]
  });
}
