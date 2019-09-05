#version 150

in vec2 texcoord_pass;

out vec4 out_color;

uniform sampler2D _mainTex;

void main(void){
	vec4 color = vec4(1.0, 1.0, 0.0, 1.0);

	out_color = texture(_mainTex, texcoord_pass);
	//out_color = vec4(texcoord_pass, 0.0, 1.0);
}