package gr7.oop.HealthLink.entity;

public class InvoiceDetail {
	private int indId;
	private Invoice invoice;
	private double patientPaid;
	private double medicinePrice;
	private double insurancePaid;

	// constructor
	public InvoiceDetail(int indId, Invoice invoice, double patientPaid, double medicinePrice, double insurancePaid) {
		this.indId = indId;
		this.invoice = invoice;
		this.patientPaid = patientPaid;
		this.medicinePrice = medicinePrice;
		this.insurancePaid = insurancePaid;
	}

	// getter & setter
	public int getIndId() {
		return indId;
	}

	public void setIndId(int indId) {
		this.indId = indId;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public double getPatientPaid() {
		return patientPaid;
	}

	public void setPatientPaid(double patientPaid) {
		this.patientPaid = patientPaid;
	}

	public double getMedicinePrice() {
		return medicinePrice;
	}

	public void setMedicinePrice(double medicinePrice) {
		this.medicinePrice = medicinePrice;
	}

	public double getInsurancePaid() {
		return insurancePaid;
	}

	public void setInsurancePaid(double insurancePaid) {
		this.insurancePaid = insurancePaid;
	}

}
