// src/components/department/HODPanel.jsx
import React, { useState } from "react";
import { departmentData } from "../../data/departmentData";

const HODPanel = () => {
  const [hodData, setHodData] = useState(departmentData.hodPanel);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionType, setActionType] = useState("");

  const { currentHod, departmentStats, pendingRequests, recentActivities } =
    hodData;

  const handleRequestAction = (requestId, action) => {
    setHodData((prev) => ({
      ...prev,
      pendingRequests: prev.pendingRequests.filter(
        (req) => req.id !== requestId
      ),
      recentActivities: [
        {
          id: prev.recentActivities.length + 1,
          action: `${action}_request`,
          details: `Request ${action}ed - ${
            prev.pendingRequests.find((req) => req.id === requestId)?.details
          }`,
          timestamp: new Date().toLocaleString(),
          user: currentHod.name,
        },
        ...prev.recentActivities,
      ],
    }));
    setShowActionModal(false);
    setSelectedRequest(null);
  };

  const getRequestTypeBadge = (type) => {
    const styles = {
      leave_application: "bg-blue-100 text-blue-800",
      budget_approval: "bg-green-100 text-green-800",
      course_addition: "bg-purple-100 text-purple-800",
    };
    const labels = {
      leave_application: "Leave",
      budget_approval: "Budget",
      course_addition: "Course",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[type]}`}
      >
        {labels[type]}
      </span>
    );
  };

  const getActionBadge = (action) => {
    const styles = {
      course_approved: "bg-green-100 text-green-800",
      faculty_joined: "bg-blue-100 text-blue-800",
      budget_allocated: "bg-purple-100 text-purple-800",
    };
    const labels = {
      course_approved: "Course Approved",
      faculty_joined: "Faculty Joined",
      budget_allocated: "Budget Allocated",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[action]}`}
      >
        {labels[action]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🧑‍💼</span>
                <h1 className="text-2xl font-bold text-gray-900">HOD Panel</h1>
              </div>
              <p className="text-gray-600">
                Head of Department Management Dashboard
              </p>
            </div>
            <div className="text-sm text-gray-600">
              Logged in as:{" "}
              <span className="font-semibold">{currentHod.name}</span>
            </div>
          </div>
        </div>

        {/* HOD Profile & Department Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* HOD Profile */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentHod.name}
                </h3>
                <p className="text-sm text-gray-600">Head of Department</p>
                <p className="text-sm text-gray-600">{currentHod.department}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{currentHod.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{currentHod.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Join Date:</span>
                <span className="font-medium">
                  {new Date(currentHod.joinDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Qualification:</span>
                <span className="font-medium">{currentHod.qualification}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Specialization:</span>
                <span className="font-medium">{currentHod.specialization}</span>
              </div>
            </div>
          </div>

          {/* Department Stats */}
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Department Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {departmentStats.faculty}
                </div>
                <div className="text-sm text-blue-800">Faculty</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {departmentStats.students}
                </div>
                <div className="text-sm text-green-800">Students</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {departmentStats.courses}
                </div>
                <div className="text-sm text-purple-800">Courses</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {departmentStats.pendingRequests}
                </div>
                <div className="text-sm text-orange-800">Pending</div>
              </div>
            </div>

            {/* Budget Utilization */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Budget Utilization
                </span>
                <span className="text-sm text-gray-600">
                  {departmentStats.budgetUtilization}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${departmentStats.budgetUtilization}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Requests & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Requests */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Pending Requests
                </h3>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  {pendingRequests.length} pending
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {getRequestTypeBadge(request.type)}
                        <span className="text-sm font-medium text-gray-900">
                          {request.faculty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{request.details}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(request.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => {
                          setSelectedRequest(request);
                          setActionType("approve");
                          setShowActionModal(true);
                        }}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-md hover:bg-green-200"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          setSelectedRequest(request);
                          setActionType("reject");
                          setShowActionModal(true);
                        }}
                        className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-md hover:bg-red-200"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
                {pendingRequests.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <span className="text-2xl">✅</span>
                    <p className="mt-2">No pending requests</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activities
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">📝</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getActionBadge(activity.action)}
                        <span className="text-xs text-gray-500">
                          {activity.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-900">
                        {activity.details}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        By: {activity.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
                <span className="text-2xl block mb-2">📊</span>
                <span className="text-sm font-medium text-gray-900">
                  Department Report
                </span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
                <span className="text-2xl block mb-2">👥</span>
                <span className="text-sm font-medium text-gray-900">
                  Faculty Meeting
                </span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
                <span className="text-2xl block mb-2">💰</span>
                <span className="text-sm font-medium text-gray-900">
                  Budget Planning
                </span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
                <span className="text-2xl block mb-2">📚</span>
                <span className="text-sm font-medium text-gray-900">
                  Curriculum Review
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Confirmation Modal */}
        {showActionModal && selectedRequest && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {actionType === "approve"
                    ? "Approve Request"
                    : "Reject Request"}
                </h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Faculty
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedRequest.faculty}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Request Type
                    </label>
                    <p className="mt-1">
                      {getRequestTypeBadge(selectedRequest.type)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Details
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedRequest.details}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Are you sure you want to {actionType} this request?
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowActionModal(false);
                      setSelectedRequest(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      handleRequestAction(selectedRequest.id, actionType)
                    }
                    className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      actionType === "approve"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {actionType === "approve" ? "Approve" : "Reject"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HODPanel;
