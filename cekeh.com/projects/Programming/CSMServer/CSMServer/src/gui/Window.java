package gui;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;

import connections.Server;
import connections.Session;

@SuppressWarnings("serial")
public class Window extends JFrame{
	
	Container content;
	
	InformationPanel info;
	
	JTabbedPane tabbed_panel;
	ConsolePanel console;
	
	//JPanel players_panel;
	PlayersPanel players;
	
	Server server;
	
	public Window() {
		super("CSMServer");
		
		content = getContentPane();
		content.setLayout(new BorderLayout());
		
		info = new InformationPanel();
		content.add(info, BorderLayout.WEST);
		
		tabbed_panel = new JTabbedPane(JTabbedPane.BOTTOM);
		content.add(tabbed_panel, BorderLayout.CENTER);
		
		console = new ConsolePanel();
		tabbed_panel.addTab("Console", console);
		
		server = new Server(server_callback);
		server.start();
		
		players = new PlayersPanel(server);
		tabbed_panel.addTab("Players", players);
		
		setSize(new Dimension(400, 200));
		//this.setResizable(false);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setVisible(true);
	}
	
	ActionListener server_callback = new ActionListener() {
		@Override
		public void actionPerformed(ActionEvent e) {
			Session session;
			
			switch(e.getActionCommand()) {
			case "connect":
				session = (Session) e.getSource();
				info.addPlayer(session.account);
				players.addPlayer(session.account);
				break;
				
			case "disconnect":
				session = (Session) e.getSource();
				info.removePlayer(session.account);
				players.removePlayer(session.account);
				server.socket.sessions.remove(session);
				break;
			}
			
			info.updateSessionCount(server.socket.getSessions().size());
		}
	};
}
