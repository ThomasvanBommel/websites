package gui;

import java.awt.BorderLayout;
import java.util.ArrayList;

import javax.swing.BoxLayout;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;

import connections.Server;
import user.Account;

@SuppressWarnings("serial")
public class PlayersPanel extends JScrollPane{

	JPanel content;
	
	ArrayList<Account> accounts = new ArrayList<Account>();
	
	public PlayersPanel(Server server) {		
		content = new JPanel();
		content.setLayout(new BoxLayout(content, 1));
				
		setViewportView(content);
	}
	
	public void addPlayer(Account account) {
		accounts.add(account);
		content.add(createPanel(account));
		
		content.revalidate();
	}
	
	public void removePlayer(Account account) {
		accounts.remove(account);
		update();
	}
	
	void update() {
		content.removeAll();
		
		for(int i = 0; i < accounts.size(); i++) {
			if(accounts.get(i) != null) {
				content.add(createPanel(accounts.get(i)));
			}
		}
		
		content.revalidate();
		content.repaint();
	}
	
	JPanel createPanel(Account account) {
		JPanel panel = new JPanel(new BorderLayout());
		
		JLabel username = new JLabel(account.getUsername());
		
		panel.add(username, BorderLayout.WEST);
		
		return panel;
	}
}