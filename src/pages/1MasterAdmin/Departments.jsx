// src/pages/superadmin/Departments.js
import React, { useState } from "react";

const Departments = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Computer Science",
      code: "CS",
      college: "College of Engineering",
      hod: "Dr. Michael Brown",
      email: "cs@university.edu",
      phone: "+1-234-567-8910",
      status: "Active",
      established: "1995",
      programs: ["B.Tech", "M.Tech", "PhD"],
      facultyCount: 25,
      studentCount: 600,
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      code: "ME",
      college: "College of Engineering",
      hod: "Dr. Emily Davis",
      email: "me@university.edu",
      phone: "+1-234-567-8911",
      status: "Active",
      established: "1990",
      programs: ["B.Tech", "M.Tech", "PhD"],
      facultyCount: 20,
      studentCount: 450,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    college: "",
    hod: "",
    email: "",
    phone: "",
    established: "",
    programs: [],
  });

  const colleges = [
    "College of Engineering",
    "College of Medicine",
    "College of Arts",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingDept) {
      setDepartments(
        departments.map((dept) =>
          dept.id === editingDept
            ? {
                ...formData,
                id: editingDept,
                status: "Active",
                facultyCount: 0,
                studentCount: 0,
              }
            : dept
        )
      );
    } else {
      setDepartments([
        ...departments,
        {
          ...formData,
          id: Date.now(),
          status: "Active",
          facultyCount: 0,
          studentCount: 0,
        },
      ]);
    }
    setShowForm(false);
    setEditingDept(null);
    setFormData({
      name: "",
      code: "",
      college: "",
      hod: "",
      email: "",
      phone: "",
      established: "",
      programs: [],
    });
  };

  const handleEdit = (dept) => {
    setFormData(dept);
    setEditingDept(dept.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  const toggleStatus = (id) => {
    setDepartments(
      departments.map((dept) =>
        dept.id === id
          ? {
              ...dept,
              status: dept.status === "Active" ? "Inactive" : "Active",
            }
          : dept
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Department Management
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Department
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingDept ? "Edit Department" : "Add New Department"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Department Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Department Code"
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
              <select
                value={formData.college}
                onChange={(e) =>
                  setFormData({ ...formData, college: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select College</option>
                {colleges.map((college) => (
                  <option key={college} value={college}>
                    {college}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Head of Department"
                value={formData.hod}
                onChange={(e) =>
                  setFormData({ ...formData, hod: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Established Year"
                value={formData.established}
                onChange={(e) =>
                  setFormData({ ...formData, established: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex-1"
                >
                  {editingDept ? "Update" : "Add"} Department
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingDept(null);
                    setFormData({
                      name: "",
                      code: "",
                      college: "",
                      hod: "",
                      email: "",
                      phone: "",
                      established: "",
                      programs: [],
                    });
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                College
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                HOD
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Stats
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {departments.map((dept) => (
              <tr key={dept.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{dept.name}</p>
                    <p className="text-sm text-gray-500">{dept.code}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {dept.college}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{dept.hod}</td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">{dept.email}</p>
                  <p className="text-sm text-gray-500">{dept.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4 text-sm">
                    <div>
                      <p className="font-medium text-blue-600">
                        {dept.facultyCount}
                      </p>
                      <p className="text-gray-500">Faculty</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-600">
                        {dept.studentCount}
                      </p>
                      <p className="text-gray-500">Students</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      dept.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {dept.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(dept)}
                      className="text-yellow-600 hover:text-yellow-900 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStatus(dept.id)}
                      className="text-blue-600 hover:text-blue-900 text-sm"
                    >
                      {dept.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDelete(dept.id)}
                      className="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Departments;
