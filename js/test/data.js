var widgetData = {
		
	"title" : "Jim's Widget",

	"tools" : [
       {
    	   "id": "clear",
    	   "label": "clear"
       },
       {
    	   "id": "flip",
    	   "label": "flip"
       },
       {
    	   "id": "parse",
    	   "label": "parse"
       },
       {
    	   "id": "decode",
    	   "label": "decode"
       },
       {
    	   "id": "encode",
    	   "label": "encode"
       },
       {
    	   "id": "detag",
    	   "label": "detag"
       }
	],
	
	"test" : [
		{
			"label": "* Clear *",
			"entry": ""
		},	
		{
			"label": "Long URL",
			"entry": "http://ic.galegroup.com:8080/ic/ovic/ViewpointsDetailsPage/ViewpointsDetailsWindow?failOverType=&query=&prodId=OVIC&windowstate=normal&contentModules=&display-query=&mode=view&displayGroupName=Viewpoints&limiter=&currPage=&disableHighlighting=false&displayGroups=&sortBy=&search_within_results=&p=OVIC&action=e&catId=&activityType=&scanId=&documentId=GALE%7CEJ3010933228&source=Bookmark&u=gale&jsid=380c36d07cbb5023db251b5c53600793"
		},	
		{
			"label": "URL with Hash",
			"entry": "http://ic.galegroup.com:8080/ic/ovic/ViewpointsDetailsPage/ViewpointsDetailsWindow?failOverType=&source=Bookmark&u=gale&jsid=380c36d07cbb5023db251b5c53600793#hashhhhh"
		},	
		{
			"label": "Simple text",
			"entry": "What?  how, why, & when?"
		},	
		{
			"label": "Encoded text",
			"entry": "What%253F%2520%2520how%252C%2520why%252C%2520%2526%2520when%253F"
		},	
		{
			"label": "Simple Html",
			"entry": "%3CHTML%3E\n%3CHEAD%3E\n%3CTITLE%3EYour%20Title%20Here%3C/TITLE%3E\n%3C/HEAD%3E\n%3CBODY%20BGCOLOR%3D%22FFFFFF%22%3E%3CCENTER%3E%3CIMG%20SRC%3D%22clouds.jpg%22%20ALIGN%3D%22BOTTOM%22%3E%20%3C/CENTER%3E\n%3CHR%3E\n%3Ca%20href%3D%22http%3A//somegreatsite.com%22%3ELink%20Name%3C/a%3E\nis%20a%20link%20to%20another%20nifty%20site\n%3CH1%3EThis%20is%20a%20Header%3C/H1%3E\n%3CH2%3EThis%20is%20a%20Medium%20Header%3C/H2%3E\nSend%20me%20mail%20at%20%3Ca%20href%3D%22mailto%3Asupport@yourcompany.com%22%3Esupport@yourcompany.com%3C/a%3E.\n%3CP%3E%20This%20is%20a%20new%20paragraph%21\n%3CP%3E%20%3CB%3EThis%20is%20a%20new%20paragraph%21%3C/B%3E\n%3CBR%3E%20%3CB%3E%3CI%3EThis%20is%20a%20new%20sentence%20without%20a%20paragraph%20break%2C%20in%20bold%20italics.%3C/I%3E%3C/B%3E\n%3CHR%3E\n%3C/BODY%3E\n%3C/HTML%3E\n"
		}
	]
};

$(document).ready(function() { 
	
	var $source = $('#source');
	var $target = $('#target');
	var OPTION_FORMAT = '<option value="%s">%s</option>';
	var BUTTON_FORMAT = '<button id="%s">%s</button>';

	function addPageTitle() {
		$('title').html(widgetData.title);
		$('.title').html(widgetData.title);
	}
	
	function attachTestLinks($testLinks, testLinks) {
		for (i = 0; i < testLinks.length; i++) { 
			$testLinks.append(sprintf(OPTION_FORMAT, testLinks[i].entry, testLinks[i].label));
		}
	}
	
	function attachTools($tools, tools) {
		for (i = 0; i < tools.length; i++) { 
			$tools.append(sprintf(BUTTON_FORMAT, tools[i].id, tools[i].label));
		}
	}

	function attachTestLinkEventHandler($testLinks, $source) {
		$testLinks.selectmenu({
			change: function(event, ui) {
				$source.val(unescape(ui.item.value));
			}
		});
	}
	
	function init($source, $target) {
		addPageTitle();
		attachTestLinks($('#testLinks'), widgetData.test);
		attachTools($('#tools'), widgetData.tools);
		attachTestLinkEventHandler($('#testLinks'), $source);
	}

	init($source, $target);
	widget.init($source, $target);
	urlParser.init($source, $target);
	
});
