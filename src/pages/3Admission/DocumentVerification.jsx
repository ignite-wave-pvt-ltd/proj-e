// src/components/admission/DocumentVerification.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const DocumentVerification = () => {
  const [pendingVerification, setPendingVerification] = useState(
    admissionData.pendingVerification
  );
  const [selectedApp, setSelectedApp] = useState(null);

  const handleDocumentVerification = (appId, docName, status) => {
    setPendingVerification((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          const updatedDocuments = app.documents.map((doc) =>
            doc.name === docName
              ? { ...doc, status, verifiedBy: "Current User" }
              : doc
          );

          // If all documents are verified, move to next status
          const allVerified = updatedDocuments.every(
            (doc) => doc.status === "verified"
          );

          return {
            ...app,
            documents: updatedDocuments,
            status: allVerified ? "verified" : app.status,
          };
        }
        return app;
      })
    );
  };

  const handleBulkVerify = (appId) => {
    setPendingVerification((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          const updatedDocuments = app.documents.map((doc) => ({
            ...doc,
            status: "verified",
            verifiedBy: "Current User",
          }));
          return {
            ...app,
            documents: updatedDocuments,
            status: "verified",
          };
        }
        return app;
      })
    );
  };

  const getDocumentBadge = (status) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      verified: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getOverallStatus = (documents) => {
    if (documents.every((doc) => doc.status === "verified")) return "verified";
    if (documents.some((doc) => doc.status === "rejected")) return "rejected";
    if (documents.some((doc) => doc.status === "verified"))
      return "partially_verified";
    return "pending";
  };

  const getOverallStatusBadge = (documents) => {
    const status = getOverallStatus(documents);
    const styles = {
      verified: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      partially_verified: "bg-blue-100 text-blue-800",
      pending: "bg-yellow-100 text-yellow-800",
    };
    const labels = {
      verified: "Verified",
      rejected: "Rejected",
      partially_verified: "Partially Verified",
      pending: "Pending",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {labels[status]}
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
                <span className="text-2xl mr-3">📁</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Document Verification
                </h1>
              </div>
              <p className="text-gray-600">
                Verify and validate applicant documents
              </p>
            </div>
            <div className="text-sm text-gray-600">
              {pendingVerification.length} applications pending verification
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {pendingVerification.length}
            </div>
            <div className="text-sm text-gray-600">Pending Verification</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {
                pendingVerification.filter(
                  (app) =>
                    getOverallStatus(app.documents) === "partially_verified"
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">Partially Verified</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {
                pendingVerification.filter(
                  (app) => getOverallStatus(app.documents) === "verified"
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">Fully Verified</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {pendingVerification.reduce(
                (total, app) => total + app.documents.length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Total Documents</div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pendingVerification.map((application) => (
            <div key={application.id} className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {application.studentName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {application.course}
                    </p>
                    <p className="text-xs text-gray-500">
                      Applied:{" "}
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {application.applicationId}
                    </div>
                    {getOverallStatusBadge(application.documents)}
                  </div>
                </div>

                {/* Documents List */}
                <div className="space-y-3 mb-4">
                  <h4 className="font-medium text-gray-900">Documents</h4>
                  {application.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center">
                        <span className="text-lg mr-3">📄</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {doc.name}
                          </div>
                          {doc.verifiedBy && (
                            <div className="text-xs text-gray-500">
                              By: {doc.verifiedBy}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getDocumentBadge(doc.status)}
                        {doc.status === "pending" && (
                          <div className="flex space-x-1">
                            <button
                              onClick={() =>
                                handleDocumentVerification(
                                  application.id,
                                  doc.name,
                                  "verified"
                                )
                              }
                              className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
                            >
                              Verify
                            </button>
                            <button
                              onClick={() =>
                                handleDocumentVerification(
                                  application.id,
                                  doc.name,
                                  "rejected"
                                )
                              }
                              className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedApp(application)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Details
                  </button>
                  {getOverallStatus(application.documents) !== "verified" && (
                    <button
                      onClick={() => handleBulkVerify(application.id)}
                      className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
                    >
                      Verify All
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {pendingVerification.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <span className="text-4xl">✅</span>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              All documents verified!
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              No pending document verification tasks.
            </p>
          </div>
        )}

        {/* Document Detail Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Document Details
                  </h3>
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Application Information
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Student:</span>
                        <span className="ml-2 font-medium">
                          {selectedApp.studentName}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Application ID:</span>
                        <span className="ml-2 font-medium">
                          {selectedApp.applicationId}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Course:</span>
                        <span className="ml-2 font-medium">
                          {selectedApp.course}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Applied Date:</span>
                        <span className="ml-2 font-medium">
                          {new Date(
                            selectedApp.appliedDate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Document Status
                    </h4>
                    <div className="space-y-2">
                      {selectedApp.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium">{doc.name}</span>
                          <div className="flex items-center space-x-2">
                            {getDocumentBadge(doc.status)}
                            {doc.verifiedBy && (
                              <span className="text-xs text-gray-500">
                                by {doc.verifiedBy}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentVerification;
