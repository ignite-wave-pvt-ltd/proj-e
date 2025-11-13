// src/components/admission/OfferLetters.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const OfferLetters = () => {
  const [offers, setOffers] = useState(admissionData.offers);
  const [showForm, setShowForm] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [formData, setFormData] = useState({
    applicationId: "",
    studentName: "",
    course: "",
    feeAmount: "",
    scholarship: "",
    expiryDate: "",
  });

  const approvedApplications = admissionData.applications.filter(
    (app) =>
      app.status === "approved" &&
      !offers.find((offer) => offer.applicationId === app.applicationId)
  );

  const filteredOffers = offers
    .filter(
      (offer) =>
        offer.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.applicationId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.offerId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (offer) =>
        statusFilter === "all" || offer.acceptanceStatus === statusFilter
    );

  const handleCreateOffer = (application) => {
    setFormData({
      applicationId: application.applicationId,
      studentName: application.studentName,
      course: application.course,
      feeAmount: "50000",
      scholarship: "0",
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOffer = {
      id: offers.length + 1,
      ...formData,
      offerId: `OFF${new Date().getFullYear()}${String(
        offers.length + 1
      ).padStart(3, "0")}`,
      offerDate: new Date().toISOString().split("T")[0],
      status: "sent",
      acceptanceStatus: "pending",
      feeAmount: Number(formData.feeAmount),
      scholarship: Number(formData.scholarship),
      finalAmount: Number(formData.feeAmount) - Number(formData.scholarship),
    };
    setOffers((prev) => [...prev, newOffer]);
    setShowForm(false);
    setFormData({
      applicationId: "",
      studentName: "",
      course: "",
      feeAmount: "",
      scholarship: "",
      expiryDate: "",
    });
  };

  const handleSendOffer = (offerId) => {
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === offerId ? { ...offer, status: "sent" } : offer
      )
    );
  };

  const handleResendOffer = (offerId) => {
    // In real application, this would trigger email/SMS
    alert(`Offer letter resent for ${offerId}`);
  };

  const handleStatusChange = (offerId, status) => {
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === offerId ? { ...offer, acceptanceStatus: status } : offer
      )
    );
  };

  const getStatusBadge = (status) => {
    const styles = {
      sent: "bg-blue-100 text-blue-800",
      draft: "bg-gray-100 text-gray-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getAcceptanceBadge = (status) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      expired: "bg-gray-100 text-gray-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const isOfferExpired = (expiryDate) => {
    return new Date(expiryDate) < new Date();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">📨</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Offer Letters
                </h1>
              </div>
              <p className="text-gray-600">
                Manage and track admission offer letters
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Export Offers
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {offers.length}
            </div>
            <div className="text-sm text-gray-600">Total Offers</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {offers.filter((o) => o.acceptanceStatus === "accepted").length}
            </div>
            <div className="text-sm text-gray-600">Accepted</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {offers.filter((o) => o.acceptanceStatus === "pending").length}
            </div>
            <div className="text-sm text-gray-600">Pending Response</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {approvedApplications.length}
            </div>
            <div className="text-sm text-gray-600">Ready for Offers</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search offers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>

          {/* Approved Applications Ready for Offers */}
          {approvedApplications.length > 0 && (
            <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
              <h3 className="text-lg font-medium text-blue-900 mb-3">
                Approved Applications - Ready for Offers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {approvedApplications.map((app) => (
                  <div
                    key={app.id}
                    className="bg-white p-4 rounded-lg border border-blue-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {app.studentName}
                        </h4>
                        <p className="text-sm text-gray-600">{app.course}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Approved
                      </span>
                    </div>
                    <button
                      onClick={() => handleCreateOffer(app)}
                      className="w-full mt-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    >
                      Create Offer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Offers Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Offer Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student & Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Financials
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOffers.map((offer) => {
                  const isExpired = isOfferExpired(offer.expiryDate);
                  const currentStatus = isExpired
                    ? "expired"
                    : offer.acceptanceStatus;

                  return (
                    <tr key={offer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {offer.offerId}
                          </div>
                          <div className="text-sm text-gray-500">
                            App: {offer.applicationId}
                          </div>
                          <div className="text-sm text-gray-500">
                            Sent:{" "}
                            {new Date(offer.offerDate).toLocaleDateString()}
                          </div>
                          <div
                            className={`text-sm ${
                              isExpired ? "text-red-600" : "text-gray-500"
                            }`}
                          >
                            Expires:{" "}
                            {new Date(offer.expiryDate).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {offer.studentName}
                          </div>
                          <div className="text-sm text-gray-600">
                            {offer.course}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span>Fee:</span>
                            <span>₹{offer.feeAmount?.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Scholarship:</span>
                            <span className="text-green-600">
                              -₹{offer.scholarship?.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between font-bold border-t pt-1">
                            <span>Final:</span>
                            <span>₹{offer.finalAmount?.toLocaleString()}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="space-y-2">
                          {getStatusBadge(offer.status)}
                          {getAcceptanceBadge(currentStatus)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => setSelectedOffer(offer)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </button>
                          {offer.status === "draft" && (
                            <button
                              onClick={() => handleSendOffer(offer.id)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Send
                            </button>
                          )}
                          {offer.status === "sent" &&
                            currentStatus === "pending" &&
                            !isExpired && (
                              <button
                                onClick={() => handleResendOffer(offer.id)}
                                className="text-orange-600 hover:text-orange-900"
                              >
                                Resend
                              </button>
                            )}
                          {offer.status === "sent" &&
                            currentStatus === "pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    handleStatusChange(offer.id, "accepted")
                                  }
                                  className="text-green-600 hover:text-green-900"
                                >
                                  Accept
                                </button>
                                <button
                                  onClick={() =>
                                    handleStatusChange(offer.id, "rejected")
                                  }
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredOffers.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">📨</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No offers found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "No offer letters have been created yet."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Create Offer Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Create Offer Letter
                  </h3>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setFormData({
                        applicationId: "",
                        studentName: "",
                        course: "",
                        feeAmount: "",
                        scholarship: "",
                        expiryDate: "",
                      });
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Application ID
                      </label>
                      <input
                        type="text"
                        value={formData.applicationId}
                        disabled
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Student Name
                      </label>
                      <input
                        type="text"
                        value={formData.studentName}
                        disabled
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course
                      </label>
                      <input
                        type="text"
                        value={formData.course}
                        disabled
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Fee Amount (₹)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.feeAmount}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            feeAmount: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Scholarship (₹)
                      </label>
                      <input
                        type="number"
                        value={formData.scholarship}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            scholarship: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            expiryDate: e.target.value,
                          }))
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Offer Summary
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span>Fee Amount:</span>
                        <span>₹{formData.feeAmount || "0"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scholarship:</span>
                        <span className="text-green-600">
                          -₹{formData.scholarship || "0"}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-2 col-span-2">
                        <span>Final Amount:</span>
                        <span>
                          ₹
                          {(
                            Number(formData.feeAmount || 0) -
                            Number(formData.scholarship || 0)
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Create Offer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Offer Details Modal */}
        {selectedOffer && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Offer Letter Details
                  </h3>
                  <button
                    onClick={() => setSelectedOffer(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Offer ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedOffer.offerId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Application ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedOffer.applicationId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Student Name
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedOffer.studentName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedOffer.course}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Offer Date
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {new Date(selectedOffer.offerDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Expiry Date
                      </label>
                      <p
                        className={`mt-1 text-sm ${
                          isOfferExpired(selectedOffer.expiryDate)
                            ? "text-red-600"
                            : "text-gray-900"
                        }`}
                      >
                        {new Date(
                          selectedOffer.expiryDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Financial Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tuition Fee:</span>
                        <span>
                          ₹{selectedOffer.feeAmount?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scholarship:</span>
                        <span className="text-green-600">
                          -₹{selectedOffer.scholarship?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-2">
                        <span>Total Amount:</span>
                        <span>
                          ₹{selectedOffer.finalAmount?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Status</h4>
                    <div className="flex space-x-2">
                      {getStatusBadge(selectedOffer.status)}
                      {getAcceptanceBadge(
                        isOfferExpired(selectedOffer.expiryDate)
                          ? "expired"
                          : selectedOffer.acceptanceStatus
                      )}
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

export default OfferLetters;
