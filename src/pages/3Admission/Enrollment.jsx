// src/components/admission/Enrollment.jsx
import React, { useState } from "react";
import { admissionData } from "../../data/admissionData";

const Enrollment = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(
    admissionData.enrolledStudents
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  // Students ready for enrollment (accepted offers with completed payments)
  const readyForEnrollment = admissionData.offers
    .filter((offer) => offer.acceptanceStatus === "accepted")
    .filter((offer) =>
      admissionData.payments.find(
        (payment) =>
          payment.applicationId === offer.applicationId &&
          payment.status === "completed"
      )
    )
    .filter(
      (offer) =>
        !enrolledStudents.find(
          (student) => student.applicationId === offer.applicationId
        )
    )
    .map((offer) => {
      const payment = admissionData.payments.find(
        (p) => p.applicationId === offer.applicationId
      );
      return {
        applicationId: offer.applicationId,
        studentName: offer.studentName,
        course: offer.course,
        offerAmount: offer.finalAmount,
        paidAmount: payment.amount,
        paymentDate: payment.paymentDate,
      };
    });

  const filteredEnrollments = enrolledStudents
    .filter(
      (student) =>
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.applicationId
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (student) =>
        statusFilter === "all" || student.enrollmentStatus === statusFilter
    );

  const handleEnrollStudent = (applicationId) => {
    const studentToEnroll = readyForEnrollment.find(
      (s) => s.applicationId === applicationId
    );
    const newStudent = {
      id: enrolledStudents.length + 1,
      applicationId: studentToEnroll.applicationId,
      studentId: `STU${new Date().getFullYear()}${String(
        enrolledStudents.length + 1
      ).padStart(3, "0")}`,
      studentName: studentToEnroll.studentName,
      course: studentToEnroll.course,
      enrollmentDate: new Date().toISOString().split("T")[0],
      enrollmentStatus: "completed",
      feePaid: studentToEnroll.paidAmount,
      totalFee: studentToEnroll.offerAmount,
      paymentStatus: "paid",
    };
    setEnrolledStudents((prev) => [...prev, newStudent]);
    setShowEnrollModal(false);
  };

  const handleBulkEnroll = () => {
    const newEnrollments = readyForEnrollment.map((student, index) => ({
      id: enrolledStudents.length + index + 1,
      applicationId: student.applicationId,
      studentId: `STU${new Date().getFullYear()}${String(
        enrolledStudents.length + index + 1
      ).padStart(3, "0")}`,
      studentName: student.studentName,
      course: student.course,
      enrollmentDate: new Date().toISOString().split("T")[0],
      enrollmentStatus: "completed",
      feePaid: student.paidAmount,
      totalFee: student.offerAmount,
      paymentStatus: "paid",
    }));
    setEnrolledStudents((prev) => [...prev, ...newEnrollments]);
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getPaymentBadge = (status) => {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          status === "paid"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
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
                <span className="text-2xl mr-3">🎓</span>
                <h1 className="text-2xl font-bold text-gray-900">Enrollment</h1>
              </div>
              <p className="text-gray-600">
                Manage student enrollment and generate student IDs
              </p>
            </div>
            {readyForEnrollment.length > 0 && (
              <button
                onClick={handleBulkEnroll}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Bulk Enroll ({readyForEnrollment.length})
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {enrolledStudents.length}
            </div>
            <div className="text-sm text-gray-600">Total Enrolled</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {
                enrolledStudents.filter(
                  (s) => s.enrollmentStatus === "completed"
                ).length
              }
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {readyForEnrollment.length}
            </div>
            <div className="text-sm text-gray-600">Ready for Enrollment</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">
              {
                enrolledStudents.filter((s) => s.paymentStatus === "paid")
                  .length
              }
            </div>
            <div className="text-sm text-gray-600">Fee Paid</div>
          </div>
        </div>

        {/* Ready for Enrollment Section */}
        {readyForEnrollment.length > 0 && (
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-green-50">
              <h3 className="text-lg font-medium text-green-900">
                Ready for Enrollment
              </h3>
              <p className="text-sm text-green-700">
                Students who have accepted offers and completed payment
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {readyForEnrollment.map((student, index) => (
                  <div
                    key={index}
                    className="border border-green-200 rounded-lg p-4 bg-green-50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {student.studentName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {student.course}
                        </p>
                        <p className="text-xs text-gray-500">
                          App: {student.applicationId}
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Ready
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Course Fee:</span>
                        <span>₹{student.offerAmount?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Paid Amount:</span>
                        <span className="text-green-600">
                          ₹{student.paidAmount?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Payment Date:</span>
                        <span>
                          {new Date(student.paymentDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedStudent(student);
                        setShowEnrollModal(true);
                      }}
                      className="w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    >
                      Enroll Student
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
                  placeholder="Search enrolled students..."
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
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Enrolled Students Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Course & Enrollment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Fee Details
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
                {filteredEnrollments.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {student.studentId}
                      </div>
                      <div className="text-sm text-gray-500">
                        App: {student.applicationId}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {student.studentName}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          {student.course}
                        </div>
                        <div className="text-sm text-gray-500">
                          Enrolled:{" "}
                          {new Date(
                            student.enrollmentDate
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Total Fee:</span>
                          <span>₹{student.totalFee?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Paid:</span>
                          <span className="text-green-600">
                            ₹{student.feePaid?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Balance:</span>
                          <span
                            className={
                              student.totalFee - student.feePaid === 0
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            ₹
                            {(
                              student.totalFee - student.feePaid
                            )?.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-2">
                        {getStatusBadge(student.enrollmentStatus)}
                        {getPaymentBadge(student.paymentStatus)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setSelectedStudent(student)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          ID Card
                        </button>
                        <button className="text-purple-600 hover:text-purple-900">
                          Certificate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredEnrollments.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">🎓</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No enrolled students found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter to find what you're looking for."
                    : "No students have been enrolled yet."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enrollment Confirmation Modal */}
        {showEnrollModal && selectedStudent && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Confirm Enrollment
                </h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Name
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedStudent.studentName}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Course
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedStudent.course}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Application ID
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedStudent.applicationId}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Fee Paid
                    </label>
                    <p className="mt-1 text-sm text-green-600">
                      ₹{selectedStudent.paidAmount?.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  This will generate a student ID and officially enroll the
                  student in the system.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowEnrollModal(false);
                      setSelectedStudent(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      handleEnrollStudent(selectedStudent.applicationId)
                    }
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Confirm Enrollment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Details Modal */}
        {selectedStudent && !showEnrollModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Student Enrollment Details
                  </h3>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Student ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedStudent.studentId || "Not assigned yet"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Application ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedStudent.applicationId}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Student Name
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedStudent.studentName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedStudent.course}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Enrollment Date
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedStudent.enrollmentDate
                          ? new Date(
                              selectedStudent.enrollmentDate
                            ).toLocaleDateString()
                          : "Not enrolled yet"}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Enrollment Status
                      </label>
                      <p className="mt-1">
                        {getStatusBadge(
                          selectedStudent.enrollmentStatus || "pending"
                        )}
                      </p>
                    </div>
                  </div>

                  {selectedStudent.enrollmentStatus === "completed" && (
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Fee Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total Course Fee:</span>
                          <span>
                            ₹{selectedStudent.totalFee?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount Paid:</span>
                          <span className="text-green-600">
                            ₹{selectedStudent.feePaid?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between font-bold border-t pt-2">
                          <span>Balance Amount:</span>
                          <span
                            className={
                              selectedStudent.totalFee -
                                selectedStudent.feePaid ===
                              0
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            ₹
                            {(
                              selectedStudent.totalFee - selectedStudent.feePaid
                            )?.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Enrollment;
