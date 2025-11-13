import React, { useState, useEffect } from "react";

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [collegeFilter, setCollegeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    hod: "",
    college: "",
    description: "",
    establishedDate: "",
    contactEmail: "",
    phone: "",
    budget: "",
    status: "active",
  });

  const colleges = [
    "Engineering College",
    "Medical College",
    "Business School",
    "Arts & Science",
    "Law College",
    "Pharmacy College",
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockDepartments = [
        {
          id: 1,
          name: "Computer Science & Engineering",
          code: "CSE",
          hod: "Dr. Rajesh Kumar",
          college: "Engineering College",
          description:
            "Department focusing on computer science and software engineering",
          establishedDate: "2005-08-15",
          contactEmail: "cse@university.edu",
          phone: "+91-9876543210",
          budget: "₹2.5 Cr",
          students: 450,
          faculty: 25,
          courses: 12,
          status: "active",
          lastUpdated: "2024-01-15",
        },
        {
          id: 2,
          name: "Mechanical Engineering",
          code: "ME",
          hod: "Dr. Priya Sharma",
          college: "Engineering College",
          description: "Department for mechanical and industrial engineering",
          establishedDate: "2000-06-20",
          contactEmail: "mech@university.edu",
          phone: "+91-9876543211",
          budget: "₹1.8 Cr",
          students: 380,
          faculty: 20,
          courses: 10,
          status: "active",
          lastUpdated: "2024-01-14",
        },
        {
          id: 3,
          name: "Business Administration",
          code: "MBA",
          hod: "Dr. Anil Verma",
          college: "Business School",
          description: "Postgraduate business management department",
          establishedDate: "1995-03-10",
          contactEmail: "mba@university.edu",
          phone: "+91-9876543212",
          budget: "₹3.2 Cr",
          students: 520,
          faculty: 30,
          courses: 8,
          status: "active",
          lastUpdated: "2024-01-13",
        },
        {
          id: 4,
          name: "Civil Engineering",
          code: "CE",
          hod: "Dr. Sanjay Patel",
          college: "Engineering College",
          description: "Civil and infrastructure engineering department",
          establishedDate: "1998-11-05",
          contactEmail: "civil@university.edu",
          phone: "+91-9876543213",
          budget: "₹2.1 Cr",
          students: 320,
          faculty: 18,
          courses: 9,
          status: "inactive",
          lastUpdated: "2024-01-12",
        },
      ];
      setDepartments(mockDepartments);
      setFilteredDepartments(mockDepartments);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    let filtered = departments;

    if (searchTerm) {
      filtered = filtered.filter(
        (dept) =>
          dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dept.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dept.hod.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (collegeFilter !== "all") {
      filtered = filtered.filter((dept) => dept.college === collegeFilter);
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((dept) => dept.status === statusFilter);
    }

    setFilteredDepartments(filtered);
  }, [searchTerm, collegeFilter, statusFilter, departments]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingDept) {
      // Update existing department
      setDepartments(
        departments.map((dept) =>
          dept.id === editingDept.id
            ? { ...formData, id: editingDept.id }
            : dept
        )
      );
    } else {
      // Add new department
      const newDept = {
        ...formData,
        id: departments.length + 1,
        students: 0,
        faculty: 0,
        courses: 0,
        lastUpdated: new Date().toISOString().split("T")[0],
      };
      setDepartments([...departments, newDept]);
    }

    setShowForm(false);
    setEditingDept(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      code: "",
      hod: "",
      college: "",
      description: "",
      establishedDate: "",
      contactEmail: "",
      phone: "",
      budget: "",
      status: "active",
    });
  };

  const handleEdit = (dept) => {
    setFormData(dept);
    setEditingDept(dept);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      setDepartments(departments.filter((dept) => dept.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setDepartments(
      departments.map((dept) =>
        dept.id === id
          ? {
              ...dept,
              status: dept.status === "active" ? "inactive" : "active",
            }
          : dept
      )
    );
  };

  const DepartmentCard = ({ department }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{department.name}</h3>
          <p className="text-gray-600">Code: {department.code}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              department.status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {department.status}
          </span>
          <button
            onClick={() => toggleStatus(department.id)}
            className={`px-3 py-1 rounded text-xs ${
              department.status === "active"
                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            {department.status === "active" ? "Deactivate" : "Activate"}
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">HOD:</span>
          <span>{department.hod}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">College:</span>
          <span>{department.college}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Contact:</span>
          <span>
            {department.contactEmail} | {department.phone}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="font-medium w-24">Established:</span>
          <span>
            {new Date(department.establishedDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{department.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-bold text-blue-600">
            {department.students}
          </div>
          <div className="text-xs text-gray-600">Students</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">
            {department.faculty}
          </div>
          <div className="text-xs text-gray-600">Faculty</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-lg font-bold text-purple-600">
            {department.courses}
          </div>
          <div className="text-xs text-gray-600">Courses</div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Budget: {department.budget}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(department)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(department.id)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
          >
            Delete
          </button>
        </div>
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
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Department Management</h1>
            <p className="text-blue-100">
              Manage academic departments across all colleges
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
          >
            <span className="mr-2 text-lg">+</span> Add New Department
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search departments by name, code, or HOD..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={collegeFilter}
            onChange={(e) => setCollegeFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Colleges</option>
            {colleges.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Department Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingDept ? "Edit Department" : "Add New Department"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter department name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({ ...formData, code: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., CSE, ME, MBA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Head of Department *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.hod}
                    onChange={(e) =>
                      setFormData({ ...formData, hod: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter HOD name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    College *
                  </label>
                  <select
                    required
                    value={formData.college}
                    onChange={(e) =>
                      setFormData({ ...formData, college: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select College</option>
                    {colleges.map((college) => (
                      <option key={college} value={college}>
                        {college}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Established Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.establishedDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        establishedDate: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Budget *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ₹2.5 Cr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, contactEmail: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="department@university.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91-9876543210"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Department description and focus areas..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingDept(null);
                    resetForm();
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingDept ? "Update Department" : "Create Department"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Departments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDepartments.map((department) => (
          <DepartmentCard key={department.id} department={department} />
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
          <div className="text-6xl mb-4">🏢</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No departments found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search criteria or add a new department.
          </p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Department Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {departments.length}
            </div>
            <div className="text-sm text-gray-600">Total Departments</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {departments.filter((d) => d.status === "active").length}
            </div>
            <div className="text-sm text-gray-600">Active Departments</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {departments.reduce((sum, dept) => sum + dept.students, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {departments.reduce((sum, dept) => sum + dept.faculty, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Faculty</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentManagement;
