// src/components/admission/AdmissionReports.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const AdmissionReports = () => {
  const [selectedReport, setSelectedReport] = useState("overview");
  const [dateRange, setDateRange] = useState("all");
  const [exporting, setExporting] = useState(false);

  const {
    admissionStats,
    applications,
    courses,
    offers,
    payments,
    enrolledStudents,
  } = admissionData;

  // Statistics calculations
  const totalApplications = applications.length;
  const approvedApplications = applications.filter(
    (app) => app.status === "approved"
  ).length;
  const rejectedApplications = applications.filter(
    (app) => app.status === "rejected"
  ).length;
  const pendingApplications = applications.filter(
    (app) => app.status === "submitted" || app.status === "under_review"
  ).length;

  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const conversionRate =
    totalApplications > 0
      ? ((enrolledStudents.length / totalApplications) * 100).toFixed(1)
      : 0;

  // Course-wise statistics
  const courseStats = courses.map((course) => ({
    name: course.name,
    applications: applications.filter((app) => app.course === course.name)
      .length,
    approved: applications.filter(
      (app) => app.course === course.name && app.status === "approved"
    ).length,
    enrolled: enrolledStudents.filter(
      (student) => student.course === course.name
    ).length,
    revenue: payments
      .filter((p) => p.status === "completed")
      .filter((p) => {
        const app = applications.find(
          (a) => a.applicationId === p.applicationId
        );
        return app && app.course === course.name;
      })
      .reduce((sum, payment) => sum + payment.amount, 0),
  }));

  // Monthly trends (simplified)
  const monthlyData = [
    { month: "Jan", applications: 45, enrolled: 12, revenue: 540000 },
    { month: "Feb", applications: 78, enrolled: 23, revenue: 890000 },
    { month: "Mar", applications: 112, enrolled: 45, revenue: 1250000 },
    { month: "Apr", applications: 95, enrolled: 38, revenue: 980000 },
    { month: "May", applications: 134, enrolled: 67, revenue: 1560000 },
    { month: "Jun", applications: 156, enrolled: 89, revenue: 1780000 },
  ];

  const handleExport = async (format) => {
    setExporting(true);
    // Simulate export process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(`Report exported as ${format.toUpperCase()} successfully!`);
    setExporting(false);
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <span className="text-2xl">📋</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Applications
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {totalApplications}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Enrolled Students
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {enrolledStudents.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <span className="text-2xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <span className="text-2xl">📊</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Conversion Rate
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {conversionRate}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Funnel */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Application Funnel
          </h3>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between space-x-4 mb-6">
            {[
              {
                label: "Applied",
                value: totalApplications,
                color: "bg-blue-500",
              },
              {
                label: "Approved",
                value: approvedApplications,
                color: "bg-green-500",
              },
              {
                label: "Offers Sent",
                value: offers.length,
                color: "bg-yellow-500",
              },
              {
                label: "Enrolled",
                value: enrolledStudents.length,
                color: "bg-purple-500",
              },
            ].map((stage, index) => (
              <div key={index} className="flex-1 text-center">
                <div className={`h-3 ${stage.color} rounded-full mb-2`}></div>
                <div className="text-sm font-medium text-gray-900">
                  {stage.value}
                </div>
                <div className="text-xs text-gray-600">{stage.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {totalApplications}
              </div>
              <div className="text-sm text-blue-800">Applications</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {approvedApplications}
              </div>
              <div className="text-sm text-green-800">Approved</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {offers.length}
              </div>
              <div className="text-sm text-yellow-800">Offers Sent</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {enrolledStudents.length}
              </div>
              <div className="text-sm text-purple-800">Enrolled</div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Course Performance
          </h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Applications
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Approved
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Enrolled
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Conversion Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courseStats.map((course, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {course.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.applications}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.approved}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.enrolled}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.applications > 0
                        ? (
                            (course.enrolled / course.applications) *
                            100
                          ).toFixed(1)
                        : 0}
                      %
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{course.revenue.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancial = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            ₹{totalRevenue.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Revenue</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {payments.length}
          </div>
          <div className="text-sm text-gray-600">Total Payments</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            ₹{(totalRevenue / (payments.length || 1)).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Average Payment</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Payment Methods
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                method: "Credit Card",
                count: payments.filter((p) => p.paymentMethod === "credit_card")
                  .length,
                color: "bg-blue-500",
              },
              {
                method: "Debit Card",
                count: payments.filter((p) => p.paymentMethod === "debit_card")
                  .length,
                color: "bg-green-500",
              },
              {
                method: "Net Banking",
                count: payments.filter((p) => p.paymentMethod === "net_banking")
                  .length,
                color: "bg-yellow-500",
              },
              {
                method: "Manual",
                count: payments.filter((p) => p.paymentMethod === "manual")
                  .length,
                color: "bg-purple-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 border border-gray-200 rounded-lg"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                >
                  <span className="text-white text-lg">💳</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {item.count}
                </div>
                <div className="text-sm text-gray-600">{item.method}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMonthly = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Monthly Trends
          </h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Applications
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Enrolled
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Conversion Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {monthlyData.map((month, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {month.month}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {month.applications}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {month.enrolled}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {month.applications > 0
                        ? ((month.enrolled / month.applications) * 100).toFixed(
                            1
                          )
                        : 0}
                      %
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{month.revenue.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">📈</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Admission Reports
                </h1>
              </div>
              <p className="text-gray-600">
                Comprehensive analytics and insights for admission process
              </p>
            </div>
            <div className="flex space-x-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Time</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
              <div className="relative">
                <button
                  onClick={() =>
                    document
                      .getElementById("export-dropdown")
                      .classList.toggle("hidden")
                  }
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Export
                  <svg
                    className="ml-2 -mr-0.5 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id="export-dropdown"
                  className="hidden absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    <button
                      onClick={() => handleExport("pdf")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Export as PDF
                    </button>
                    <button
                      onClick={() => handleExport("excel")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Export as Excel
                    </button>
                    <button
                      onClick={() => handleExport("csv")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Export as CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Navigation */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                { id: "overview", name: "Overview", icon: "📊" },
                { id: "financial", name: "Financial", icon: "💰" },
                { id: "monthly", name: "Monthly Trends", icon: "📅" },
                { id: "course", name: "Course Analysis", icon: "📚" },
                { id: "geographic", name: "Geographic", icon: "🌍" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedReport(tab.id)}
                  className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm ${
                    selectedReport === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Report Content */}
          <div className="p-6">
            {selectedReport === "overview" && renderOverview()}
            {selectedReport === "financial" && renderFinancial()}
            {selectedReport === "monthly" && renderMonthly()}
            {selectedReport === "course" && renderOverview()}{" "}
            {/* Reusing overview for course analysis */}
            {selectedReport === "geographic" && renderOverview()}{" "}
            {/* Reusing overview for geographic */}
          </div>
        </div>

        {/* Export Loading Overlay */}
        {exporting && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-700">Exporting report...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionReports;
