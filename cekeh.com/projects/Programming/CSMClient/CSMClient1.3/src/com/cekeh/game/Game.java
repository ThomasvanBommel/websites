//: Last edit 04/10/2018 - TvB
package com.cekeh.game;

import static org.lwjgl.opengl.GL11.*;

import java.nio.IntBuffer;

import org.lwjgl.glfw.GLFWFramebufferSizeCallbackI;
import org.lwjgl.glfw.GLFWWindowSizeCallbackI;

import static org.lwjgl.glfw.GLFW.*;

import org.lwjgl.opengl.GL;
import org.lwjgl.opengl.GL11;

import com.cekeh.game.time.Time;

/**
 * Cekeh's Game class
 * 04/08/2018
 * @author Thomas vanBommel (TvB)
 */
public abstract class Game implements Runnable{
	
	//Reference ID and handler for the window
	private final long window_handle;
	
	//Should we break the game loop
	private boolean running = false;
	
	//Will give a steady FPS
	private Time time = new Time(60);
	
	private int width = 0;
	private int height = 0;
	
	/**
	 * Create a new game
	 * @param window_handle GLFW window handle/reference id
	 */
	protected Game(long window_handle) {
		this.window_handle = window_handle;
	}
	
	/**
	 * Initialize everything for the game starting with GLFW context
	 */
	protected void init() throws Exception{
		glfwSetFramebufferSizeCallback(window_handle, framebuffer_size_callback);
		glfwMakeContextCurrent(window_handle);
		
		GL.createCapabilities();
		
		glEnable(GL_BLEND);
		glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
	};
	
	/**
	 * Methods for updating, rendering and cleaning up the game
	 */
	protected abstract void update(double delta);
	protected abstract void render();
	protected abstract void cleanUp();
	
	/**
	 * Game loop
	 */
	@Override
	public void run() {
		try {
			init();
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
		
		running = true;
		
		while(running) {
			if(width != 0) {
				glViewport(0, 0, width, height);
				width = 0;
				height = 0;
			}
			
			time.update();
			
			update(time.getDeltaTime());
			
			glClear(GL_COLOR_BUFFER_BIT);
			
			render();
			
			glfwSwapBuffers(window_handle);
			
			time.sleep();
		}
		
		cleanUp();
	}
	
	/**
	 * Set the running status of the game
	 * The game will clean up when set to false
	 * @param running false=(stop running and clean up)
	 */
	public void setRunning(boolean running) {
		this.running = running;
	}
	
	//TODO: This is calling from the main thread...
	//Window size callback
	private GLFWFramebufferSizeCallbackI framebuffer_size_callback = new GLFWFramebufferSizeCallbackI() {
		@Override
		public void invoke(long handle, int window_width, int window_height) {
			width = window_width;
			height = window_height;
		}
	};
}
