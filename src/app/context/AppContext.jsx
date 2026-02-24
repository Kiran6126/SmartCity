import React, { createContext, useContext, useState, useEffect } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
const AppContext = /*#__PURE__*/createContext(undefined);
export const AppProvider = ({
  children
}) => {
  const [userRole, setUserRole] = useState(null);
  const [reports, setReports] = useState([{
    id: '1',
    issueType: 'Road Maintenance',
    description: 'Pothole on Main Street causing traffic issues',
    location: 'Main Street, Downtown',
    status: 'in-progress',
    date: '2026-02-20',
    citizenName: 'John Smith',
    adminResponse: 'We are working on fixing this issue. Expected completion by Feb 25.'
  }, {
    id: '2',
    issueType: 'Street Light',
    description: 'Street light not working near Central Park',
    location: 'Central Park Avenue',
    status: 'pending',
    date: '2026-02-21',
    citizenName: 'Sarah Johnson',
    adminResponse: null
  }, {
    id: '3',
    issueType: 'Water Supply',
    description: 'Low water pressure in residential area',
    location: 'Oak Street, Sector 5',
    status: 'resolved',
    date: '2026-02-18',
    citizenName: 'Michael Brown',
    adminResponse: 'Issue has been resolved. Water pressure is now back to normal.'
  }]);
  
  const [feedback, setFeedback] = useState(() => {
    const stored = localStorage.getItem('citiFeedback');
    return stored ? JSON.parse(stored) : [];
  });

  const [services, setServices] = useState(() => {
    const sessionServices = sessionStorage.getItem('cityServices');
    return sessionServices ? JSON.parse(sessionServices) : [];
  });

  // Persist feedback to localStorage
  useEffect(() => {
    localStorage.setItem('citiFeedback', JSON.stringify(feedback));
  }, [feedback]);

  // Persist services to sessionStorage
  useEffect(() => {
    if (services.length > 0) {
      sessionStorage.setItem('cityServices', JSON.stringify(services));
    }
  }, [services]);

  const addReport = report => {
    const newReport = {
      ...report,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
      adminResponse: null
    };
    setReports([newReport, ...reports]);
  };

  const updateReportStatus = (id, status) => {
    setReports(reports.map(report => report.id === id ? {
      ...report,
      status
    } : report));
  };

  const addAdminResponse = (id, response) => {
    setReports(reports.map(report => report.id === id ? {
      ...report,
      adminResponse: response
    } : report));
  };

  const addFeedback = feedbackItem => {
    const newFeedback = {
      ...feedbackItem,
      id: feedbackItem.id || Date.now().toString()
    };
    setFeedback([newFeedback, ...feedback]);
  };

  const updateServices = (updatedServices) => {
    setServices(updatedServices);
  };

  return /*#__PURE__*/_jsx(AppContext.Provider, {
    value: {
      userRole,
      setUserRole,
      reports,
      addReport,
      updateReportStatus,
      addAdminResponse,
      feedback,
      addFeedback,
      services,
      updateServices
    },
    children: children
  });
};
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
