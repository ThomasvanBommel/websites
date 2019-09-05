import { Transform } from "./transform.js";

class Shooter{
    contructor(){
        this.transform = new Transform();
    }
    
    render(ctx){
        ctx.fillStyle = "#f0f";
//        ctx.fillRect(this.transform.position[0], this.transform.position[1], 50, 50);
        console.log(this.transoform);
    }
}

export { Shooter };