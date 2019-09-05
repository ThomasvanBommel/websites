//: Last edit 04/10/2018 - TvB
package com.cekeh.testing.models.test;

import static org.lwjgl.opengl.GL15.*;

import com.cekeh.game.graphics.vertex_object.VAO;
import com.cekeh.testing.shaders.test.TestShader;

/**
 * Cekeh's Test model
 * 04/09/2018
 * @author Thomas vanBommel (TvB)
 */
public class TestModel extends VAO {

//	-1.0f,  1.0f, 0.0f,
//	 1.0f,  1.0f, 0.0f,
//	 1.0f, -1.0f, 0.0f,
//	-1.0f, -1.0f, 0.0f
	private static final float[] vertices = {
		-0.5f, -0.5f, 0.0f,
		-0.5f,  0.5f, 0.0f,
		 0.5f,  0.5f, 0.0f,
		 0.5f, -0.5f, 0.0f
	};
	
	private static final int[] indices = {
		0, 1, 2,
		2, 3, 0
	};
	
	private static final float[] texcoords = {
		1.0f, 0.0f,
		0.0f, 0.0f,
		0.0f, 0.0f,
		0.0f, 0.0f
	};
	
	public TestModel() throws Exception {
		super(vertices, indices, new TestShader());
		
		//bind();
		addAttributefv(texcoords, 2, GL_ARRAY_BUFFER);
		//unbind();
	}
}
