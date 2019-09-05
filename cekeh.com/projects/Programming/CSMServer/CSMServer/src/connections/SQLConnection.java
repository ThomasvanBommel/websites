package connections;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import user.Account;

public class SQLConnection {

	Connection connection;
	Statement statement;
	
	public SQLConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/players?useSSL=false", "guest", "");
			statement = connection.createStatement();
		} catch (Exception e) {
			System.out.println("Unable to setup SQLConnection.\n" + e);
		}
	}
	
	public Account getAccount(String username, String password) {
		if(connection == null || statement == null) { return null; }
		
		String query = "select * from users where username='" + username + "' and password=password('" + password + "') limit 3;";
		
		try {
			ResultSet result = statement.executeQuery(query);
			
			if(result.next()) {
				return new Account(result.getString(1), result.getInt(3), new float[] { 0, 0 });
			}
		} catch (Exception e) {
			System.out.println("Could not complete account query.");
			return null;
		}
		
		return null;
	}
	
	public boolean registerAccount(String username, String password) {
		if(connection == null || statement == null) { return false; }
		
		String query = "insert into users (username, password, money) select * from (select '" + username + "', password('" + password + "'), 250) as tmp where not exists (select username from users where username='" + username + "') limit 1;";
		
		try {
			int result = statement.executeUpdate(query);
			
			if(result == 1) {
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return false;
	}
}
