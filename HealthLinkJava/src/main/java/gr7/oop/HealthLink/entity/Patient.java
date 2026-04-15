package gr7.oop.HealthLink.entity;

import java.sql.Date;

public class Patient extends Person {
	private String pInsurance;

	// constructor
	public Patient(int id, String firstName, String middleName, String lastName, Date birthDate, String sex,
			String phone, String address, String pInsurance) {
		super(id, firstName, middleName, lastName, birthDate, sex, phone, address);
		this.pInsurance = pInsurance;
	}

	// getter & setter
	public String getpInsurance() {
		return pInsurance;
	}

	public void setpInsurance(String pInsurance) {
		this.pInsurance = pInsurance;
	}

}
