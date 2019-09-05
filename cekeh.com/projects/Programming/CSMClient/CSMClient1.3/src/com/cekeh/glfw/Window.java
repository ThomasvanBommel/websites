//: Last edit 04/09/2018 - TvB
package com.cekeh.glfw;

import static org.lwjgl.glfw.GLFW.*;

/**
 * Cekeh's utilities
 * 04/08/2018
 * @author Thomas vanBommel (TvB)
 */
public class Window {
	
	public static final int DEFAULT_WINDOW_WIDTH = 400;
	public static final int DEFAULT_WINDOW_HEIGHT = 300;

	/**
	 * Create a new GLFW window with specified width and height
	 * @param width Width of the window
	 * @param height Height of the window
	 * @return Returns the window handler/reference id
	 * @throws Exception Unable to initialize GLFW
	 */
	public static long createWindow(int width, int height) throws Exception {
		if(!glfwInit())
			throw new Exception("Window.createWindow(): unable to initialize GLFW");
	
		long handle = glfwCreateWindow(width, height, "CSMClient v1.3", 0, 0);
	
		if(handle == -1)
			throw new Exception("Window.createWindow(): window handle is negative");
		
		return handle;
	}
	
	/**
	 * Create a new GLFW window with the default size
	 * @return Returns the window handler/reference id
	 * @throws Exception Unable to initialize GLFW
	 */
	public static long createWindow() throws Exception {
		return createWindow(
				DEFAULT_WINDOW_WIDTH,
				DEFAULT_WINDOW_HEIGHT
		);
	}
}
