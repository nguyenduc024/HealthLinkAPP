package gr7.oop.HealthLink.entity;

import java.sql.Date;
import java.sql.Time;

public class WorkSchedule {
	private int wsId;
	private Doctor doctor; // Quan hệ HAS-A (DrId)
	private ClinicRoom clinicRoom; // Quan hệ HAS-A (CRId)
	private Date wsDay;
	private Time wsStartTime;
	private Time wsEndTime;
	private int wsMaxPatientSlot;

	// constructor
	public WorkSchedule(int wsId, Doctor doctor, ClinicRoom clinicRoom, Date wsDay, Time wsStartTime, Time wsEndTime,
			int wsMaxPatientSlot) {
		this.wsId = wsId;
		this.doctor = doctor;
		this.clinicRoom = clinicRoom;
		this.wsDay = wsDay;
		this.wsStartTime = wsStartTime;
		this.wsEndTime = wsEndTime;
		this.wsMaxPatientSlot = wsMaxPatientSlot;
	}

	// getter & setter
	public int getWsId() {
		return wsId;
	}

	public void setWsId(int wsId) {
		this.wsId = wsId;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public ClinicRoom getClinicRoom() {
		return clinicRoom;
	}

	public void setClinicRoom(ClinicRoom clinicRoom) {
		this.clinicRoom = clinicRoom;
	}

	public Date getWsDay() {
		return wsDay;
	}

	public void setWsDay(Date wsDay) {
		this.wsDay = wsDay;
	}

	public Time getWsStartTime() {
		return wsStartTime;
	}

	public void setWsStartTime(Time wsStartTime) {
		this.wsStartTime = wsStartTime;
	}

	public Time getWsEndTime() {
		return wsEndTime;
	}

	public void setWsEndTime(Time wsEndTime) {
		this.wsEndTime = wsEndTime;
	}

	public int getWsMaxPatientSlot() {
		return wsMaxPatientSlot;
	}

	public void setWsMaxPatientSlot(int wsMaxPatientSlot) {
		this.wsMaxPatientSlot = wsMaxPatientSlot;
	}

}
