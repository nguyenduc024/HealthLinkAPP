package gr7.oop.HealthLink.entity;

import java.sql.Date;

public class Doctor extends Person {
	private String specialty;
	private Department department;

	// constructor
	public Doctor(int id, String firstName, String middleName, String lastName, Date birthDate, String sex,
			String phone, String address, String specialty, Department department) {
		super(id, firstName, middleName, lastName, birthDate, sex, phone, address);
		this.specialty = specialty;
		this.department = department;
	}

	// getter & setter
	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

}
