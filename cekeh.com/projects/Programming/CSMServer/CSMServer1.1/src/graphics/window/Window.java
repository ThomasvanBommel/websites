package graphics.window;

import java.awt.BorderLayout;
import java.awt.Dimension;

import javax.swing.JFrame;

import graphics.console.Console;
import graphics.menu.MenuBar;

@SuppressWarnings("serial")
public class Window extends JFrame{

	MenuBar menu = new MenuBar();
	Console console = new Console();
	
	public Window() {
		super("CSMServer 1.1");
		
		setSize(new Dimension(1000, 800));
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(new BorderLayout());
		setVisible(true);
		
		setJMenuBar(menu);
		
		add(console);
	}
}
