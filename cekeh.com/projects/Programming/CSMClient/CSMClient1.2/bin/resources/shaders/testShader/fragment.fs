#version 150

in vec2 texcoord_pass;

out vec4 out_color;

uniform sampler2D main_texture;

void main(void){
	vec4 main_color = texture(main_texture, texcoord_pass);
	out_color = main_color;
	
	//float sum = main_color.r + main_color.g + main_color.b + main_color.a;
	//sum *= 100;
	
	//out_color = vec4(0.0, 0.0, 1.0, 1.0);
}