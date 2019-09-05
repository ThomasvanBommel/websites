class Time{
    constructor(fps){
        this.fps = fps;
        
        Time.deltatime = 1;
        this.then = Date.now();
    }
    
    tick(){
        var now = Date.now();
        Time.deltatime = (now - this.then) / (1000 / 60);
        this.then = now;
    }
}