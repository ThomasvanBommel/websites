package main;

import java.net.ServerSocket;
import java.util.ArrayList;

import graphics.console.Console;
import graphics.window.Window;
import networking.session.Session;

public class Server extends ServerSocket{
	
	static ArrayList<Session> sessions = new ArrayList<Session>();
	
	Window window = new Window();

	@SuppressWarnings("resource")
	public static void main(String[] args){
		try {
			new Server();
		} catch (Exception e) { e.printStackTrace(); }
	}
	
	public Server() throws Exception{
		super(11000);
		
		startListening();
	}

	public void startListening() {
		Console.write("Listening...");
		
		while(true) {
			try {
				sessions.add(new Session(accept()));
			} catch (Exception e) { e.printStackTrace(); }
		}
	}
	
	public static void removeSession(Session session) {
		sessions.remove(session);
	}
}
