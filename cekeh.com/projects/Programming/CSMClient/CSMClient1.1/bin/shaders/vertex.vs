#version 150

in vec3 position;
in vec2 texcoord;

out vec2 texcoord_pass;

void main(void){
	gl_Position = vec4(position.xyz, 1.0);
	
	texcoord_pass = texcoord;
}