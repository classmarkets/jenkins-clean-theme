(function($jq) {

function stickyFoot() {
  var bodyHeight = $jq("body.yui-skin-sam").height();
  var vwptHeight = $jq(window).height();
  var footHeight = 45;
  var headerHeight = $jq("#header").height();
  $jq("#main-table").css("min-height",vwptHeight-footHeight-headerHeight);
}

$jq(document).ready(function() {
  stickyFoot();
});

$jq(window).resize(function() {
  stickyFoot();
});

$jq(document).scroll(function() {
  stickyFoot();
});

})(jQuery)
