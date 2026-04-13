import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { DoctorsDirectory } from "./pages/DoctorsDirectory";
import { PatientsHub } from "./pages/PatientsHub";
import { Appointments } from "./pages/Appointments";
import { DoctorWorkspace } from "./pages/DoctorWorkspace";
import { Billing } from "./pages/Billing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "doctors", Component: DoctorsDirectory },
      { path: "patients", Component: PatientsHub },
      { path: "appointments", Component: Appointments },
      { path: "workspace", Component: DoctorWorkspace },
      { path: "billing", Component: Billing },
      { path: "*", Component: () => <div>Page Not Found</div> },
    ],
  },
]);
