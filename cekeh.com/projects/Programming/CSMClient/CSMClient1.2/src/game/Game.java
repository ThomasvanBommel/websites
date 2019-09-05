package game;

import org.lwjgl.glfw.GLFW;
import org.lwjgl.opengl.GL;
import org.lwjgl.opengl.GL11;

import main.Client;
import time.Time;

public abstract class Game implements Runnable{

	//-The thread this script is running on
	private Thread thread;
	
	//-Weather or not to break the game loop
	private boolean running = true;
	
	//-Time helps us maintain TARGET_FPS as long as we update, and sleep properly
	private Time time = new Time(60, false);
	
	//-Create a new thread for our game, the main thread is tied up with window commands
	protected Game() {
		thread = new Thread(this);
		thread.start();
	}

	//-Initialization and game loop
	public void run() {
		System.out.println("Game loop starts");
		
		if(Client.window != null) {
			GLFW.glfwMakeContextCurrent(Client.window.getID());
			GL.createCapabilities();
			
			GL11.glEnable(GL11.GL_TEXTURE_2D);
		}
			
		init();
		
		while(running) {
			time.update();
			
			update(time.getDeltaTime());
			
			GL11.glClear(GL11.GL_COLOR_BUFFER_BIT);
			render();
			GL11.glFlush();
			
			GLFW.glfwSwapBuffers(Client.window.getID());
			
			time.sleep();
		}

		cleanUp();
		
		System.out.println("Game loop ends");
	}
	
	protected abstract void init();
	protected abstract void update(double delta);
	protected abstract void render();
	
	public abstract void cleanUp();
	
	//-Close the game from another thread
	public boolean terminate() {
		running = false;
		
		return !thread.isAlive();
	}
}
