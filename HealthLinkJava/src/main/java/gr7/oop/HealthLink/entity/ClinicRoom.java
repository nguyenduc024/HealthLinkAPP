package gr7.oop.HealthLink.entity;

public class ClinicRoom {
	private int crId;
	private String crName;
	private Department department;
	private String crNumber;
	private int crCapacity;
	private String crStatus;

	// constructor
	public ClinicRoom(int crId, String crName, Department department, String crNumber, int crCapacity,
			String crStatus) {
		this.crId = crId;
		this.crName = crName;
		this.department = department;
		this.crNumber = crNumber;
		this.crCapacity = crCapacity;
		this.crStatus = crStatus;
	}

	// getter & setter
	public int getCrId() {
		return crId;
	}

	public void setCrId(int crId) {
		this.crId = crId;
	}

	public String getCrName() {
		return crName;
	}

	public void setCrName(String crName) {
		this.crName = crName;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public String getCrNumber() {
		return crNumber;
	}

	public void setCrNumber(String crNumber) {
		this.crNumber = crNumber;
	}

	public int getCrCapacity() {
		return crCapacity;
	}

	public void setCrCapacity(int crCapacity) {
		this.crCapacity = crCapacity;
	}

	public String getCrStatus() {
		return crStatus;
	}

	public void setCrStatus(String crStatus) {
		this.crStatus = crStatus;
	}

}
