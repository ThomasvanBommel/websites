#ifdef GL_ES
precision mediump float;
#endif

uniform vec4 u_color;

void main(void){
	gl_FragColor = vec4(1, 0, 0, 1);
}