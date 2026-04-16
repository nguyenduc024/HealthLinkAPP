import { useState, useEffect } from "react";
import { Search, Plus, Filter, MoreVertical, Edit, Trash2, X, Loader2 } from "lucide-react";
import { fetchApi, API_BASE, registerRefreshOnFocus } from "../lib/api";

interface DoctorData {
  doctorId: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  fullName: string;
  sex: string;
  phone: string;
  address: string;
  specialty: string;
  departmentName: string | null;
  birthday: string | null;
}

interface DepartmentOption {
  dId: number;
  dName: string;
}

const EMPTY_FORM = {
  firstName: "",
  middleName: "",
  lastName: "",
  sex: "Nam",
  phone: "",
  address: "",
  specialty: "",
  birthday: "",
  departmentId: 0,
};

export function DoctorsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const [loading, setLoading] = useState(true);

  // Add doctor modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [departments, setDepartments] = useState<DepartmentOption[]>([]);
  const [addForm, setAddForm] = useState({ ...EMPTY_FORM });
  const [addLoading, setAddLoading] = useState(false);
  const [addMsg, setAddMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadDoctors = async () => {
    try {
      const data = await fetchApi<DoctorData[]>("/doctors");
      setDoctors(data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isActive = true;

    const load = async () => {
      try {
        const data = await fetchApi<DoctorData[]>("/doctors");
        if (isActive) {
          setDoctors(data);
        }
      } catch {
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    void load();
    const cleanupRefresh = registerRefreshOnFocus(() => {
      void load();
    });

    return () => {
      isActive = false;
      cleanupRefresh();
    };
  }, []);

  const openAddModal = async () => {
    setShowAddModal(true);
    setAddMsg(null);
    setAddForm({ ...EMPTY_FORM });
    try {
      const depts = await fetchApi<DepartmentOption[]>("/departments");
      setDepartments(depts);
    } catch {
      setAddMsg({ type: "error", text: "Không thể tải danh sách khoa." });
    }
  };

  const submitAddDoctor = async () => {
    if (!addForm.firstName.trim() || !addForm.lastName.trim()) {
      setAddMsg({ type: "error", text: "Họ và tên không được để trống." });
      return;
    }
    setAddLoading(true);
    setAddMsg(null);
    try {
      const res = await fetch(`${API_BASE}/add-doctor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: addForm.firstName,
          middleName: addForm.middleName || null,
          lastName: addForm.lastName,
          sex: addForm.sex || null,
          phone: addForm.phone || null,
          address: addForm.address || null,
          specialty: addForm.specialty || null,
          birthday: addForm.birthday || null,
          departmentId: addForm.departmentId || null,
        }),
      });
      const data = await res.json() as { status: string; message: string };
      if (data.status === "success") {
        setAddMsg({ type: "success", text: data.message });
        setAddForm({ ...EMPTY_FORM });
        // Reload danh sách bác sĩ
        void loadDoctors();
      } else {
        setAddMsg({ type: "error", text: data.message });
      }
    } catch {
      setAddMsg({ type: "error", text: "Lỗi kết nối server." });
    } finally {
      setAddLoading(false);
    }
  };

  const filteredDoctors = doctors.filter(doc => 
    doc.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (doc.specialty && doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Doctors Directory</h1>
          <p className="text-sm text-slate-500 mt-1">Manage practitioners and view their details.</p>
        </div>
        <button
          onClick={() => void openAddModal()}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200"
        >
          <Plus className="w-4 h-4" />
          Add Doctor
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search doctors by name or specialty..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Mã BS</th>
                <th className="px-6 py-4 font-medium">Họ tên</th>
                <th className="px-6 py-4 font-medium">Chuyên khoa</th>
                <th className="px-6 py-4 font-medium">Liên hệ</th>
                <th className="px-6 py-4 font-medium">Khoa</th>
                <th className="px-6 py-4 font-medium text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-500">Đang tải dữ liệu...</td></tr>
              ) : filteredDoctors.map((doc) => (
                <tr key={doc.doctorId} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                    BS-{String(doc.doctorId).padStart(3, '0')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                        {doc.lastName?.charAt(0) || '?'}
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{doc.fullName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {doc.specialty || '—'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">{doc.phone || '—'}</div>
                    <div className="text-xs text-slate-500">{doc.address || ''}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {doc.departmentName || 'Chưa phân khoa'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredDoctors.length === 0 && !loading && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-sm font-medium text-slate-900">No doctors found</h3>
              <p className="text-sm text-slate-500 mt-1">Try adjusting your search query.</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
          <div>Hiển thị 1 đến {filteredDoctors.length} trong {doctors.length} bác sĩ</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-emerald-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50">2</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>

      {/* Add Doctor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Thêm bác sĩ mới</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1 rounded-lg hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {addMsg && (
                <div className={`p-3 rounded-lg text-sm font-medium ${addMsg.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                  {addMsg.text}
                </div>
              )}

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Họ <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    placeholder="Nguyễn"
                    value={addForm.lastName}
                    onChange={e => setAddForm(f => ({ ...f, lastName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên đệm</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    placeholder="Văn"
                    value={addForm.middleName}
                    onChange={e => setAddForm(f => ({ ...f, middleName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Tên <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    placeholder="A"
                    value={addForm.firstName}
                    onChange={e => setAddForm(f => ({ ...f, firstName: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Giới tính</label>
                  <select
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    value={addForm.sex}
                    onChange={e => setAddForm(f => ({ ...f, sex: e.target.value }))}
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Ngày sinh</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                    value={addForm.birthday}
                    onChange={e => setAddForm(f => ({ ...f, birthday: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Số điện thoại</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="0912345678"
                  value={addForm.phone}
                  onChange={e => setAddForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Địa chỉ</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="123 Đường ABC, Quận XYZ"
                  value={addForm.address}
                  onChange={e => setAddForm(f => ({ ...f, address: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Chuyên khoa</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="Tim mạch, Nội khoa, ..."
                  value={addForm.specialty}
                  onChange={e => setAddForm(f => ({ ...f, specialty: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Khoa</label>
                <select
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  value={addForm.departmentId}
                  onChange={e => setAddForm(f => ({ ...f, departmentId: Number(e.target.value) }))}
                >
                  <option value={0}>-- Chọn khoa --</option>
                  {departments.map(d => <option key={d.dId} value={d.dId}>{d.dName}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 p-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => void submitAddDoctor()}
                disabled={addLoading}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {addLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {addLoading ? "Đang xử lý..." : "Thêm bác sĩ"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
