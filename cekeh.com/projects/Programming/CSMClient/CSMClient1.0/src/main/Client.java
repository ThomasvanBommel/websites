package main;

import graphics.window.Window;

public class Client{

	static Window window;
	
	public static void main(String[] args) {
		try {
			window = new Window();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
