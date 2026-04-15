package gr7.oop.HealthLink.exception;

public class DuplicateAppointmentException extends Exception {
	public DuplicateAppointmentException(String message) {
		super(message); // Truyền lời nhắn lỗi lên lớp cha
	}
}
