package game;

import java.awt.event.KeyListener;

import org.lwjgl.glfw.GLFW;
import org.lwjgl.glfw.GLFWKeyCallbackI;
import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL13;

import graphics.models.Model;
import graphics.models.Plane;
import graphics.shaders.ColoredShader;
import graphics.shaders.Shader;
import graphics.shaders.TestShader;
import graphics.shaders.TexturedShader;
import graphics.textures.Texture;

public class TestGame extends Game{

	long window_handle;
	
	Shader shader;
	Model model;
	
	Texture consolas, test;
	
	float[] matrix = {
			1.0f, 0.0f, 0.0f,
			0.0f, 1.0f, 0.0f,
			0.0f, 0.0f, 1.0f
	};
	
	public TestGame(long window_handle) {
		this.window_handle = window_handle;
	}
	
	//-Initialize everything
	@Override
	protected void init() {
		consolas = new Texture("images/fonts/test1.png");
		test = new Texture("images/test_paint.png");
		
		shader = new TestShader(consolas);
		model = new Plane(shader);
	}

	//-Update everything before the render
	@Override
	protected void update(double delta) {
		
		shader.setUniformMatrix3fv("matrix", matrix);
		
		GLFW.glfwSetKeyCallback(window_handle, key_callback);
	}

	//-Update what the player sees
	@Override
	protected void render() {
		model.render();
		
		//GL11.glColor3f(0.0f, 0.0f, 1.0f);
		
		test.bind(GL13.GL_TEXTURE0);
		
		GL11.glBegin(GL11.GL_QUADS);//start drawing a line loop
		  GL11.glTexCoord2f(0.0f, 0.0f);
	      GL11.glVertex3f(-1.0f,0.0f,0.0f);//left of window
	      
	      GL11.glTexCoord2f(1.0f, 0.0f);
	      GL11.glVertex3f(0.0f,-1.0f,0.0f);//bottom of window
	      
	      GL11.glTexCoord2f(1.0f, 1.0f);
	      GL11.glVertex3f(1.0f,0.0f,0.0f);//right of window
	      
	      GL11.glTexCoord2f(0.0f, 1.0f);
	      GL11.glVertex3f(0.0f,1.0f,0.0f);//top of window
	    GL11.glEnd();//end drawing of line loop
	}

	//-Clean up memory used
	@Override
	public void cleanUp() {
		model.cleanUp();
	}
	
	GLFWKeyCallbackI key_callback = new GLFWKeyCallbackI() {
		@Override
		public void invoke(long window, int key, int index, int action, int mods) {
			System.out.println(window + ", " + key + ", " + index + ", " + action + ", " + mods);
			
			switch(key) {
				case GLFW.GLFW_KEY_Q:
					
				break;
				case GLFW.GLFW_KEY_W:
					
				break;
				case GLFW.GLFW_KEY_E:

				break;
				case GLFW.GLFW_KEY_A:
					
				break;
				case GLFW.GLFW_KEY_S:
					
				break;
				case GLFW.GLFW_KEY_D:

				break;
				case GLFW.GLFW_KEY_Z:
					
				break;
				case GLFW.GLFW_KEY_X:
					
				break;
				case GLFW.GLFW_KEY_C:
				
				break;
			}
		}
	};
}
