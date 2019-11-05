

// EXAMPLE
// gen: generation to filter by (i.e. 1)
// leg: Legendary to filter by (i.e. True)
// display: the display variable form the onchange function
// displayOthers: the displayOthers variable from the onchange function
function filter(gen, leg) {
// filter data by gen and leg
if (gen == "all" && leg == "all") {
    // show all data
} else if (gen == "all" && leg != "all") {
    // filter only by legendary
} else if (gen != "all" && leg == "all") {
    // filter only by generation
} else { // neither gen nor leg is "all"
    // filter by both conditions
    dots.filter(function(d) {return !(leg == d['Legendary'] && gen == d['Generation'])})
            .attr("display", 'none'); // use "display: none" to hide points
            
    dots.filter(function(d) {return leg == d['Legendary'] && gen == d['Generation'] })
        .attr("display", 'inline'); // use "display: inline" to show points

}



    


    
}