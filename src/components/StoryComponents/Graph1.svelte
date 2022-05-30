<script>
	import * as d3 from "d3";
    import {onMount } from "svelte";
// create 2 data_set
const data1 = [
   {group: "A", value: 4},
   {group: "B", value: 16},
   {group: "C", value: 8}
];

const data2 = [
   {group: "A", value: 7},
   {group: "B", value: 1},
   {group: "C", value: 20}
];
onMount(() => {

// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// X axis
const x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data1.map(d => d.group))
  .padding(0.2);
svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x))

// Add Y axis
const y = d3.scaleLinear()
  .domain([0, 20])
  .range([ height, 0]);
svg.append("g")
  .attr("class", "myYaxis")
  .call(d3.axisLeft(y));

// A function that create / update the plot for a given variable:
function update(data) {

  var u = svg.selectAll("rect")
    .data(data)

  u
    .join("rect")
    .transition()
    .duration(1000)
      .attr("x", d => x(d.group))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", "purple")
}

// Initialize the plot with the first dataset
update(data1)
}
)
</script>
<!-- Add 2 buttons -->
<button onclick="update(data1)">Variable 1</button>
<button onclick="update(data2)">Variable 2</button>

<!-- Create a div where the graph will take place -->
<div id="my_dataviz"></div>