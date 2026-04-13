import { 
  Users, 
  Stethoscope, 
  CalendarDays, 
  TrendingUp, 
  AlertCircle 
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area
} from "recharts";

const data = [
  { name: 'Mon', patients: 40, revenue: 2400 },
  { name: 'Tue', patients: 30, revenue: 1398 },
  { name: 'Wed', patients: 20, revenue: 9800 },
  { name: 'Thu', patients: 27, revenue: 3908 },
  { name: 'Fri', patients: 18, revenue: 4800 },
  { name: 'Sat', patients: 23, revenue: 3800 },
  { name: 'Sun', patients: 34, revenue: 4300 },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            Export Report
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200">
            New Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { title: "Total Patients", value: "2,834", icon: Users, change: "+12.5%", isPositive: true },
          { title: "Active Doctors", value: "48", icon: Stethoscope, change: "+2.1%", isPositive: true },
          { title: "Today's Appointments", value: "124", icon: CalendarDays, change: "-4.5%", isPositive: false },
          { title: "Monthly Revenue", value: "$45,231", icon: TrendingUp, change: "+8.4%", isPositive: true },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stat.isPositive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-slate-900">Patient Footfall</h3>
            <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-600 font-medium">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-72 w-full min-h-[288px]">
            <ResponsiveContainer width="100%" height={288}>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area type="monotone" dataKey="patients" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorPatients)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col">
          <h3 className="text-base font-semibold text-slate-900 mb-6">Urgent Alerts</h3>
          <div className="flex-1 overflow-y-auto space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 p-3 rounded-lg border border-red-100 bg-red-50/50 hover:bg-red-50 transition-colors cursor-pointer">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-slate-900">Dr. Sarah Miller</h4>
                  <p className="text-xs text-slate-500 mt-1">Pending EHR approval for Patient #8942. Due 2 hours ago.</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2.5 text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
            View All Alerts
          </button>
        </div>
      </div>
    </div>
  );
}
