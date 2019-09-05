//: Last edit 04/09/2018 - TvB
package com.cekeh.testing.shaders.test;

import static org.lwjgl.opengl.GL13.*;

import com.cekeh.game.graphics.shader.Shader;
import com.cekeh.game.texture.Texture;
import com.cekeh.utility.data_type.Vector4f;

/**
 * Cekeh's Test Shader
 * 04/09/2018
 * @author Thomas vanBommel (TvB)
 */
public class TestShader extends Shader{

	private static final String VERTEX_FILE_PATH = "src/com/cekeh/testing/shaders/test/vertex.vs";
	private static final String FRAGMENT_FILE_PATH = "src/com/cekeh/testing/shaders/test/fragment.fs";
	
	Texture main_texture;
	
	public TestShader() throws Exception {
		super(VERTEX_FILE_PATH, FRAGMENT_FILE_PATH);
		
		main_texture = new Texture("/com/cekeh/testing/images/test_01.png");
		
		setUniform4f("color", new Vector4f(1.0f, 0.0f, 0.5f, 1.0f));
		setUniform1i("main_texture", main_texture.getHandle());
	}
	
	@Override
	public void bind() {
		super.bind();
		
		main_texture.bind(GL_TEXTURE0);
	}
	
	@Override
	public void unbind() {
		super.unbind();
		
		main_texture.unbind();
	}
	
	@Override
	public void cleanUp() {
		super.cleanUp();
		
		main_texture.cleanUp();
	}
}
