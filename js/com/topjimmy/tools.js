var widget = {

	init : function($source, $target) {

		function attachClearEventHandler($source, $target) {
			$("#clear").click(function() {
				if ($target.val()) {
					$target.val('');
				} else {
					$source.val('');
				}
				$("#testLinks").val($("#testLinks option:first").val());
			});
		}
		
		function attachFlipEventHandler($source, $target) {
			$("#flip").click(function() {
				var temp = $source.val();
				$source.val($target.val());
				$target.val(temp);
			});
		}
		
		function attachDecodeEventHandler($source, $target) {
			$("#decode").click(function() {
				$target.val(unescape($source.val()));
			});
		}
		
		function attachEncodeEventHandler($source, $target) {
			$("#encode").click(function() {
				$target.val(escape($source.val()));
			});
		}
		
		function attachDetagEventHandler($source, $target) {
			$("#detag").click(function() {
				var data = $source.val()
					.replace(/<\\?\s*(?:div|p|br)\b[^>]*>/ig, '\n')
					.replace(/<\\?[^>]*>/g, '')
					.replace(/<\s*\n\s*/g, '\n')
					.replace(/[\t ]+/g, ' ')
					.replace(/\n\s+/g, '\n')
					.replace(/^\s+|\s+$/g, '');
				$target.val(data);
			});
		}
		
		attachClearEventHandler($source, $target);
		attachFlipEventHandler($source, $target);
		attachDecodeEventHandler($source, $target);
		attachEncodeEventHandler($source, $target);
		attachDetagEventHandler($source, $target);

	}

};
