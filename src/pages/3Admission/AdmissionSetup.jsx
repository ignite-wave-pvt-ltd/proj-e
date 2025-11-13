// src/components/admission/AdmissionSetup.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const AdmissionSetup = () => {
  const [setup, setSetup] = useState(admissionData.admissionSetup);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setSetup((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // In real application, this would be an API call
    console.log("Saving admission setup:", setup);
    setIsEditing(false);
    alert("Admission setup updated successfully!");
  };

  const handleToggleAdmission = () => {
    const newStatus = setup.status === "active" ? "inactive" : "active";
    setSetup((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">⚙️</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Admission Setup
                </h1>
              </div>
              <p className="text-gray-600">
                Configure admission process settings and parameters
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                {isEditing ? "Cancel" : "Edit Settings"}
              </button>
              {isEditing && (
                <button
                  onClick={handleSave}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Admission Status
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Current admission cycle is
                </p>
                <p
                  className={`text-lg font-semibold ${
                    setup.status === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {setup.status === "active" ? "Active" : "Inactive"}
                </p>
              </div>
              <button
                onClick={handleToggleAdmission}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  setup.status === "active"
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {setup.status === "active"
                  ? "Close Admissions"
                  : "Open Admissions"}
              </button>
            </div>
          </div>
        </div>

        {/* Configuration Form */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Admission Configuration
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Academic Year & Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    value={setup.academicYear}
                    onChange={(e) =>
                      handleInputChange("academicYear", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={setup.applicationFee}
                    onChange={(e) =>
                      handleInputChange("applicationFee", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admission Start Date
                  </label>
                  <input
                    type="date"
                    value={setup.admissionStartDate}
                    onChange={(e) =>
                      handleInputChange("admissionStartDate", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admission End Date
                  </label>
                  <input
                    type="date"
                    value={setup.admissionEndDate}
                    onChange={(e) =>
                      handleInputChange("admissionEndDate", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  />
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      Maximum Applications per Student
                    </p>
                    <p className="text-sm text-gray-600">
                      Limit number of courses a student can apply for
                    </p>
                  </div>
                  <input
                    type="number"
                    value={setup.maxApplicationsPerStudent}
                    onChange={(e) =>
                      handleInputChange(
                        "maxApplicationsPerStudent",
                        e.target.value
                      )
                    }
                    disabled={!isEditing}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    min="1"
                    max="10"
                  />
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      Require Document Upload
                    </p>
                    <p className="text-sm text-gray-600">
                      Students must upload required documents
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={setup.requireDocuments}
                      onChange={(e) =>
                        handleInputChange("requireDocuments", e.target.checked)
                      }
                      disabled={!isEditing}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      Auto Document Verification
                    </p>
                    <p className="text-sm text-gray-600">
                      Automatically verify documents (AI-based)
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={setup.autoVerification}
                      onChange={(e) =>
                        handleInputChange("autoVerification", e.target.checked)
                      }
                      disabled={!isEditing}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Current Status Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Current Configuration Summary
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Academic Year:</span>
                    <span className="ml-2 font-medium">
                      {setup.academicYear}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Application Fee:</span>
                    <span className="ml-2 font-medium">
                      ₹{setup.applicationFee}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Admission Period:</span>
                    <span className="ml-2 font-medium">
                      {new Date(setup.admissionStartDate).toLocaleDateString()}{" "}
                      - {new Date(setup.admissionEndDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Max Applications:</span>
                    <span className="ml-2 font-medium">
                      {setup.maxApplicationsPerStudent}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSetup;
