function gridData() {
	var data = new Array();
	var xpos = 1;
	var ypos = 1;
	var width = 50;
	var height = 50;
	
	for (var i = 0; i < 10; i++) {
		data.push(new Array());
		
		for(var j = 0; j < 10; j++) {
			data[i].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height
			})

			xpos += width;
		}

		xpos = 1;
		ypos += height;
	}
	return data;
}

var gridData = gridData();

var grid = d3.select("#grid")
			 .append("svg")
			 .attr("width", "510px")
			 .attr("height", "510px");

var row = grid.selectAll(".row")
			  .data(gridData)
			  .enter()
			  .append("g")
			  .attr("class", "row");

var column = row.selectAll(".square")
				.data(function (d) { return d; })
				.enter()
				.append("rect")
				.attr("class", "square")
				.attr("x", function (d) { return d.x; })
				.attr("y", function (d) { return d.y; })
				.attr("width", function (d) { return d.width; })
				.attr("height", function (d) { return d.height; })
				.attr("fill", "#fff")
				.style("stroke", "#222");