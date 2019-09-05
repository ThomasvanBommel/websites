package connections;

import java.awt.event.ActionListener;

public class Server extends Thread{

	public CSMSocket socket;
	
	public Server(ActionListener callback) {
		try {
			socket = new CSMSocket(callback);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void run() {
		if(socket == null) { return; }

		System.out.println("Server started.");
		
		while(socket.isBound()) {
			socket.listen();
		}
		
		System.out.println("Server offline.");
	}
}
