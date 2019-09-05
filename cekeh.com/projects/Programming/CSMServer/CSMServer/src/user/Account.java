package user;

public class Account{
	
	String username;
	int id;
	
	float[] position;
	
	public Account(String username, int id, float[] position) {
		this.username = username;
		this.id = id;
		this.position = position;
	}
	
	public void setPosition(float x, float y) {
		position = new float[] { x, y };
	}
	
	public float[] getPosition() {
		return position;
	}
	
	public String getUsername() {
		return username;
	}
	
	public String toString() {
		return convertToString(this);
	}
	
	public static String convertToString(Account account) {
		return 	"[" + 
				"username=" + account.username + 	
				" id=" + account.id +				
				" x=" + account.position[0] +		
				" y=" + account.position[1]	+		
				"]";
	}
	
	public static Account parse(String string) {
		if(string.equals("null") || !string.startsWith("[")) { return null; }
		String[] components = string.substring(1, string.length() - 1).split(" ");
		
		String new_username = components[0].split("=")[1];
		int new_id = Integer.parseInt(components[1].split("=")[1]);
		float[] new_position = new float[] { Float.parseFloat(components[2].split("=")[1]), Float.parseFloat(components[3].split("=")[1]) };
		
		return new Account(new_username, new_id, new_position);
	}
	
	public static Account[] multiParse(String string) {
		if(string.equals("null") || !string.startsWith("[")) { return null; }
		String[] account_strings = string.split("(?=\\[)|(?<=\\])");//(?=\\[)|(?<=\\]) == regex for "[" and "]" with no cutting, so "[]" will stay in the string
				
		Account[] accounts = new Account[account_strings.length];
		
		for(int i = 0; i < account_strings.length; i++) {
			String account_string = account_strings[i];
			accounts[i] = Account.parse(account_string);
		}
		
		return accounts;
	}
}
