package main;

import game.Game;
import game.scenes.TestingScene;
import window.Window;

public class Client{
	//-The window that will hold our games
	Window window = new Window("CSMClient 1.1", 300, 200);
	
	//-Main function, Program starting point
	//-Used new Client() so window doesn't have to be static
	public static void main(String[] args) {
		new Client();
	}
	
	//-Sets the default game for the player
	//-Polls window for events (close, minimize, maximize, move)
	Client(){		
		window.setGame(new Game(new TestingScene(), window.getID()));
		window.pollEvents();
		window.destroy();
	}
}
