package networking.session;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;

import main.Server;

public class Session implements Runnable{

	Socket socket;
	DataInputStream input;
	DataOutputStream output;
	
	public Session(Socket socket) {
		this.socket = socket;
		
		try {
			input = new DataInputStream(socket.getInputStream());
			output = new DataOutputStream(socket.getOutputStream());
			
			new Thread(this).start();
		} catch (Exception e) {
			e.printStackTrace();
			stop();
		}
	}

	@Override
	public void run() {
		while(true) {
			try {
				String data = input.readUTF();
				System.out.println(data);
			} catch (Exception e) {
				stop();
				break;
			}
		}
	}
	
	void stop() {
		try {
			socket.close();
		} catch (Exception e) { e.printStackTrace(); }
		
		Server.removeSession(this);
	}
}
