package gr7.oop.HealthLink.entity;

import java.sql.Timestamp;

public class Appointment {
	private int apId; // APId
	private Doctor doctor; // DrId (Quan hệ HAS-A)
	private Patient patient; // PId (Quan hệ HAS-A)
	private ClinicRoom clinicRoom;
	private String apStatus; // APStatus
	private String apReason; // APReason
	private Timestamp apDateTimes; // APDateTimes

	// constructor
	public Appointment(int apId, Doctor doctor, Patient patient, ClinicRoom clinicRoom, String apStatus,
			String apReason, Timestamp apDateTimes) {
		this.apId = apId;
		this.doctor = doctor;
		this.patient = patient;
		this.clinicRoom = clinicRoom;
		this.apStatus = apStatus;
		this.apReason = apReason;
		this.apDateTimes = apDateTimes;
	}

	// getter & setter
	public int getApId() {
		return apId;
	}

	public void setApId(int apId) {
		this.apId = apId;
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

	public ClinicRoom getClinicRoom() {
		return clinicRoom;
	}

	public void setClinicRoom(ClinicRoom clinicRoom) {
		this.clinicRoom = clinicRoom;
	}

	public String getApStatus() {
		return apStatus;
	}

	public void setApStatus(String apStatus) {
		this.apStatus = apStatus;
	}

	public String getApReason() {
		return apReason;
	}

	public void setApReason(String apReason) {
		this.apReason = apReason;
	}

	public Timestamp getApDateTimes() {
		return apDateTimes;
	}

	public void setApDateTimes(Timestamp apDateTimes) {
		this.apDateTimes = apDateTimes;
	}

}