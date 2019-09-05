
class Background{

	constructor(canvas){
		this.canvas = canvas;

		this.particles = [new Particle, new Particle, new Particle, new Particle, new Particle, new Particle, new Particle, new Particle, new Particle, new Particle];
	
		this.collected = 0;
	}

	update(ctx, mouse){
		var me = this;
		this.particles.forEach(function(particle){
			if(particle.contains(mouse.position)){
				particle.reset();

				me.collected++;
				
			}

			particle.update();
			particle.draw(ctx);
		});

		document.getElementById('Collected').innerHTML = me.collected;
	}
}