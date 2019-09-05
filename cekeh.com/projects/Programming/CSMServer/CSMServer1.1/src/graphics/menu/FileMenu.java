package graphics.menu;

import javax.swing.JMenu;
import javax.swing.JMenuItem;

@SuppressWarnings("serial")
public class FileMenu extends JMenu{

	JMenuItem save = new JMenuItem("Save");
	JMenuItem load = new JMenuItem("Load");
	JMenuItem quit = new JMenuItem("Quit");
	
	public FileMenu() {
		super("File");
		
		add(save);
		add(load);
		add(quit);
	}
}
