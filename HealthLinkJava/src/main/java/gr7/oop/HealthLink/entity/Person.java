package gr7.oop.HealthLink.entity;

import java.sql.Date;

public class Person {
	protected int id;
	protected String firstName;
	protected String middleName;
	protected String lastName;
	protected Date birthDate;
	protected String sex;
	protected String phone;
	protected String address;

	// constructor
	public Person(int id, String firstName, String middleName, String lastName, Date birthDate, String sex,
			String phone, String address) {
		this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.sex = sex;
		this.phone = phone;
		this.address = address;
	}

	// hàm lấy ra đầy đủ họ tên (xử lý trường hợp middle name bị NULL)
	public String getFullName() {
		if (middleName == null || middleName.trim().isEmpty()) {
			return lastName + " " + firstName;
		}
		return lastName + " " + middleName + " " + firstName;
	}

	// getter & setter
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
