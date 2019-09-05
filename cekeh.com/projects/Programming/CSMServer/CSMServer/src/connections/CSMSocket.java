package connections;

import java.awt.event.ActionListener;
import java.io.IOException;
import java.net.ServerSocket;
import java.util.ArrayList;

public class CSMSocket extends ServerSocket{
	
	private ActionListener callback;
	
	public ArrayList<Session> sessions = new ArrayList<Session>();
	
	public CSMSocket(ActionListener callback) throws IOException {
		super(11000);
		
		this.callback = callback;
	}
	
	public void listen() {
		try {
			Session new_session = new Session(this.accept(), callback, this);
			new_session.start();
			sessions.add(new_session);
		} catch (Exception e) {	}
	}
	
	public ArrayList<Session> getSessions(){
		return sessions;
	}
	
	public Session getByUsername(String username) {
		for(Session session: sessions) {
			if(session.account != null) {
				if(session.account.getUsername().equals(username)) {
					return session;
				}
			}
		}
		
		return null;
	}
}
