package gr7.oop.HealthLink.entity;

public class PrescriptionDetail {
	private int pdId;
	private Prescription prescription;
	private CategoryMedicine medicine;
	private double unitPrice;
	private int quantity;
	private int duration;
	private String guide;

	// constructor
	public PrescriptionDetail(int pdId, Prescription prescription, CategoryMedicine medicine, double unitPrice,
			int quantity, int duration, String guide) {
		this.pdId = pdId;
		this.prescription = prescription;
		this.medicine = medicine;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
		this.duration = duration;
		this.guide = guide;
	}

	// getter & setter
	public int getPdId() {
		return pdId;
	}

	public void setPdId(int pdId) {
		this.pdId = pdId;
	}

	public Prescription getPrescription() {
		return prescription;
	}

	public void setPrescription(Prescription prescription) {
		this.prescription = prescription;
	}

	public CategoryMedicine getMedicine() {
		return medicine;
	}

	public void setMedicine(CategoryMedicine medicine) {
		this.medicine = medicine;
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getGuide() {
		return guide;
	}

	public void setGuide(String guide) {
		this.guide = guide;
	}

}
