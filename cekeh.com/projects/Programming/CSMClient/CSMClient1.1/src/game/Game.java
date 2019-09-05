package game;

import static org.lwjgl.glfw.GLFW.glfwMakeContextCurrent;

import org.lwjgl.glfw.GLFW;
import org.lwjgl.glfw.GLFWErrorCallback;
import org.lwjgl.opengl.GL;
import org.lwjgl.opengl.GL11;

import window.Window;

public class Game implements Runnable{
	
	long window_id;
	
	//-True when the game should be running, and false when it should NOT
	boolean running = false;
	
	Scene current_scene;
	
	//-Creates a new thread for all game updates
	//-Done this because the window needs the main thread
	public Game(Scene default_scene, long window_id) {
		this.window_id = window_id;
		
		current_scene = default_scene;
		
		new Thread(this).start();
		//run();
	}

	//-Called when the game is started, which is also when its created
	//-Initializes the game
	//-Runs game loop until running = false
	//-Destroys all dependencies
	public void run() {
		running = true;
		
		init();
		update();
		destroy();
	}
	
	//-Tell openGL we're going to talk about the window context
	//-Set openGL context on this thread for rendering
	//-Initialize the current scene
	void init() {
		glfwMakeContextCurrent(window_id);
		GL.createCapabilities();
		
		current_scene.init();
	}
	
	//-Update the game before rendering
	//-Update the current scene=
	//-Destroy window when running == false
	void update() {
		while(running) {
			current_scene.update();
			
			render();
			
			try {
				Thread.sleep(50);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	//-Render the game so the player knows what's going on
	//-Render the current scene
	void render() {
		GL11.glClear(GL11.GL_COLOR_BUFFER_BIT);
		
		current_scene.render();
		
		GLFW.glfwSwapBuffers(window_id);
	}
	
	//-Destroy all dependencies (remove everything from memory)
	//-Destroy the current scene
	void destroy() {
		current_scene.destroy();
	}
	
	//-Change the running state of the game
	public void setRunning(boolean running) {
		this.running = running;
	}
}
