import { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { 
  LayoutDashboard, 
  Users, 
  UserRoundPlus, 
  CalendarDays, 
  Stethoscope, 
  Receipt,
  Menu,
  Bell,
  Search
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Doctors Directory", path: "/doctors", icon: Stethoscope },
  { name: "Patients Hub", path: "/patients", icon: Users },
  { name: "Appointments", path: "/appointments", icon: CalendarDays },
  { name: "Doctor Workspace", path: "/workspace", icon: UserRoundPlus },
  { name: "Billing & Invoicing", path: "/billing", icon: Receipt },
];

export function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xl">
              +
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">HealthLink</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  isActive 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact Footer Information */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Support Contact
          </h4>
          <div className="text-xs text-slate-600 space-y-2">
            <p className="flex justify-between">
              <span className="text-slate-400">FB:</span>
              <a href="https://facebook.com/nguyenduc.024" className="hover:text-emerald-600 transition-colors">nguyenduc.024</a>
            </p>
            <p className="flex justify-between">
              <span className="text-slate-400">Phone:</span>
              <a href="tel:0966432687" className="hover:text-emerald-600 transition-colors">0966432687</a>
            </p>
            <p className="flex justify-between">
              <span className="text-slate-400">Email:</span>
              <a href="mailto:nguyenduc.personal@gmail.com" className="hover:text-emerald-600 transition-colors truncate ml-2">
                nguyenduc.personal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -ml-2 text-slate-600 lg:hidden hover:bg-slate-50 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search globally..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm border border-emerald-200 cursor-pointer">
              Dr
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
