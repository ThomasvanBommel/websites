package gui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;

import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

import user.Account;

@SuppressWarnings("serial")
public class InformationPanel extends JPanel{
	
	int player_count = 0;
	
	//JPanel session_panel = entry("Sessions: ", session_count);
	//JPanel player_panel = entry("Players: ", player_count);
	
	JLabel session_label = new JLabel("0");
	JLabel player_label = new JLabel("0");
	
	public InformationPanel() {
		setBorder(new EmptyBorder(5, 5, 5, 5));
		setLayout(new BoxLayout(this, 1));

		add(entry("Sessions: ", session_label));
		add(entry("Players: ", player_label));
		add(Box.createRigidArea(new Dimension(0, 140)));
	}
	
	JPanel entry(String title, JLabel data) {
		JPanel panel = new JPanel(new BorderLayout());
		
		panel.add(new JLabel(title), BorderLayout.WEST);
		panel.add(data, BorderLayout.EAST);
		
		return panel;
	}
	
	public void updateSessionCount(int count) {
		session_label.setText(Integer.toString(count));
		session_label.revalidate();
	}
	
	void updatePlayerCount() {
		player_label.setText(Integer.toString(player_count));
		player_label.revalidate();
	}
	
	public void addPlayer(Account account) {
		String name = "Unknown user";
		
		if(account != null) {
			player_count++;
			updatePlayerCount();
			name = account.getUsername();
		}
		
		System.out.println("[" + name + "] connected.");
	}
	
	public void removePlayer(Account account) {
		String name = "Unknown user";
		
		if(account != null) {
			player_count--;
			updatePlayerCount();
			name = account.getUsername();
		}
		
		System.out.println("[" + name + "] disconnected.");
	}
}
