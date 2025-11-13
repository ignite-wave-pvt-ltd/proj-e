// routes/AppRoutes.js

import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "../pages/NotFound";
import ManageColleges from "../pages/1MasterAdmin/ManageColleges";
import CreateCollege from "../pages/1MasterAdmin/CreateCollege";
import CollegeDashboard from "../pages/2CollegeAdmin/CollegeDashboard";
import Departments from "../pages/2CollegeAdmin/departments";
import Faculty from "../pages/2CollegeAdmin/faculty";
import Students from "../pages/2CollegeAdmin/students";
import Courses from "../pages/2CollegeAdmin/courses";
import Fees from "../pages/2CollegeAdmin/fees";
import Reports from "../pages/2CollegeAdmin/reports";
import AdmissionDashboard from "../pages/3Admission/AdmissionDashboard";
import AdmissionSetup from "../pages/3Admission/AdmissionSetup";
import CoursesIntake from "../pages/3Admission/CoursesIntake";
import ApplicationsList from "../pages/3Admission/ApplicationsList";
import DocumentVerification from "../pages/3Admission/DocumentVerification";
import OfferLetters from "../pages/3Admission/OfferLetters";
import FeePayment from "../pages/3Admission/FeePayment";
import Enrollment from "../pages/3Admission/Enrollment";
import AdmissionReports from "../pages/3Admission/AdmissionReports";
import ClassScheduling from "../pages/4Department/ClassScheduling";
import FacultyAssignments from "../pages/4Department/FacultyAssignments";
import InternalMarks from "../pages/4Department/InternalMarks";
import DepartmentDashboard from "../pages/4Department/DepartmentDashboard";
import HODPanel from "../pages/4Department/HODPanel";
import TakeAttendance from "../pages/5Attendence/TakeAttendance";
import ViewAttendance from "../pages/5Attendence/ViewAttendance";
import AttendanceReports from "../pages/5Attendence/AttendanceReports";
import SADepartments from "../pages/2CollegeAdmin/departments";
import SuperAdminDashboard from "../pages/1superAdmin/SuperAdminDashboard";
import StaffFacultyManagement from "../pages/1superAdmin/StaffFacultyManagement ";
import DepartmentManagement from "../pages/1superAdmin/DepartmentManagement";
import StudentOversight from "../pages/1superAdmin/StudentOversight";
import Finance from "../pages/1superAdmin/Finance";
import Examinations from "../pages/1superAdmin/Examinations";
import Placements from "../pages/1superAdmin/Placements";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route
        path="/"
        element={<Navigate to="/superadmin/create-college" replace />}
      />

      <Route path="*" element={<NotFound />} />

      {/* Master Admin */}
      <Route path="/master-admin/create-college" element={<CreateCollege />} />
      <Route path="/master-admin/colleges" element={<ManageColleges />} />

      {/* Super Admin */}
      <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
      <Route
        path="/superadmin/departments"
        element={<DepartmentManagement />}
      />
      <Route path="/superadmin/faculty" element={<StaffFacultyManagement />} />
      <Route path="/superadmin/students" element={<StudentOversight />} />
      <Route path="/superadmin/finance" element={<Finance />} />
      <Route path="/superadmin/exams" element={<Examinations />} />
      <Route path="/superadmin/placements" element={<Placements />} />

      {/* College Admin Routes */}
      <Route path="/college/dashboard" element={<CollegeDashboard />} />
      <Route path="/college/departments" element={<Departments />} />
      <Route path="/college/faculty" element={<Faculty />} />
      <Route path="/college/students" element={<Students />} />
      <Route path="/college/courses" element={<Courses />} />
      <Route path="/college/fees" element={<Fees />} />
      <Route path="/college/reports" element={<Reports />} />

      <Route path="/admission/dashboard" element={<AdmissionDashboard />} />
      <Route path="/admission/setup" element={<AdmissionSetup />} />
      <Route path="/admission/courses" element={<CoursesIntake />} />
      <Route path="/admission/applications" element={<ApplicationsList />} />
      <Route
        path="/admission/verification"
        element={<DocumentVerification />}
      />
      <Route path="/admission/offers" element={<OfferLetters />} />
      <Route path="/admission/payments" element={<FeePayment />} />
      <Route path="/admission/enrollment" element={<Enrollment />} />
      <Route path="/admission/reports" element={<AdmissionReports />} />

      {/* Department Routes */}
      <Route path="/department/dashboard" element={<DepartmentDashboard />} />
      <Route path="/department/hod" element={<HODPanel />} />
      <Route
        path="/department/faculty-assign"
        element={<FacultyAssignments />}
      />
      <Route path="/department/schedule" element={<ClassScheduling />} />
      <Route path="/department/internal-marks" element={<InternalMarks />} />

      {/* Attendance Routes */}
      <Route path="/attendance/mark" element={<TakeAttendance />} />
      <Route path="/attendance/view" element={<ViewAttendance />} />
      <Route path="/attendance/reports" element={<AttendanceReports />} />
    </Routes>
  );
};

export default AppRoutes;
