package game;

import java.util.ArrayList;

public interface Scene {

	//-List of models we will need to render
	ArrayList<Model> models = new ArrayList<Model>();
	
	//-Initialize the scene before any graphics
	public void init();
	
	//-Update positions, rotations, scales, textures, etc...
	public void update();
	
	//-Render all the new information
	public void render();
	
	//-Destroy all dependencies
	public void destroy();
}
