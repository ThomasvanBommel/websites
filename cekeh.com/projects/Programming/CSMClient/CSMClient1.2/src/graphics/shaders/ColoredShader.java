package graphics.shaders;

public class ColoredShader extends Shader{

	float[] main_color;
	
	public ColoredShader(float[] main_color) {
		super("shaders/coloredShader/vertex.vs", "shaders/coloredShader/fragment.fs");
	
		setUniformfv("main_color", main_color);
	}
}
