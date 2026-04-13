import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, User, Mail, Phone, Calendar } from "lucide-react";

const mockPatients = [
  { id: "P-8942", name: "Alice Johnson", age: 34, gender: "Female", lastVisit: "2023-10-12", email: "alice.j@example.com", phone: "+1 (555) 111-2222", status: "Active" },
  { id: "P-8943", name: "Robert Smith", age: 45, gender: "Male", lastVisit: "2023-09-28", email: "r.smith@example.com", phone: "+1 (555) 333-4444", status: "Inactive" },
  { id: "P-8944", name: "Catherine Lee", age: 29, gender: "Female", lastVisit: "2023-10-15", email: "cat.lee@example.com", phone: "+1 (555) 555-6666", status: "Active" },
  { id: "P-8945", name: "David Kim", age: 52, gender: "Male", lastVisit: "2023-08-05", email: "dkim99@example.com", phone: "+1 (555) 777-8888", status: "Archived" },
  { id: "P-8946", name: "Eva Martinez", age: 41, gender: "Female", lastVisit: "2023-10-18", email: "eva.m@example.com", phone: "+1 (555) 999-0000", status: "Active" },
];

export function PatientsHub() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = mockPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Patients Hub</h1>
          <p className="text-sm text-slate-500 mt-1">View and manage patient records securely.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200">
          <Plus className="w-4 h-4" />
          Add New Patient
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by Patient ID or Name..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
              <Filter className="w-4 h-4" />
              Filter Options
            </button>
            <button className="flex items-center justify-center p-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                  patient.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                  patient.status === 'Inactive' ? 'bg-amber-50 text-amber-700' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  {patient.status}
                </span>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg flex-shrink-0">
                  {patient.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{patient.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{patient.id} • {patient.gender}, {patient.age} yrs</p>
                </div>
              </div>

              <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="truncate">{patient.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{patient.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Last visit: {patient.lastVisit}</span>
                </div>
              </div>

              <div className="mt-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 bg-emerald-50 text-emerald-700 py-1.5 rounded-md text-sm font-medium hover:bg-emerald-100 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 bg-slate-50 text-slate-700 py-1.5 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors border border-slate-200">
                  Book Appt
                </button>
              </div>
            </div>
          ))}

          {filteredPatients.length === 0 && (
            <div className="col-span-full p-12 text-center border-2 border-dashed border-slate-200 rounded-xl">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-sm font-medium text-slate-900">No patients found</h3>
              <p className="text-sm text-slate-500 mt-1">Try adjusting your search query or add a new patient.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
