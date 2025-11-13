// src/components/admission/AdmissionDashboard.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { admissionData } from "../../data/admissionData";

const AdmissionDashboard = () => {
  const location = useLocation();
  const { admissionStats } = admissionData;

  const navigation = [
    {
      name: "Admission Dashboard",
      href: "/admission/dashboard",
      icon: "📊",
      description: "Overview of admission process",
    },
    {
      name: "Admission Setup",
      href: "/admission/setup",
      icon: "⚙️",
      description: "Configure admission settings",
    },
    {
      name: "Courses & Intake",
      href: "/admission/courses",
      icon: "📘",
      description: "Manage courses and intake",
    },
    {
      name: "Applications List",
      href: "/admission/applications",
      icon: "📋",
      description: "View all applications",
    },
    {
      name: "Document Verification",
      href: "/admission/verification",
      icon: "📁",
      description: "Verify applicant documents",
    },
    {
      name: "Offer Letters",
      href: "/admission/offers",
      icon: "📨",
      description: "Manage offer letters",
    },
    {
      name: "Fee Payment",
      href: "/admission/payments",
      icon: "💳",
      description: "Payment tracking",
    },
    {
      name: "Enrollment",
      href: "/admission/enrollment",
      icon: "🎓",
      description: "Student enrollment",
    },
    {
      name: "Admission Reports",
      href: "/admission/reports",
      icon: "📈",
      description: "Reports and analytics",
    },
  ];

  const stats = [
    {
      label: "Total Applications",
      value: admissionStats.totalApplications,
      change: "+124",
      icon: "📋",
      color: "blue",
    },
    {
      label: "Pending Verification",
      value: admissionStats.pendingVerification,
      change: "+23",
      icon: "⏳",
      color: "yellow",
    },
    {
      label: "Approved",
      value: admissionStats.approved,
      change: "+45",
      icon: "✅",
      color: "green",
    },
    {
      label: "Enrolled",
      value: admissionStats.enrolled,
      change: "+12",
      icon: "🎓",
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Admission Management
          </h1>
          <p className="mt-2 text-gray-600">
            Manage the complete student admission lifecycle
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div
                  className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <span className="ml-2 text-sm text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`block p-6 bg-white rounded-lg shadow-md border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                  isActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-transparent hover:border-blue-300"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Applications
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {admissionData.applications.slice(0, 5).map((app) => (
                  <div
                    key={app.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {app.studentName}
                      </p>
                      <p className="text-sm text-gray-600">{app.course}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        app.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : app.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : app.status === "under_review"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {app.status.replace("_", " ")}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/admission/applications"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All Applications →
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/admission/verification"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">📁</span>
                  <span className="text-sm font-medium text-gray-900">
                    Verify Documents
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    {admissionStats.pendingVerification} pending
                  </span>
                </Link>
                <Link
                  to="/admission/offers"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">📨</span>
                  <span className="text-sm font-medium text-gray-900">
                    Send Offers
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    {admissionStats.approved} ready
                  </span>
                </Link>
                <Link
                  to="/admission/enrollment"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">🎓</span>
                  <span className="text-sm font-medium text-gray-900">
                    Enroll Students
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    {
                      admissionData.offers.filter(
                        (o) => o.acceptanceStatus === "accepted"
                      ).length
                    }{" "}
                    waiting
                  </span>
                </Link>
                <Link
                  to="/admission/reports"
                  className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl block mb-2">📈</span>
                  <span className="text-sm font-medium text-gray-900">
                    Generate Reports
                  </span>
                  <span className="text-xs text-gray-600 block mt-1">
                    Analytics & insights
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDashboard;
