function newCenter( address ) {
  console.log(address)

}

function showZipcodeSearch() {
  var $zipcodeSearch = $("#zipcode-search")

  if ( $zipcodeSearch.length == 0 ) {
    var html = "<form id='zipcode-search' class='form-search zip-search center'>" +
                  "<input type='text' class='input-large search-query' placeholder='Enter a address or zipcode...'>" +
                  "<button type='submit' class='btn'>Search</button>" +
              "</form>"
    $("#map-canvas").after(html)

  } else if ( $zipcodeSearch.is(":hidden") ) {
    $zipcodeSearch.show()
  } else {
    return;
  }

  var $form = $("form#zipcode-search");

  $form.submit( function (e) {
    e.preventDefault()
    newCenter( $(this).children("input").val() )
  })
}

function initialize() {
  var defaultLoc = new google.maps.LatLng(40.718753, -74.006605);
  var mapOptions = {
    center: defaultLoc,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  showZipcodeSearch()
}

$(document).on("page:load", initialize);
$(document).ready(initialize)

