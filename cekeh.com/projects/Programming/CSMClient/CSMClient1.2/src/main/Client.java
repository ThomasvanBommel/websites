package main;

import game.Game;
import game.TestGame;
import window.Window;

public class Client {

	//-Create a window to place everything onto
	public static Window window = new Window(500, 500, "CSMClient v1.2");
	
	//-Create a game to put in the window
	private Game game = new TestGame(window.getID());
	
	//-Entry to our program, create a new Client (this)
	public static void main(String[] args) {
		new Client().start();
	}
	
	//-Start the client, this is where the main loop is
	private void start() {
		System.out.println("Main loop starts");
		
		if(window != null)
			window.pollEvents();
			
		terminate("End of main loop");
	
		System.out.println("Main loop ends");
	}
	
	//-Will close everything and clean up the memory
	private void terminate(String reason) {
		System.out.println("Terminated(" + reason + ")");
		
		if(game != null)
			while(!game.terminate()) {
				try {
					Thread.sleep(20);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		
		if(window != null)
			window.cleanUp();
		
		//System.exit(-1);
	}
}
