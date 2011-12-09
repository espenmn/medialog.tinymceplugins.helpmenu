jq(document).ready(function(){
	jq('.chapter').click(function() {
		$(this).next().toggle('fast');
		return false;
	}).next().hide();
});