package game;

import static time.Time.*;

import org.lwjgl.glfw.GLFW;
import org.lwjgl.opengl.GL;
import org.lwjgl.opengl.GL11;

import graphics.gui.GUI;
import user.BouncingQuad;

public class Game implements Runnable{

	public static boolean RUNNING = false;
	
	long window_id;

	GUI gui = new GUI();
	
	BouncingQuad bouncing_quad = new BouncingQuad();
	
	public Game(long window_id) {
		this.window_id = window_id;

		RUNNING = true;
		new Thread(this).start();
	}

	@Override
	public void run() {
		init();

		while(RUNNING) {
			timeUpdate();
			
			update();
			render();
			
			timeSleep();
		}
		
		destroy();
	}
	
	void init() {
		GLFW.glfwMakeContextCurrent(window_id);
		GL.createCapabilities();
		
		gui.init();
	}
	
	void update() {
		bouncing_quad.update();
	}
	
	void render() {
		GL11.glClear(GL11.GL_COLOR_BUFFER_BIT);
		
		bouncing_quad.render();

		gui.render();
		
		GLFW.glfwSwapBuffers(window_id);
	}
	
	void destroy() {
		gui.destroy();
		
		System.out.println("Destroyed game.");
	}
}
