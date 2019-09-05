package graphics.window;

import game.Game;

import static org.lwjgl.glfw.GLFW.*;

public class Window{
	
	long window_id;
	
	public Window() throws Exception {
		if(!glfwInit())
			throw new Exception("GLFW has thrown an error");
		
		init();
	}
	
	void init() {
		window_id = glfwCreateWindow(800, 800, "CSMClient 1.0", 0, 0);
		
		new Game(window_id);
		
		loop();
		destroy();
	}
	
	public void loop() {
		while(!glfwWindowShouldClose(window_id)) {			
			glfwPollEvents();
			
			try {
				Thread.sleep(20);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public void destroy() {
		Game.RUNNING = false;
		
		glfwDestroyWindow(window_id);
		glfwTerminate();
	}
}
