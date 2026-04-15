package gr7.oop.HealthLink.entity;

import java.sql.Timestamp;

public class MedicalRecord {
	private int mrId;
	private Doctor doctor; // Bác sĩ lập hồ sơ
	private Patient patient; // Bệnh nhân được khám
	private int appointmentId; // ID cuộc hẹn tương ứng (Quan hệ 1-1)
	private String diagnosis;
	private String method;
	private String testResult;
	private Timestamp createdAt;

	// constructor
	public MedicalRecord(int mrId, Doctor doctor, Patient patient, int appointmentId, String diagnosis, String method,
			String testResult) {
		this.mrId = mrId;
		this.doctor = doctor;
		this.patient = patient;
		this.appointmentId = appointmentId;
		this.diagnosis = diagnosis;
		this.method = method;
		this.testResult = testResult;
	}

	// getter & setter
	public int getMrId() {
		return mrId;
	}

	public void setMrId(int mrId) {
		this.mrId = mrId;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public String getTestResult() {
		return testResult;
	}

	public void setTestResult(String testResult) {
		this.testResult = testResult;
	}

	public Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}

}
