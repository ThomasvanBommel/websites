//: Last edit 04/10/2018 - TvB
package com.cekeh.main;

import static org.lwjgl.opengl.GL11.*;

import static org.lwjgl.glfw.GLFW.*;

import org.lwjgl.glfw.GLFWErrorCallback;
import org.lwjgl.glfw.GLFWWindowCloseCallbackI;
import org.lwjgl.glfw.GLFWWindowSizeCallbackI;
import org.lwjgl.opengl.GL11;

import com.cekeh.game.Game;
import com.cekeh.glfw.Window;
import com.cekeh.testing.TestGame;

/**
 * Cekeh's client program
 * 04/08/2018
 * @author Thomas vanBommel (TvB)
 * @author www.Cekeh.com
 */
public class Client {
	
	//Create window, reference ID and handler for that window
	final long window_handle;
	
	//Create the game to display on the client
	Game game;
	Thread game_thread;
	
	/**
	 * Entry point of the program
	 * @param args String arguments
	 * @throws Exception Information about the issue/s
	 */
	public static void main(String[] args) throws Exception {
		new Client().run();
	}

	/**
	 * Initialize the client program
	 * -Sets window callback's
	 * @throws Exception GLFW initialization error
	 */
	Client() throws Exception{
		window_handle = Window.createWindow();
		
		GLFWErrorCallback.createThrow().set();
		glfwSetWindowCloseCallback(window_handle, close_callback);
	}
	
	/**
	 * Start the first thread
	 * This thread will be responsible for window events
	 * Starts a second, gaming thread
	 * @throws Exception Unable to sleep
	 */
	void run() throws Exception{	
		game_thread = new Thread(game = new TestGame(window_handle));
		game_thread.start();
		
		while(!glfwWindowShouldClose(window_handle) && game_thread.isAlive()) {
			glfwPollEvents();
			
			Thread.sleep(20);
		}
		
		glfwDestroyWindow(window_handle);
		glfwTerminate();
	}

	/**
	 * GLFW window close callback
	 * @param handle Window handle/reference ID
	 */
	GLFWWindowCloseCallbackI close_callback = new GLFWWindowCloseCallbackI() {
		@Override
		public void invoke(long handle) {
			game.setRunning(false);
		}
	};
}
