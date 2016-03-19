var urlParser = {

	init : function($source, $target) {

		var jsonFormat = '{\n\t"protocol" : "%s",\n\t"domain" : "%s",\n\t"port" : "%s",\n\t"path" : "%s",\n'+
			'\t"hash" : "%s",\n\t"parameters" : {\n%s\t}\n}\n';
		
		function attachEventhandler(input, $target) {
			$("#parse").click(function() {
				if (input !== '') {
					var json = "";
					var data = parseURL(input.trim());
					if (!jQuery.isEmptyObject(data)) {
						json = sprintf(jsonFormat, data.protocol, data.domain, data.port, data.path, data.hash, 
								parseQueryString(data.queryString.split('&')));
					}
					$target.val(json);
				}
			});
		}
		
		function parseURL(url) {
			var urlData = {};
			var groups = /^([^:]+):\/\/([^:\/]+):*([^\/]*)\/([^\?]*)\?([^#]+)#?(.*)$/.exec(url);
			if (groups) {
				urlData.protocol = groups[1];
				urlData.domain = groups[2];
				urlData.port = groups[3];
				urlData.path = groups[4];
				urlData.queryString = groups[5];
				urlData.hash = groups[6];
			}
			return urlData;
		}
		
		function parseQueryString(queryString) {
			var list = getQueryEntries(queryString);
			list.sort();
			return formatList(list);
		}

		function getQueryEntries(queryString) {
			var list = [];
			var urlParam, value;
			for (var i = 0; i < queryString.length; i++) {
				urlParam = queryString[i].split('=');
				value = unescape(urlParam[1].replace(/\+/g, ' '));
				list.push(sprintf('\t\t"%s": "%s"', urlParam[0], value));
			}
			return list;
		}
		
		function formatList(list) {
			var results = '';
			for (var i = 0; i < list.length; i++) {
				results += list[i];
				if (i < list.length -1) {
					results += ',';
				}
				results += '\n';
			}
			return results;
		}
		
		attachEventhandler($source.val(), $target);

	}

};
