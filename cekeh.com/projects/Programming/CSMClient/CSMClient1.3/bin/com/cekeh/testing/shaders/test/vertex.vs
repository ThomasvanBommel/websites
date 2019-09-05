//: Last edit 04/09/2018 - TvB
#version 150

in vec3 position;
in vec2 texcoord;

out vec3 pass_position;
out vec2 pass_texcoord;

void main(void){
	pass_position = position;
	pass_texcoord = texcoord;

	gl_Position = vec4(position, 1.0);
}