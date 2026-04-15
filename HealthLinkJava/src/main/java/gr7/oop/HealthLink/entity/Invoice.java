package gr7.oop.HealthLink.entity;

import java.sql.Timestamp;

public class Invoice {
	private int inId;
	Appointment appointment;
	Prescription prescription;
	private double totalPrice;
	private String paymentMethod;
	private String status;
	private Timestamp paidDate;

	// constructor
	public Invoice(int inId, Appointment appointment, Prescription prescription, double totalPrice,
			String paymentMethod, String status, Timestamp paidDate) {
		super();
		this.inId = inId;
		this.appointment = appointment;
		this.prescription = prescription;
		this.totalPrice = totalPrice;
		this.paymentMethod = paymentMethod;
		this.status = status;
		this.paidDate = paidDate;
	}

	// getter & setter
	public int getInId() {
		return inId;
	}

	public void setInId(int inId) {
		this.inId = inId;
	}

	public Appointment getAppointment() {
		return appointment;
	}

	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}

	public Prescription getPrescription() {
		return prescription;
	}

	public void setPrescription(Prescription prescription) {
		this.prescription = prescription;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Timestamp getPaidDate() {
		return paidDate;
	}

	public void setPaidDate(Timestamp paidDate) {
		this.paidDate = paidDate;
	}

}
