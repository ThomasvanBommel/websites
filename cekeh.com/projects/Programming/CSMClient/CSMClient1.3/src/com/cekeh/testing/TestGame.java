//: Last edit 04/10/2018 - TvB
package com.cekeh.testing;

import static com.cekeh.utility.Log.*;

import com.cekeh.game.Game;
import com.cekeh.game.graphics.shader.Shader;
import com.cekeh.game.graphics.vertex_object.VAO;
import com.cekeh.testing.models.test.TestModel;
import com.cekeh.testing.shaders.test.TestShader;

/**
 * Cekeh's Test Game
 * 04/08/2018
 * @author Thomas vanBommel (TvB)
 */
public class TestGame extends Game {

	VAO model;
	
	public TestGame(long window_handle) throws Exception {
		super(window_handle);
		
		print("New Game");
	}

	@Override
	protected void init() throws Exception{
		super.init();
		
		model = new TestModel();
		
		print("Init Game");
		
		int i = 0;
		System.out.println(i++);
		System.out.println(i++);
	}

	@Override
	protected void update(double delta) {
		
	}

	@Override
	protected void render() {
		model.render();
	}

	@Override
	protected void cleanUp() {
		print("Clean up Game");
		
		model.cleanUp();
	}
}
