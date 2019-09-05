var plain = {
	//VERTEX SHADER SOURCE
	vss: void main(){
		gl_Position = ftransform();
	},
	
	//FRAGMENT SHADER SOURCE
	fss: void main(){
		gl_FragColor = vec4(1, 1, 1, 1);
	}
};