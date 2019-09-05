package window;

import static org.lwjgl.glfw.GLFW.*;

import org.lwjgl.opengl.GL;

import game.Game;

public class Window{

	//-Window id to reference to GLFW
	long id;
	
	//-Game the player will see in the window
	Game game;
	
	//-Initializes GLFW (modern OpenGL display class)
	//-Creates a functioning window with pollEvents (close, minimize, maximize, move)
	
	public Window(String label, int width, int height) {
		if(!glfwInit())
			System.out.println("GLFW Error");
		
		id = glfwCreateWindow(width, height, label, 0, 0);
	}
	
	//-Waits for an event while the window should NOT close
	//-Stops game when the window should close
	public void pollEvents() {
		while(!glfwWindowShouldClose(id)) {
			glfwPollEvents();
		}
		
		game.setRunning(false);
	}
	
	//-Sets the current game
	public void setGame(Game game) {
		this.game = game;
	}
	
	public long getID() {
		return id;
	}
	
	//-Destroy the window and delete all dependencies
	//-Terminate GLFW
	public void destroy() {
		glfwDestroyWindow(id);
		glfwTerminate();
	}
}
