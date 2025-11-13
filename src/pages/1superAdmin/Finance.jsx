import React, { useState } from "react";

const sampleFinancialData = [
  {
    id: 1,
    college: "Engineering College",
    totalBudget: "₹50,00,00,000",
    utilized: "₹42,50,00,000",
    balance: "₹7,50,00,000",
    utilization: "85%",
    departments: 12,
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    college: "Medical College",
    totalBudget: "₹75,00,00,000",
    utilized: "₹68,25,00,000",
    balance: "₹6,75,00,000",
    utilization: "91%",
    departments: 8,
    lastUpdated: "2024-01-14",
  },
  {
    id: 3,
    college: "Business School",
    totalBudget: "₹25,00,00,000",
    utilized: "₹18,75,00,000",
    balance: "₹6,25,00,000",
    utilization: "75%",
    departments: 6,
    lastUpdated: "2024-01-16",
  },
];

const Finance = () => {
  const [financialData, setFinancialData] = useState(sampleFinancialData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = financialData.filter((item) =>
    item.college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalBudget = financialData.reduce(
    (sum, item) => sum + parseInt(item.totalBudget.replace(/[₹,]/g, "")),
    0
  );
  const totalUtilized = financialData.reduce(
    (sum, item) => sum + parseInt(item.utilized.replace(/[₹,]/g, "")),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-3">💰</span>
            <h1 className="text-2xl font-bold text-gray-900">
              Financial Overview
            </h1>
          </div>
          <p className="text-gray-600">
            Monitor institutional finances and budget utilization
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Budget
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{totalBudget.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">💸</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Utilized
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{totalUtilized.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">🏛️</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Colleges</p>
                <p className="text-2xl font-bold text-gray-900">
                  {financialData.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search colleges..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* Financial Data Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    College
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget Allocation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Utilization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">🏫</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.college}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.departments} Departments
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.totalBudget}
                      </div>
                      <div className="text-sm text-gray-500">Total Budget</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.utilized}
                      </div>
                      <div className="text-sm text-gray-500">Utilized</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.balance}
                      </div>
                      <div className="text-sm text-gray-500">Available</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: item.utilization }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {item.utilization}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
                          Download Report
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <span className="text-4xl">🔍</span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No financial data found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchTerm
                    ? "Try adjusting your search to find what you're looking for."
                    : "No financial data available."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
