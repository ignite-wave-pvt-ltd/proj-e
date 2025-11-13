// src/components/admission/FeePayment.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const FeePayment = () => {
  const [payments, setPayments] = useState(admissionData.payments);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showRefundModal, setShowRefundModal] = useState(false);

  const pendingPayments = admissionData.offers
    .filter((offer) => offer.acceptanceStatus === "accepted")
    .filter(
      (offer) =>
        !payments.find(
          (payment) => payment.applicationId === offer.applicationId
        )
    )
    .map((offer) => ({
      applicationId: offer.applicationId,
      studentName: offer.studentName,
      course: offer.course,
      amount: offer.finalAmount,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    }));

  const filteredPayments = payments
    .filter(
      (payment) =>
        payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.applicationId
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        payment.paymentId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (payment) => statusFilter === "all" || payment.status === statusFilter
    );

  const handleMarkAsPaid = (applicationId, amount) => {
    const newPayment = {
      id: payments.length + 1,
      applicationId,
      studentName: pendingPayments.find(
        (p) => p.applicationId === applicationId
      )?.studentName,
      course: pendingPayments.find((p) => p.applicationId === applicationId)
        ?.course,
      paymentId: `PAY${new Date().getFullYear()}${String(
        payments.length + 1
      ).padStart(3, "0")}`,
      amount,
      paymentDate: new Date().toISOString().split("T")[0],
      status: "completed",
      paymentMethod: "manual",
    };
    setPayments((prev) => [...prev, newPayment]);
  };

  const handleRefund = (paymentId) => {
    setPayments((prev) =>
      prev.map((payment) =>
        payment.id === paymentId ? { ...payment, status: "refunded" } : payment
      )
    );
    setShowRefundModal(false);
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
      refunded: "bg-purple-100 text-purple-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getPaymentMethodBadge = (method) => {
    const methods = {
      credit_card: "Credit Card",
      debit_card: "Debit Card",
      net_banking: "Net Banking",
      upi: "UPI",
      manual: "Manual",
    };
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        {methods[method] || method}
      </span>
    );
  };

  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">💳</span>
                <h1 className="text-2xl font-bold text-gray-900">
                  Fee Payment
                </h1>
              </div>
              <p className="text-gray-600">
                Manage and track student fee payments
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Export Payments
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              {payments.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {pendingPayments.length}
            </div>
            <div className="text-sm text-gray-600">Pending Payments</div>
          </div>
        </div>

        {/* Pending Payments Section */}
        {pendingPayments.length > 0 && (
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-yellow-50">
              <h3 className="text-lg font-medium text-yellow-900">
                Pending Payments
              </h3>
              <p className="text-sm text-yellow-700">
                Students who have accepted offers but haven't paid yet
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pendingPayments.map((payment, index) => (
                  <div
                    key={index}
                    className="border border-yellow-200 rounded-lg p-4 bg-yellow-50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {payment.studentName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {payment.course}
                        </p>
                        <p className="text-xs text-gray-500">
                          App: {payment.applicationId}
                        </p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Pending
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Amount:</span>
                      <span className="font-semibold">
                        ₹{payment.amount?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Due Date:</span>
                      <span className="text-sm text-red-600">
                        {new Date(payment.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handleMarkAsPaid(payment.applicationId, payment.amount)
                      }
                      className="w-full px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
                    >
                      Mark as Paid
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search payments..."
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
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
          </div>

          {/* Payments Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Payment Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student & Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount & Method
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
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {payment.paymentId}
                        </div>
                        <div className="text-sm text-gray-500">
                          App: {payment.applicationId}
                        </div>
                        <div className="text-sm text-gray-500">
                          Date:{" "}
                          {new Date(payment.paymentDate).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {payment.studentName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {payment.course}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          ₹{payment.amount?.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          {getPaymentMethodBadge(payment.paymentMethod)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(payment.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setSelectedPayment(payment)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </button>
                        {payment.status === "completed" && (
                          <button
                            onClick={() => setShowRefundModal(payment.id)}
                            className="text-purple-600 hover:text-purple-900"
                          >
                            Refund
                          </button>
                        )}
                        <button className="text-green-600 hover:text-green-900">
                          Receipt
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPayments.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">💳</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No payments found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "No payment records found."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Payment Details Modal */}
        {selectedPayment && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Payment Details
                  </h3>
                  <button
                    onClick={() => setSelectedPayment(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Payment ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedPayment.paymentId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Application ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedPayment.applicationId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Student Name
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedPayment.studentName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedPayment.course}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Amount
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        ₹{selectedPayment.amount?.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Payment Date
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {new Date(
                          selectedPayment.paymentDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Payment Method
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {getPaymentMethodBadge(selectedPayment.paymentMethod)}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <p className="mt-1">
                        {getStatusBadge(selectedPayment.status)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Refund Confirmation Modal */}
        {showRefundModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Confirm Refund
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Are you sure you want to process a refund for this payment?
                  This action cannot be undone.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowRefundModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleRefund(showRefundModal)}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Confirm Refund
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

export default FeePayment;
