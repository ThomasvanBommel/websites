var Buttons = [];

class SlotMachine{    
	constructor(canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
    
    update(){
        this.header.update(this.canvas);
        this.body.update(this.canvas);
        this.footer.update(this.canvas);
    }
    
    draw(images){
        this.body.draw(this.context, images);
        this.header.draw(this.context);
        this.footer.draw(this.context);
    }
    
    spin(){
        this.body.spin();
    }
    
    click(info){
        Buttons.forEach(function(button){
            button.click(info.x, info.y);
        });
    }
    
    move(info){
        Buttons.forEach(function(button){
            button.move(info.x, info.y);
        });
    }
}

class Header{
    constructor(){
        this.boxes = [
            new Box(0.01, 0.01, 0.98, 0.085, "#FFF", 1, "#4c565b", "#FFF", "WIN UP TO $1,000,000!"),
            new Box(0.01, 0.105, 0.98, 0.085, "#FFF", 1, "#4c565b", "#FFF", "$12")
        ];
    }
    
    update(canvas){
        this.width = canvas.width;
        this.height = canvas.height * 0.2;
        
        this.boxes.forEach(function(box){
            box.update(canvas);
        });
    }
    
    draw(context){
        /* Backgronud color */
        context.fillStyle = "#296f93";
        context.fillRect(0, 0, this.width, this.height);
        
        this.boxes.forEach(function(box){
            box.draw(context);
        });
    }
}

class Body{
    constructor(){
        this.reels = [ 
            new Reel(0, this, 0.010, 0.21, 0.196, 0.58), 
            new Reel(1, this, 0.206, 0.21, 0.196, 0.58), 
            new Reel(2, this, 0.402, 0.21, 0.196, 0.58),
            new Reel(3, this, 0.598, 0.21, 0.196, 0.58), 
            new Reel(4, this, 0.794, 0.21, 0.196, 0.58)
        ];
        
        this.spinning = false;
    }
    
    update(canvas){
        /* Update the size and position of the body */
        this.width = canvas.width;
        this.height = canvas.height * 0.6;
        
        this.x = 0;
        this.y = (canvas.height - this.height) / 2;
        
        this.borderx = canvas.width * 0.01;
        this.bordery = canvas.height * 0.01;
        
        var is_spinning = false;
        this.reels.forEach(function(reel){
            reel.update(canvas);
            
            if(reel.spinning){
                is_spinning = true;
            }
        });
        
        this.spinning = is_spinning;
    }
    
    draw(context, images){
        /* Backgronud color */
        context.fillStyle = "#3c9fd2";
        context.fillRect(this.x, this.y, this.width, this.height);
        
        /* Darker background color */
        context.fillStyle = "#1f5977";
        context.fillRect(this.x + this.borderx, this.y + this.bordery, this.width - this.borderx * 2, this.height - this.bordery * 2);

        /* Reels */
        this.reels.forEach(function(reel){
            reel.draw(context, images);
        });
    }
    
    spin(){
        if(!this.spinning){
            this.reels.forEach(function(reel){
                reel.spin(); 
            });
        }
    }
}

class Reel{
    constructor(index, body, px, py, pwidth, pheight){
        this.index = index;
        this.body = body;
        
        this.px = px;
        this.py = py;
        this.pwidth = pwidth;
        this.pheight = pheight;
        
        this.showing_faces = 3;
        this.spinning = false;
        this.spin_count = 0;
        
        this.symbols = [
            new Symbol(0, this), 
            new Symbol(1, this), 
            new Symbol(2, this), 
            new Symbol(3, this), 
            new Symbol(4, this)
        ];
    }
    
    update(canvas){
        this.width = canvas.width * this.pwidth;
        this.height = canvas.height * this.pheight;
        
        this.x = canvas.width * this.px;
        this.y = canvas.height * this.py;
        
        this.borderx = canvas.width * 0.01;
        this.bordery = canvas.height * 0.01;
        
        this.spin_count = this.spin_count > 0 ? this.spin_count - 1 : 0;
        this.spinning = this.spin_count > 0 ? true : false;
        
        if(this.spin_count > 0){
            this.spin();
        }
        
        this.symbols.forEach(function(symbol){
            symbol.update(canvas);
        });
    }
    
    draw(context, images){
        /* Background color */
        context.fillStyle = "#FFF";
        context.fillRect(this.x + this.borderx, this.y + this.bordery, this.width - this.borderx * 2, this.height - this.bordery * 2);
        //context.fillRect(this.x, this.y, this.width, this.height);
        
        /* Symbols */
        this.symbols.forEach(function(symbol){
            symbol.draw(context, images);
        });
    }
    
    spin(){
        if(!this.spinning){
            this.spinning = true;
            this.spin_count = Math.floor(Math.random() * 100);
        }
        
        this.symbols.forEach(function(symbol){
            symbol.spin();
        });

        this.symbols = [
            new Symbol(0, this),
            this.symbols[0],
            this.symbols[1],
            this.symbols[2],
            this.symbols[3]
        ];
    }
}

class Symbol{
    constructor(index, reel){
        this.index = index;
        this.reel = reel;
        
        this.random = Math.floor(Math.random() * 6);
    }
    
    update(canvas){
        this.width = this.reel.width;
        this.height = (this.reel.height / this.reel.showing_faces);
        
        this.x = this.reel.x;
        this.y = (this.reel.y - this.height) + this.height * this.index;
    }
    
    draw(context, images){
        var center_index = Math.floor(this.reel.symbols.length / 2);
        
        if(this.index == center_index){
            context.strokeStyle = "#F00";
            context.beginPath();
            context.moveTo(this.x, this.y + (this.height / 2));
            context.lineTo(this.x + this.width, this.y + (this.height / 2));
            context.stroke();
        }
        
        /* Image */
        context.drawImage(images[this.random], this.x, this.y, this.width, this.height);
    }
    
    spin(){
        this.index++;        
    }
}

class Footer{
    constructor(){
        this.boxes = [
            new Box(0.01, 0.81, 0.32, 0.085, "#FFF", 1, "#4c565b", "#FFF", "9       40"),
            new Box(0.67, 0.81, 0.32, 0.085, "#FFF", 1, "#4c565b", "#FFF", "360     0")
        ];
        
        this.spin_button = new BlueButton(0.34, 0.81, 0.32, 0.085, "SPIN", function(){
            machine.spin();
        });
        
        this.buttons = [
            new BlueButton(0.010, 0.905, 0.089, 0.085, "0"),
            new BlueButton(0.109, 0.905, 0.089, 0.085, "1"),
            new BlueButton(0.208, 0.905, 0.089, 0.085, "2"),
            new BlueButton(0.307, 0.905, 0.089, 0.085, "3"),
            new BlueButton(0.406, 0.905, 0.089, 0.085, "4"),
            new BlueButton(0.505, 0.905, 0.089, 0.085, "5"),
            new BlueButton(0.604, 0.905, 0.089, 0.085, "6"),
            new BlueButton(0.703, 0.905, 0.089, 0.085, "7"),
            new BlueButton(0.802, 0.905, 0.089, 0.085, "8"),
            new BlueButton(0.901, 0.905, 0.089, 0.085, "9")
        ];
    }
    
    update(canvas){
        this.width = canvas.width;
        this.height = canvas.height * 0.2;
        
        this.x = 0;
        this.y = canvas.height - this.height;
        
        this.boxes.forEach(function(box){
            box.update(canvas);
        });
        
        this.spin_button.update(canvas);
        
        this.buttons.forEach(function(button){
            button.update(canvas);
        });
    }
    
    draw(context){
        /* Backgronud color */
        context.fillStyle = "#296f93";
        context.fillRect(this.x, this.y, this.width, this.height);
                         
        this.boxes.forEach(function(box){
            box.draw(context);
        });
        
        this.spin_button.draw(context);
        
        this.buttons.forEach(function(button){
            button.draw(context);
        });
    }
}

class Box{
    constructor(px, py, pwidth, pheight, outline_color, outline_size, background_color, text_color, info){
        this.px = px;
        this.py = py;
        this.pwidth = pwidth;
        this.pheight = pheight;
        this.outine_color = outline_color;
        this.outline_size = outline_size;
        this.background_color = background_color;
        this.text_color = text_color;
        this.info = info;
    }
    
    update(canvas){
        this.x = canvas.width * this.px;
        this.y = canvas.height * this.py;
        this.width = canvas.width * this.pwidth;
        this.height = canvas.height * this.pheight;
        
        this.textx = this.width / 2 + this.x;
        this.texty = this.y + this.height - (this.height * 0.15);
    }
    
    draw(context){
        /* Outline */
        context.fillStyle = this.outine_color;
        context.fillRect(this.x - this.outline_size, this.y - this.outline_size, this.width +  this.outline_size * 2, this.height + this.outline_size * 2);
        
        /* Background color */
        context.fillStyle = this.background_color;
        context.fillRect(this.x, this.y, this.width, this.height);
        
        /* Info */
        context.fillStyle = this.text_color;
        context.font = this.height + "px Arial";
        context.textAlign = "center";
        context.fillText(this.info, this.textx, this.texty);
    }
}

class Button extends Box{
    constructor(px, py, pwidth, pheight, outline_color, outline_size, background_color, text_color, info, click_function){
        super(px, py, pwidth, pheight, outline_color, outline_size, background_color, text_color, info);
        
        this.click_function = click_function;
        this.clicked = false;
        this.hovering = false;
        
        Buttons.push(this);
    }
    
    update(canvas){
        super.update(canvas);
        
        this.background_color = this.hovering ? (this.clicked ? "000" : "#DDD") : "#a2cde3";
    }
    
    click(x, y){
        if(x >= this.x && x <= this.x + this.width &&
           y >= this.y && y <= this.y + this.height){
            this.clicked = true;
            this.click_function();
        }else{
            this.clicked = false;
        }
    }
    
    move(x, y){
        if(x >= this.x && x <= this.x + this.width &&
           y >= this.y && y <= this.y + this.height){
            this.hovering = true;
        }else{
            this.hovering = false;
        }
    }
}

class BlueButton extends Button{    
    constructor(px, py, pwidth, pheight, info, click_functon){
        super(px, py, pwidth, pheight, "#FFF", 1, "#a2cde3", "#296f93", info, click_functon);
    }
}