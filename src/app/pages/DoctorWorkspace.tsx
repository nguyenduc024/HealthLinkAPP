import { useState } from "react";
import { 
  FileText, 
  Pill, 
  Search, 
  Plus, 
  Save, 
  ChevronRight, 
  User, 
  Clock, 
  AlertCircle,
  X
} from "lucide-react";

export function DoctorWorkspace() {
  const [activeTab, setActiveTab] = useState("ehr");
  const [selectedPatient, setSelectedPatient] = useState("P-8942");
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState<any>(null);

  const mockQueue = [
    { id: "P-8942", name: "Alice Johnson", time: "09:00 AM", status: "In Progress", type: "Check-up" },
    { id: "P-8945", name: "David Kim", time: "09:30 AM", status: "Waiting", type: "Follow-up" },
    { id: "P-8943", name: "Robert Smith", time: "10:00 AM", status: "Waiting", type: "Consultation" },
  ];

  const handleViewMedication = (med: any) => {
    setSelectedMedication(med);
    setShowPrescriptionModal(true);
  };

  return (
    <div className="h-full flex flex-col space-y-4 lg:space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dr. Sarah Miller's Workspace</h1>
          <p className="text-sm text-slate-500 mt-1">Manage patient records, prescriptions, and daily queue.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200">
            Complete Visit
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
        
        {/* Dynamic Appointment List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col h-[500px] lg:h-auto overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              Patient Queue
            </h2>
            <div className="mt-3 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search queue..." className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {mockQueue.map((patient) => (
              <div 
                key={patient.id} 
                className={`p-3 mb-2 rounded-lg cursor-pointer transition-colors border ${
                  selectedPatient === patient.id 
                    ? "bg-emerald-50 border-emerald-200 shadow-sm" 
                    : "bg-white border-transparent hover:bg-slate-50"
                }`}
                onClick={() => setSelectedPatient(patient.id)}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-sm text-slate-900">{patient.time}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-sm ${
                    patient.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {patient.status}
                  </span>
                </div>
                <h3 className={`text-sm font-medium ${selectedPatient === patient.id ? "text-emerald-700" : "text-slate-700"}`}>
                  {patient.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{patient.type} • {patient.id}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workspace Main Area */}
        <div className="lg:col-span-3 flex flex-col bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden h-[600px] lg:h-auto">
          
          {/* Patient Header */}
          <div className="p-4 sm:p-6 border-b border-slate-100 flex items-start sm:items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                A
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Alice Johnson</h2>
                <div className="flex items-center gap-3 text-sm text-slate-500 mt-1 font-medium">
                  <span>ID: P-8942</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>Female, 34 yrs</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-amber-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Penicillin Allergy
                  </span>
                </div>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
              Full Profile <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-100 px-4 sm:px-6">
            <button 
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'ehr' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab('ehr')}
            >
              <FileText className="w-4 h-4" /> Electronic Health Record
            </button>
            <button 
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'rx' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
              onClick={() => setActiveTab('rx')}
            >
              <Pill className="w-4 h-4" /> E-Prescription
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
            {activeTab === 'ehr' ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Chief Complaint</label>
                    <textarea 
                      className="w-full h-24 p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none transition-all"
                      placeholder="Patient reports..."
                      defaultValue="Patient reports experiencing mild chest pain and shortness of breath during exercise over the past 2 weeks."
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Vital Signs</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex justify-between items-center">
                        <span className="text-xs text-slate-500 font-medium">BP</span>
                        <span className="text-sm font-bold text-slate-900">120/80</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex justify-between items-center">
                        <span className="text-xs text-slate-500 font-medium">HR</span>
                        <span className="text-sm font-bold text-slate-900">72 bpm</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex justify-between items-center">
                        <span className="text-xs text-slate-500 font-medium">Temp</span>
                        <span className="text-sm font-bold text-slate-900">98.6 °F</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex justify-between items-center">
                        <span className="text-xs text-slate-500 font-medium">SpO2</span>
                        <span className="text-sm font-bold text-slate-900">99%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Clinical Notes & Diagnosis</label>
                  <textarea 
                    className="w-full h-40 p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none transition-all"
                    placeholder="Enter detailed clinical notes..."
                  ></textarea>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold text-slate-900">Current Prescriptions</h3>
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-md hover:bg-emerald-100 transition-colors">
                    <Plus className="w-4 h-4" /> Add Medication
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", duration: "30 days", notes: "Take in the morning with food." },
                    { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily", duration: "90 days", notes: "Take at bedtime." }
                  ].map((med, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 transition-colors group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                          <Pill className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{med.name} <span className="text-slate-500 font-medium ml-1">{med.dosage}</span></h4>
                          <p className="text-xs text-slate-500 mt-1">{med.frequency} for {med.duration}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleViewMedication(med)}
                        className="mt-3 sm:mt-0 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md hover:bg-emerald-100 transition-colors sm:opacity-0 sm:group-hover:opacity-100"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prescription Details Modal */}
      {showPrescriptionModal && selectedMedication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Pill className="w-5 h-5 text-emerald-600" /> Medication Details
              </h3>
              <button 
                onClick={() => setShowPrescriptionModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Drug Name</label>
                <p className="text-base font-bold text-slate-900 mt-1">{selectedMedication.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dosage</label>
                  <p className="text-sm font-medium text-slate-800 mt-1">{selectedMedication.dosage}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Duration</label>
                  <p className="text-sm font-medium text-slate-800 mt-1">{selectedMedication.duration}</p>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Frequency</label>
                <p className="text-sm font-medium text-slate-800 mt-1">{selectedMedication.frequency}</p>
              </div>
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <label className="text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Pharmacist Notes
                </label>
                <p className="text-sm text-amber-900 mt-1">{selectedMedication.notes}</p>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-2">
              <button 
                onClick={() => setShowPrescriptionModal(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200">
                Print Rx
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
