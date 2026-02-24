import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { AlertCircle, CheckCircle, Clock, MapPin, Calendar, User, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ViewReports() {
  const {
    reports,
    updateReportStatus,
    addAdminResponse
  } = useApp();
  const [filterStatus, setFilterStatus] = useState('all');
  const [expandedReport, setExpandedReport] = useState(null);
  const [responseText, setResponseText] = useState({});
  const filteredReports = filterStatus === 'all' ? reports : reports.filter(r => r.status === filterStatus);
  const handleStatusUpdate = (reportId, newStatus) => {
    updateReportStatus(reportId, newStatus);
    toast.success('Report status updated successfully');
  };
  const handleSubmitResponse = (reportId) => {
    if (!responseText[reportId] || responseText[reportId].trim() === '') {
      toast.error('Please enter a response');
      return;
    }
    addAdminResponse(reportId, responseText[reportId]);
    setResponseText({...responseText, [reportId]: ''});
    setExpandedReport(null);
    toast.success('Response sent to citizen successfully');
  };
  const statusConfig = {
    'pending': {
      label: 'Pending',
      color: 'bg-orange-100 text-orange-700',
      icon: AlertCircle
    },
    'in-progress': {
      label: 'In Progress',
      color: 'bg-blue-100 text-blue-700',
      icon: Clock
    },
    'resolved': {
      label: 'Resolved',
      color: 'bg-green-100 text-green-700',
      icon: CheckCircle
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto space-y-6",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-3xl md:text-4xl font-bold mb-2",
            style: {
              fontFamily: 'Poppins, sans-serif'
            },
            children: "Citizen Reports"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600",
            children: "Manage and update report statuses"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "w-full md:w-64",
          children: /*#__PURE__*/_jsxs(Select, {
            value: filterStatus,
            onValueChange: value => setFilterStatus(value),
            children: [/*#__PURE__*/_jsx(SelectTrigger, {
              className: "h-11",
              children: /*#__PURE__*/_jsx(SelectValue, {
                placeholder: "Filter by status"
              })
            }), /*#__PURE__*/_jsxs(SelectContent, {
              children: [/*#__PURE__*/_jsxs(SelectItem, {
                value: "all",
                children: ["All Reports (", reports.length, ")"]
              }), /*#__PURE__*/_jsxs(SelectItem, {
                value: "pending",
                children: ["Pending (", reports.filter(r => r.status === 'pending').length, ")"]
              }), /*#__PURE__*/_jsxs(SelectItem, {
                value: "in-progress",
                children: ["In Progress (", reports.filter(r => r.status === 'in-progress').length, ")"]
              }), /*#__PURE__*/_jsxs(SelectItem, {
                value: "resolved",
                children: ["Resolved (", reports.filter(r => r.status === 'resolved').length, ")"]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-3 gap-4",
        children: [/*#__PURE__*/_jsxs(Card, {
          className: "p-4 bg-orange-50 border-orange-200",
          children: [/*#__PURE__*/_jsx(AlertCircle, {
            className: "w-8 h-8 text-orange-600 mb-2"
          }), /*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-orange-700",
            children: reports.filter(r => r.status === 'pending').length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-orange-600",
            children: "Pending"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4 bg-blue-50 border-blue-200",
          children: [/*#__PURE__*/_jsx(Clock, {
            className: "w-8 h-8 text-blue-600 mb-2"
          }), /*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-blue-700",
            children: reports.filter(r => r.status === 'in-progress').length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-blue-600",
            children: "In Progress"
          })]
        }), /*#__PURE__*/_jsxs(Card, {
          className: "p-4 bg-green-50 border-green-200",
          children: [/*#__PURE__*/_jsx(CheckCircle, {
            className: "w-8 h-8 text-green-600 mb-2"
          }), /*#__PURE__*/_jsx("div", {
            className: "text-2xl font-bold text-green-700",
            children: reports.filter(r => r.status === 'resolved').length
          }), /*#__PURE__*/_jsx("div", {
            className: "text-sm text-green-600",
            children: "Resolved"
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-4",
        children: filteredReports.length === 0 ? /*#__PURE__*/_jsxs(Card, {
          className: "p-12 text-center",
          children: [/*#__PURE__*/_jsx(AlertCircle, {
            className: "w-16 h-16 text-gray-300 mx-auto mb-4"
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-xl font-bold mb-2",
            children: "No Reports Found"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-gray-600",
            children: "No reports match the selected filter"
          })]
        }) : filteredReports.map((report, index) => {
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
              className: "p-6 hover:shadow-lg transition-shadow",
              children: /*#__PURE__*/_jsxs("div", {
                className: "flex flex-col lg:flex-row gap-6",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/_jsxs("div", {
                    className: "flex items-start gap-4 mb-4",
                    children: [/*#__PURE__*/_jsx("div", {
                      className: `w-12 h-12 rounded-lg flex items-center justify-center ${report.status === 'pending' ? 'bg-orange-100' : report.status === 'in-progress' ? 'bg-blue-100' : 'bg-green-100'}`,
                      children: /*#__PURE__*/_jsx(StatusIcon, {
                        className: `w-6 h-6 ${report.status === 'pending' ? 'text-orange-600' : report.status === 'in-progress' ? 'text-blue-600' : 'text-green-600'}`
                      })
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex-1",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "flex items-start justify-between mb-2",
                        children: /*#__PURE__*/_jsxs("div", {
                          children: [/*#__PURE__*/_jsx("h3", {
                            className: "text-xl font-bold mb-1",
                            children: report.issueType
                          }), /*#__PURE__*/_jsx(Badge, {
                            className: config.color,
                            children: config.label
                          })]
                        })
                      }), /*#__PURE__*/_jsx("p", {
                        className: "text-gray-700 mb-4",
                        children: report.description
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "grid md:grid-cols-2 gap-3 text-sm",
                        children: [/*#__PURE__*/_jsxs("div", {
                          className: "flex items-center gap-2 text-gray-600",
                          children: [/*#__PURE__*/_jsx(User, {
                            className: "w-4 h-4 text-[#00C2CB]"
                          }), /*#__PURE__*/_jsx("span", {
                            children: report.citizenName
                          })]
                        }), /*#__PURE__*/_jsxs("div", {
                          className: "flex items-center gap-2 text-gray-600",
                          children: [/*#__PURE__*/_jsx(Calendar, {
                            className: "w-4 h-4 text-[#00C2CB]"
                          }), /*#__PURE__*/_jsx("span", {
                            children: new Date(report.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })
                          })]
                        }), /*#__PURE__*/_jsxs("div", {
                          className: "flex items-center gap-2 text-gray-600 md:col-span-2",
                          children: [/*#__PURE__*/_jsx(MapPin, {
                            className: "w-4 h-4 text-[#00C2CB]"
                          }), /*#__PURE__*/_jsx("span", {
                            children: report.location
                          })]
                        })]
                      })]
                    })]
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  className: "lg:w-64 space-y-3",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("label", {
                      className: "text-sm font-medium text-gray-700 mb-2 block",
                      children: "Update Status"
                    }), /*#__PURE__*/_jsxs(Select, {
                      value: report.status,
                      onValueChange: value => handleStatusUpdate(report.id, value),
                      children: [/*#__PURE__*/_jsx(SelectTrigger, {
                        className: "h-11",
                        children: /*#__PURE__*/_jsx(SelectValue, {})
                      }), /*#__PURE__*/_jsxs(SelectContent, {
                        children: [/*#__PURE__*/_jsx(SelectItem, {
                          value: "pending",
                          children: "Pending Review"
                        }), /*#__PURE__*/_jsx(SelectItem, {
                          value: "in-progress",
                          children: "In Progress"
                        }), /*#__PURE__*/_jsx(SelectItem, {
                          value: "resolved",
                          children: "Resolved"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "pt-3 border-t border-gray-200 space-y-2",
                    children: [/*#__PURE__*/_jsx(Button, {
                      variant: "outline",
                      className: "w-full",
                      size: "sm",
                      onClick: () => setExpandedReport(expandedReport === report.id ? null : report.id),
                      children: /*#__PURE__*/_jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/_jsx(MessageSquare, {
                          className: "w-4 h-4"
                        }), expandedReport === report.id ? "Close Response" : "Send Response"]
                      })
                    }), /*#__PURE__*/_jsx(Button, {
                      variant: "outline",
                      className: "w-full text-[#00C2CB]",
                      size: "sm",
                      children: "View Details"
                    })]
                  }), expandedReport === report.id && /*#__PURE__*/_jsxs("div", {
                    className: "pt-3 mt-3 border-t border-gray-200 space-y-3",
                    children: [report.adminResponse && /*#__PURE__*/_jsxs("div", {
                      className: "bg-green-50 p-3 rounded-lg border border-green-200",
                      children: [/*#__PURE__*/_jsx("p", {
                        className: "text-sm font-semibold text-green-900 mb-1",
                        children: "Admin Response:"
                      }), /*#__PURE__*/_jsx("p", {
                        className: "text-sm text-green-800",
                        children: report.adminResponse
                      })]
                    }), !report.adminResponse && /*#__PURE__*/_jsxs("div", {
                      className: "space-y-2",
                      children: [/*#__PURE__*/_jsx(Textarea, {
                        placeholder: "Enter your response to the citizen...",
                        value: responseText[report.id] || '',
                        onChange: e => setResponseText({...responseText, [report.id]: e.target.value}),
                        className: "min-h-24 text-sm"
                      }), /*#__PURE__*/_jsx(Button, {
                        size: "sm",
                        className: "w-full bg-[#00C2CB] hover:bg-[#00A8B2] text-white",
                        onClick: () => handleSubmitResponse(report.id),
                        children: "Send Response"
                      })]
                    })]
                  })]
                })]
              })
            })
          }, report.id);
        })
      })]
    })]
  });
}
