package gr7.oop.HealthLink.entity;

public class CategoryMedicine {
	private int cmId;
	private String cmName;
	private int cmStockQuantity;
	private double cmPrice;
	private String cmNote;

	// constructor
	public CategoryMedicine(int cmId, String cmName, int cmStockQuantity, double cmPrice, String cmNote) {
		this.cmId = cmId;
		this.cmName = cmName;
		this.cmStockQuantity = cmStockQuantity;
		this.cmPrice = cmPrice;
		this.cmNote = cmNote;
	}

	// getter & setter
	public int getCmId() {
		return cmId;
	}

	public void setCmId(int cmId) {
		this.cmId = cmId;
	}

	public String getCmName() {
		return cmName;
	}

	public void setCmName(String cmName) {
		this.cmName = cmName;
	}

	public int getCmStockQuantity() {
		return cmStockQuantity;
	}

	public void setCmStockQuantity(int cmStockQuantity) {
		this.cmStockQuantity = cmStockQuantity;
	}

	public double getCmPrice() {
		return cmPrice;
	}

	public void setCmPrice(double cmPrice) {
		this.cmPrice = cmPrice;
	}

	public String getCmNote() {
		return cmNote;
	}

	public void setCmNote(String cmNote) {
		this.cmNote = cmNote;
	}

}
