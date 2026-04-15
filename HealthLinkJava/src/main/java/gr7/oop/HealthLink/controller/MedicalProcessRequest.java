package gr7.oop.HealthLink.controller;

import java.util.List;

public class MedicalProcessRequest {
	// 1. Thông tin dùng chung
	public int doctorId;
	public int patientId;
	public int appointmentId;

	// 2. Thông tin cho bảng MEDICAL_RECORD (Hồ sơ)
	public String diagnosis;
	public String method;
	public String testResult;

	// 3. Thông tin cho bảng PRESCRIPTION (Đơn thuốc tổng)
	public String doctorNote;

	// 4. Thông tin cho bảng PRESCRIPTION_DETAIL (Chi tiết từng loại thuốc)
	// Vì 1 đơn thuốc có thể có nhiều loại thuốc, ta dùng một List chứa các object
	// con
	public List<MedicineItem> prescriptionDetails;

	// --- Inner Class: Đại diện cho 1 dòng thuốc gửi từ Giao diện ---
	public static class MedicineItem {
		public int medicineId;
		public double unitPrice;
		public int quantity;
		public int duration;
		public String guide;
	}
}