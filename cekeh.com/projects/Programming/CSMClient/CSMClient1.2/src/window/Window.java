package window;

import org.lwjgl.glfw.GLFW;
import org.lwjgl.glfw.GLFWKeyCallbackI;
import org.lwjgl.glfw.GLFWWindowCloseCallbackI;
import org.lwjgl.glfw.GLFWWindowSizeCallbackI;

public class Window {
	
	//-Whether or not to close the window
	private boolean close_window = false;
	
	//-ID for referencing to GLFW
	final long id;
	
	//-Create a GLFW window
	public Window(int width, int height, String title) {
		if(!GLFW.glfwInit()) {
			id = -1;
			return;	
		}
		
		id = GLFW.glfwCreateWindow(width, height, title, 0, 0);
		
		GLFW.glfwSetWindowCloseCallback(id, window_close_callback);
		GLFW.glfwSetWindowSizeCallback(id, window_resize_callback);
	}

	//-Wait for input on the window, minimize, maximize, move, exit...
	public void pollEvents() {
		while(!GLFW.glfwWindowShouldClose(id)) {
			GLFW.glfwPollEvents();
			
			if(close_window)
				return;
			
			try {
				Thread.sleep(20);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	//-Window close callback
	private GLFWWindowCloseCallbackI window_close_callback = new GLFWWindowCloseCallbackI() {
		@Override
		public void invoke(long window) {
			close_window = true;
		}
	};
	
	//-Window resize callback
	private GLFWWindowSizeCallbackI window_resize_callback = new GLFWWindowSizeCallbackI() {
		@Override
		public void invoke(long window, int width, int height) {
			System.out.println(width + ", " + height);
		}
	};
	
	//-Clean up the memory used by the window
	public void cleanUp() {
		GLFW.glfwDestroyWindow(id);
		GLFW.glfwTerminate();
	}
	
	//-Get GLFW reference ID
	public long getID() {
		return id;
	}
}
