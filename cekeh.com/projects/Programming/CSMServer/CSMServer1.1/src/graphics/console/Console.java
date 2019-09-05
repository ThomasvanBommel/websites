package graphics.console;

import java.awt.Color;

import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.border.EmptyBorder;

@SuppressWarnings("serial")
public class Console extends JScrollPane{

	 static JTextArea text = new JTextArea("CSMServer 1.1");
	
	public Console() {
		setViewportView(text);
		
		text.setBackground(Color.black);
		text.setForeground(Color.green);
		text.setBorder(new EmptyBorder(5, 5, 5, 5));
	}
	
	public static void write(String string) {
		text.append("\n" + string);
		text.setCaretPosition(text.getDocument().getLength());
	}
}
