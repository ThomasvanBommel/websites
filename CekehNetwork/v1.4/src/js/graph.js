

class Graph{

	//Graph(element, array[]);
	constructor(div, points){
		this.points = points;//Plot points for the graph, just an array of Int's
		this.radius = 10;
		this.diameter = this.radius * 2;

		this.div = div;//Where we are putting the graph
		this.count = points.length;//How many points we're graphing

		this.PPW = 10;//Points Per Width (100%)
		this.PPH = Math.max.apply(Math, points);//Points Per Height

		this.graph_width = div.offsetWidth;//Size of the 'div' element
		this.graph_height = div.offsetHeight - this.diameter;

		this.point_width = (this.graph_width / this.PPW);//Size of the SVG element
		this.point_height = (this.graph_height / this.PPH);

		this.container = new Container(this);//HTML to add to the 'div' element
		this.container.Fill(this.CreatePoints(points));
		this.container.Close();

		div.innerHTML = this.container.GetHTML();
	}

	CreatePoints(points){
		var graphed_points = new Array();
		var html = '';

		for(var i = 0; i < this.count; i++){
			var point = new Point(this, i);
			html += point.html;
			html += new Line(this, i).html;

			graphed_points[i] = {
				x : point.x,
				y : point.y,
				src : point.html
			};
		}

		this.graphed_points = graphed_points;
		return html;
	}
}

//--------------------------------------------------------------------------------------------------------------------------------
//HTML Object
class Container{

	constructor(graph){
		this.graph = graph;
		this.Open();
	}

	Open(){
		var width = (this.graph.count * this.graph.point_width) + this.graph.diameter;
		var html = 	'<div '+
						'id="Container"'+
						'style="'+
							'width:'+width+'px;'+
							'height:calc(100% - '+0+'px);'+
							'position:relative;'+
							'top:'+0+'px;'+
							'left:'+0+'px;'+
						'"'+
					' >'+
					'<div '+
						'id="Gap"'+
						'style="'+
							'width:'+this.graph.radius+'px;'+
							'height:100%;'+
							'float:left;'+
						'"'+
					' ></div>';
		this.start = html;
	}

	Fill(html){
		this.middle = html;
	}

	Close(){
		this.end = '<div '+
						'id="Gap"'+
						'style="'+
							'width:'+this.graph.radius+'px;'+
							'height:100%;'+
							'float:left;'+
						'"'+
					' ></div></div>';
		//this.end = '</div>';
	}

	GetHTML(){
		return this.start + this.middle + this.end;
	}
}

//--------------------------------------------------------------------------------------------------------------------------------
//HTML Object
class Point{

	constructor(graph, index){
		var value = graph.points[index];
		this.x = (index * graph.point_width) + graph.radius;
		this.y = graph.graph_height - (value * graph.point_height) + graph.radius;

		this.html = '<div '+
						'class="point"'+
						'style="'+
							'left:'+(this.x - graph.radius)+'px;'+
							'top:'+(this.y - graph.radius)+'px;'+
						'"'+
					' >'+graph.points[index]+'</div>';
	}
}

//--------------------------------------------------------------------------------------------------------------------------------
//HTML Object
class Line{

	constructor(graph, index){
		if(graph.points[index + 1] == null){ this.html = ''; return; }//NULL check

		var x = index * graph.point_width;
		var y = graph.graph_height - (graph.points[index] * graph.point_height) + graph.radius;
		var y2 = graph.graph_height - (graph.points[index + 1] * graph.point_height) + graph.radius;

		this.html = '<svg '+
						'class="left"'+
						'width="'+graph.point_width+'"'+
						'height="100%"'+
					' >'+

						'<line '+
							'class="left"'+
							'style="'+
								'stroke:#05B62C;'+
								'stroke-width:5px;'+
							'" '+
							'x1="0"'+
							'y1="'+y+'"'+
							'x2="'+graph.point_width+'"'+
							'y2="'+y2+'"'+
						' />'+

					'</svg>';
	}
}

//--------------------------------------------------------------------------------------------------------------------------------