package console;

import java.io.IOException;
import java.io.OutputStream;

import javax.swing.JTextArea;

public class ConsoleOutputStream extends OutputStream {
	
	JTextArea text_area;
	
	public ConsoleOutputStream(JTextArea text_area) {
		this.text_area = text_area; 
	}

	@Override
	public void write(int data) throws IOException {
		text_area.append(String.valueOf((char)data));
		text_area.setCaretPosition(text_area.getDocument().getLength());
	}
}
