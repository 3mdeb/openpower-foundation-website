summaryInclude=100;
var fuseOptions = {
	shouldSort: true,
	includeMatches: true,
	threshold: 0.0,
	tokenize: true,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	minMatchCharLength: 1,
	keys: [
		{ name: "title" , weight: 0.9 },
		{ name: "tags" , weight: 0.7 },
		{ name: "contents" , weight: 0.5 },
		{ name: "categories" , weight: 0.3 }
	]
};
var searchQuery = param("s");
if(searchQuery){
	var inputBox = document.getElementById('search-query');
	inputBox.value = searchQuery || "";
	executeSearch(searchQuery, false);
} else {
	$('#search-results').append("<p class=\"search-results-empty\">Please enter a word or phrase above, or see <a href=\"/tags/\">all tags</a>.</p>"); 
}
function executeInlineSearch(){
	$(".search-results-empty").remove();
	$(".search-results-summary").remove();
	var query = document.getElementById("search-query").value;
	if(query){
		executeSearch(query, true);
	} else {
		$('#search-results').append("<p class=\"search-results-empty\">Please enter a word or phrase above, or see <a href=\"/tags/\">all tags</a>.</p>"); 
	}
}
function executeSearch(searchQuery, clear_list){
	$.getJSON( jsonfile, function( data ) {
		var pages = data;
		var fuse = new Fuse(pages, fuseOptions);
		var result = fuse.search(searchQuery);
		if(result.length > 0){
			populateResults(result);
		} else {
			if (clear_list) {
				$(".search-results-empty").remove();
			}
			$('#search-results').append("<p class=\"search-results-empty\">No matches found</p>");
		}
	});
}
function populateResults(result){
	searchQuery = document.getElementById("search-query").value;
	$.each(result,function(key,value){
		var contents= value.item.contents;
		var snippet = "";
		var snippetHighlights=[];
		var tags =[];
		if( fuseOptions.tokenize ){
			snippetHighlights.push(searchQuery);
		} else {
			$.each(value.matches,function(matchKey,mvalue) {
				if(mvalue.key == "tags" || mvalue.key == "categories") {
					snippetHighlights.push(mvalue.value);
				} else if(mvalue.key == "contents") {
					start = mvalue.indices[0][0]-summaryInclude>0?mvalue.indices[0][0]-summaryInclude:0;
					end = mvalue.indices[0][1]+summaryInclude<contents.length?mvalue.indices[0][1]+summaryInclude:contents.length;
					snippet += contents.substring(start,end);
					snippetHighlights.push(mvalue.value.substring(mvalue.indices[0][0],mvalue.indices[0][1]-mvalue.indices[0][0]+1));
				}
			});
		}
		if(snippet.length<1){
			snippet += contents.substring(0,summaryInclude*2);
		}
		var templateDefinition = $('#search-result-template').html();
		var tags = ""
		if (value.item.tags){
			value.item.tags.forEach(function(element) {
				tags = tags + "<a href='/tags/"+ element +"'>" + "#" + element + "</a> " 
			});
		}
		var output = render(templateDefinition,{key:key,title:value.item.title,link:value.item.permalink,tags:tags,categories:value.item.categories,snippet:snippet});
		$('#search-results').append(output);
		$.each(snippetHighlights,function(snipkey,snipvalue){
			$("#summary-"+key).mark(snipvalue);
		});
	});
}
function param(name) {
	return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}
function render(templateString, data) {
	var conditionalMatches,conditionalPattern,copy;
	conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
	copy = templateString;
	while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
		if(data[conditionalMatches[1]]){
			copy = copy.replace(conditionalMatches[0],conditionalMatches[2]);
		} else {
			copy = copy.replace(conditionalMatches[0],'');
		}
	}
	templateString = copy;
	var key, find, re;
	for (key in data) {
		find = '\\$\\{\\s*' + key + '\\s*\\}';
		re = new RegExp(find, 'g');
		templateString = templateString.replace(re, data[key]);
	}
	return templateString;
}
