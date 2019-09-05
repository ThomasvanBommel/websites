package game.scenes;

import java.util.ArrayList;

import game.Model;
import game.Scene;

public class TestingScene implements Scene{

	//-List to hold all the models to be rendered
	ArrayList<Model> models = new ArrayList<Model>();
	
	//-Test model, infinitely thin square
	Model quad;
	
	//-Vertices for the quad model
	//-Starting top-left going clockwise
	float[] quad_vertices = {
			-0.5f, +0.5f, +0.0f,
			+0.5f, +0.5f, +0.0f,
			+0.5f, -0.5f, +0.0f,
			-0.5f, -0.5f, +0.0f
	};
	
	//-Triangle data for the quad model
	int[] quad_triangles = {
			0, 1, 3,
			3, 1, 2
	};
	
	//-UV data for the quad
	float[] quad_uvs = {
		0.0f, 1.0f,
		1.0f, 1.0f,
		1.0f, 0.0f,
		0.0f, 0.0f
	};
	
	//-Initialize the model so we have something to render
	public void init() {
		quad = new Model(quad_vertices, quad_triangles, quad_uvs);
		
		models.add(quad);
	}

	//-Update anything that needs updating
	public void update() {
		
	}

	//-Render everything after it's been updated
	//-Render all models in the scene
	public void render() {
		for(Model model: models) 
			model.render();
	}

	//-Destroy everything when instructed
	//-Destroy all models in the scene
	public void destroy() {
		for(Model model: models)
			model.destroy();
	}
}
