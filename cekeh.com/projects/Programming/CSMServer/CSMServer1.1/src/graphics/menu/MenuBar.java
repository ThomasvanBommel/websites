package graphics.menu;

import javax.swing.JMenuBar;

@SuppressWarnings("serial")
public class MenuBar extends JMenuBar{

	FileMenu file = new FileMenu();
	
	public MenuBar() {
		add(file);
	}
}
