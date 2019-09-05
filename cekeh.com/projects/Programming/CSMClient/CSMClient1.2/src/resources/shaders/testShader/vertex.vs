#version 150

in vec3 position;
in vec2 texcoord;

out vec2 texcoord_pass;

uniform mat3 matrix;

void main(void){
	gl_Position = vec4((vec3(position.xy, 1.0) * matrix).xy, 1.0, 1.0);
	
	texcoord_pass = texcoord;
}