package connections;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.ArrayList;

import user.Account;

public class Session extends Thread{

	CSMSocket csms;
	
	Socket socket;
	DataInputStream input;
	DataOutputStream output;
	ActionListener callback;
	
	SQLConnection sql;
	public Account account;
	
	public Session (Socket socket, ActionListener disconnect_callback, CSMSocket csms) {
		this.socket = socket;
		this.callback = disconnect_callback;
		this.csms = csms;
		
		try {
			this.input = new DataInputStream(socket.getInputStream());
			this.output = new DataOutputStream(socket.getOutputStream());
		} catch (Exception e) {
			System.out.println("Unable to create input/output streams.");
		}
		
		this.sql = new SQLConnection();
	}

	@SuppressWarnings("deprecation")
	public void run() {
		if(input == null || output == null) { return; }
		
		while(socket.isConnected()) {
			String user_request = "-1";
			
			try {
				String[] data = input.readUTF().split("-");
				user_request = data[1];
				
				request(user_request);
			} catch (Exception e) {
				callback.actionPerformed(new ActionEvent(this, 0, "disconnect"));
				return;
			}
		}
	}
	
	public void request(String user_request) {
		String[] component = user_request.split(" ");
		
		switch(component[0]) {
			case "login":
				Account sql_account = sql.getAccount(component[1], component[2]);
				
				try {
					if(sql_account == null) {
						output.writeUTF(System.nanoTime() + "-null");
					}else {
						if(csms.getByUsername(component[1]) != null) {
							output.writeUTF(System.nanoTime() + "-null");//user already with that name
						}else {
							output.writeUTF(System.nanoTime() + "-" + sql_account.toString());
							account = sql_account;
							callback.actionPerformed(new ActionEvent(this, 0, "connect"));
						}
					}
					break;
				} catch (Exception e) {
					System.out.println("Unable to send account string to player.\n" + e);
					break;
				}
				
			case "register":
				boolean completed = false;
				
				if(sql != null) {
					completed = sql.registerAccount(component[1], component[2]);
				}
				
				try {
					output.writeUTF("545492-" + completed);
				} catch (Exception e) {
					e.printStackTrace();
				}
				break;
				
			case "position":
				if(component.length == 3) {
					account.setPosition(Float.parseFloat(component[1]), Float.parseFloat(component[2]));
				}
				
				String data = "02934802394-";
				ArrayList<Session> sessions = csms.getSessions();
				
				for(int i = 0; i < sessions.size(); i++) {
					Account account = sessions.get(i).getAccount();
					if(account != null) {
						data += account.toString();
					}
				}
				
				try {
					output.writeUTF(data);
				} catch (Exception e) {
					e.printStackTrace();
				}
				break;
		}
	}
	
	public Account getAccount() {
		return account;
	}
}
