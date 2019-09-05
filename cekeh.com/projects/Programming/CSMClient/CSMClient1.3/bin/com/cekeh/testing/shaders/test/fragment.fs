//: Last edit 04/10/2018 - TvB
#version 150

uniform vec4 color;

uniform sampler2D main_texture;

in vec3 pass_position;
in vec2 pass_texcoord;

out vec4 out_color;

void main(void){
	out_color = vec4(0.0, 1.0, 0.5, 1.0);
	
	out_color = color;
	
	if(pass_position.x > 0.0 && pass_position.y > 0.0){
		//out_color = vec4(0.0, 1.0, 0.0, 1.0);
	}
	
	out_color.rg = pass_texcoord;
	
	out_color.b = 0.0;
	
	//out_color = texture(main_texture, pass_texcoord);
}