package graphics.shaders;

import org.lwjgl.opengl.GL13;

import graphics.textures.Texture;

public class TestShader extends Shader{

	Texture main_texture;
	
	public TestShader(Texture main_texture) {
		super("shaders/testShader/vertex.vs", 
				"shaders/testShader/fragment.fs");
		
		this.main_texture = main_texture;
		
		setUniformi("main_texture", 0);
	}
	
	@Override
	public void bind() {
		super.bind();
		
		main_texture.bind(GL13.GL_TEXTURE0);
	}
	
	@Override
	public void cleanUp() {
		main_texture.cleanUp();
	}
}
