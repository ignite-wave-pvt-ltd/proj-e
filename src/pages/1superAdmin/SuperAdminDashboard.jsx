import React, { useState, useEffect } from "react";

const SuperAdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    institutionalStats: {},
    recentActivities: [],
    systemAlerts: [],
    pendingApprovals: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setDashboardData({
        institutionalStats: {
          totalColleges: 15,
          totalStudents: 25430,
          totalFaculty: 1850,
          totalDepartments: 127,
          activeCourses: 89,
          annualBudget: "₹245.6 Cr",
          placementRate: "87.5%",
        },
        recentActivities: [
          {
            id: 1,
            action: "New college registration - ABC Engineering",
            user: "System Admin",
            timestamp: "2024-01-15 14:30:00",
            type: "registration",
          },
          {
            id: 2,
            action: "Faculty appointment approved - Dr. Sharma",
            user: "HR Department",
            timestamp: "2024-01-15 13:15:00",
            type: "approval",
          },
          {
            id: 3,
            action: "Infrastructure upgrade completed",
            user: "IT Department",
            timestamp: "2024-01-15 11:45:00",
            type: "maintenance",
          },
          {
            id: 4,
            action: "Quarterly financial report generated",
            user: "Finance Team",
            timestamp: "2024-01-15 10:20:00",
            type: "report",
          },
        ],
        systemAlerts: [
          {
            id: 1,
            title: "Database Backup Required",
            severity: "medium",
            message: "Scheduled backup pending for 2 days",
            timestamp: "2 hours ago",
          },
          {
            id: 2,
            title: "High Server Load",
            severity: "high",
            message: "CPU usage at 85% on main server",
            timestamp: "1 hour ago",
          },
        ],
        pendingApprovals: 23,
      });
      setLoading(false);
    }, 1000);
  }, []);

  const QuickActionCard = ({ title, description, icon, action, bgColor }) => (
    <div
      className={`${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
        Take Action
      </button>
    </div>
  );

  const StatCard = ({ title, value, change, icon, color }) => (
    <div
      className="bg-white rounded-xl p-6 shadow-lg border-l-4"
      style={{ borderLeftColor: color }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
          {change && (
            <p
              className={`text-sm mt-1 ${
                change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {change} from last month
            </p>
          )}
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Super Admin Dashboard</h1>
        <p className="text-blue-100">
          Institutional Overview & System Monitoring
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
            <span className="font-semibold">Last Login:</span> Today, 09:42 AM
          </div>
          <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
            <span className="font-semibold">Role:</span> Vice Chancellor
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Colleges"
          value={dashboardData.institutionalStats.totalColleges}
          change="+2"
          icon="🏫"
          color="#3B82F6"
        />
        <StatCard
          title="Total Students"
          value={dashboardData.institutionalStats.totalStudents?.toLocaleString()}
          change="+1,234"
          icon="🎓"
          color="#10B981"
        />
        <StatCard
          title="Faculty Members"
          value={dashboardData.institutionalStats.totalFaculty?.toLocaleString()}
          change="+45"
          icon="👩‍🏫"
          color="#8B5CF6"
        />
        <StatCard
          title="Pending Approvals"
          value={dashboardData.pendingApprovals}
          change="+5"
          icon="📋"
          color="#F59E0B"
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Annual Budget"
          value={dashboardData.institutionalStats.annualBudget}
          icon="💰"
          color="#059669"
        />
        <StatCard
          title="Placement Rate"
          value={dashboardData.institutionalStats.placementRate}
          change="+2.3%"
          icon="💼"
          color="#DC2626"
        />
        <StatCard
          title="Active Courses"
          value={dashboardData.institutionalStats.activeCourses}
          change="+3"
          icon="📚"
          color="#7C3AED"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickActionCard
            title="College Management"
            description="Add new colleges or manage existing institutions"
            icon="🏫"
            bgColor="bg-blue-50"
          />
          <QuickActionCard
            title="Faculty Oversight"
            description="Review faculty appointments and performance"
            icon="👩‍🏫"
            bgColor="bg-green-50"
          />
          <QuickActionCard
            title="Financial Reports"
            description="Generate institutional financial reports"
            icon="📊"
            bgColor="bg-purple-50"
          />
          <QuickActionCard
            title="System Config"
            description="Configure system settings and permissions"
            icon="⚙️"
            bgColor="bg-orange-50"
          />
        </div>
      </div>

      {/* Recent Activities & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {dashboardData.recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-3 h-3 mt-2 rounded-full ${
                    activity.type === "registration"
                      ? "bg-blue-500"
                      : activity.type === "approval"
                      ? "bg-green-500"
                      : activity.type === "maintenance"
                      ? "bg-purple-500"
                      : "bg-orange-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{activity.action}</p>
                  <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                    <span>By: {activity.user}</span>
                    <span>•</span>
                    <span>{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            System Alerts
          </h2>
          <div className="space-y-4">
            {dashboardData.systemAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === "high"
                    ? "bg-red-50 border-red-500"
                    : "bg-yellow-50 border-yellow-500"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3
                    className={`font-semibold ${
                      alert.severity === "high"
                        ? "text-red-800"
                        : "text-yellow-800"
                    }`}
                  >
                    {alert.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {alert.timestamp}
                  </span>
                </div>
                <p
                  className={`mt-1 text-sm ${
                    alert.severity === "high"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {alert.message}
                </p>
                <button
                  className={`mt-3 px-3 py-1 text-sm rounded ${
                    alert.severity === "high"
                      ? "bg-red-100 text-red-700 hover:bg-red-200"
                      : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  }`}
                >
                  Resolve
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Institutional Performance */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Institutional Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">A+</div>
            <div className="text-sm text-gray-600 mt-2">Overall Grade</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-green-600">94%</div>
            <div className="text-sm text-gray-600 mt-2">
              Student Satisfaction
            </div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">87%</div>
            <div className="text-sm text-gray-600 mt-2">Faculty Retention</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
