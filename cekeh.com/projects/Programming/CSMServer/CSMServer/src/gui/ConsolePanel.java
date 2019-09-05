package gui;

import java.io.PrintStream;

import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.border.EmptyBorder;

import console.ConsoleOutputStream;

@SuppressWarnings("serial")
public class ConsolePanel extends JScrollPane{

	public JTextArea text;
	
	private PrintStream stream;
	
	public ConsolePanel() {
		text = new JTextArea();
		text.setBorder(new EmptyBorder(5, 5, 5, 5));
		
		this.stream = new PrintStream(new ConsoleOutputStream(text));
		System.setOut(stream);
		System.setErr(stream);
		
		this.setViewportView(text);
	}
}
