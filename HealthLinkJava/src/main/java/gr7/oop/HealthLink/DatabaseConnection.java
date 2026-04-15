package gr7.oop.HealthLink;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
	// 1. Cấu hình thông tin SQL Server
	private static final String SERVER_NAME = "localhost";
	private static final String PORT = "1433"; // Port mặc định của SQL Server
	private static final String DATABASE_NAME = "HEALTHLINK_DB"; // Tên database bạn đã tạo

	// username và password của database
	private static final String USERNAME = "sa";
	private static final String PASSWORD = "Pasword1234Ki";

	// thực hiện kết nối
	private static final String DB_URL = "jdbc:sqlserver://" + SERVER_NAME + ":" + PORT + ";databaseName="
			+ DATABASE_NAME + ";encrypt=true;trustServerCertificate=true;";

	// tạo biến lưu trữ kết nối
	private static Connection connection;

	// 2. Hàm lấy kết nối
	public static Connection getConnection() {
		try {
			// Kiểm tra xem kết nối đã được tạo và còn mở không, nếu chưa thì tạo mới
			if (connection == null || connection.isClosed()) {
				// Đăng ký Driver với SQL Server
				Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

				// Thực hiện kết nối
				connection = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
				System.out.println("Đã kết nối thành công tới Database: " + DATABASE_NAME);
			}
		} catch (ClassNotFoundException e) {
			System.err.println("❌ Không tìm thấy thư viện JDBC. Hãy kiểm tra lại file pom.xml!");
			e.printStackTrace();
		} catch (SQLException e) {
			System.err.println("❌ Lỗi kết nối CSDL: " + e.getMessage());
			e.printStackTrace();
		}
		return connection;
	}

//	3. test
//	public static void main(String[] args) {
//		Connection conn = DatabaseConnection.getConnection();
//		if (conn != null) {
//			System.out.println("Kết nối thành công");
//		}
//	}
}