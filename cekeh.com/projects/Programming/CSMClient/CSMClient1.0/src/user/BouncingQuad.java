package user;

import static org.lwjgl.opengl.GL11.*;

import time.Time;

public class BouncingQuad {

	float size = 0.1f;
	float half = size / 2f;
	
	float[] position = { -0.8f, 0.8f };
	float[] velocity = { 1.0f, 0.6f };
		
	public BouncingQuad() {}
	
	public void update() {
		if(position[0] >= 1f - half || position[0] <= -1f + half) {
			velocity[0] *= -1f;
		}
		
		if(position[1] >= 1f - half || position[1] <= -1f + half) {
			velocity[1] *= -1f;
		}
		
		//System.out.println(position[0] + ", " + position[1]);
		
		position[0] += velocity[0] * Time.DELTA;
		position[1] += velocity[1] * Time.DELTA;
	}
	
	public void render() {
		glBegin(GL_QUADS);

		glColor4f(0.0f, 1.0f, 0.0f, 1.0f);
		
		glVertex2f(position[0] - half, position[1] + half);
		glVertex2f(position[0] + half, position[1] + half);
		glVertex2f(position[0] + half, position[1] - half);
		glVertex2f(position[0] - half, position[1] - half);
		
		glEnd();
	}
}
