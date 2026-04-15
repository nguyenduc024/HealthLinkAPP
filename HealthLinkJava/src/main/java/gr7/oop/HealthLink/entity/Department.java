package gr7.oop.HealthLink.entity;

import java.sql.Date;

public class Department {
	private int dId;
	private String dName;
	private Date dStartDate;

	// constructor
	public Department(int dId, String dName, Date dStartDate) {
		this.dId = dId;
		this.dName = dName;
		this.dStartDate = dStartDate;
	}

	// getter & setter
	public int getdId() {
		return dId;
	}

	public void setdId(int dId) {
		this.dId = dId;
	}

	public String getdName() {
		return dName;
	}

	public void setdName(String dName) {
		this.dName = dName;
	}

	public Date getdStartDate() {
		return dStartDate;
	}

	public void setdStartDate(Date dStartDate) {
		this.dStartDate = dStartDate;
	}

}
