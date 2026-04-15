package gr7.oop.HealthLink.entity;

import java.sql.Timestamp;

public class Prescription {
	private int prId;
	private MedicalRecord medicalRecord; // Quan hệ 1-1 với Hồ sơ bệnh án
	private String doctorNote;
	private Timestamp createdAt;

	// constructor
	public Prescription(int prId, MedicalRecord medicalRecord, String doctorNote, Timestamp createdAt) {
		this.prId = prId;
		this.medicalRecord = medicalRecord;
		this.doctorNote = doctorNote;
		this.createdAt = createdAt;
	}

	// getter & setter
	public int getPrId() {
		return prId;
	}

	public void setPrId(int prId) {
		this.prId = prId;
	}

	public MedicalRecord getMedicalRecord() {
		return medicalRecord;
	}

	public void setMedicalRecord(MedicalRecord medicalRecord) {
		this.medicalRecord = medicalRecord;
	}

	public String getDoctorNote() {
		return doctorNote;
	}

	public void setDoctorNote(String doctorNote) {
		this.doctorNote = doctorNote;
	}

	public Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}

}