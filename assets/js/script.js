jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	// Preloader js
	$(window).on('load', function () {
		$('#preloader').fadeOut(700);
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000

	});

	$("#features").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var filterizd = $('.filtr-container').filterizr({});
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the carousel
	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});
});
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});

//https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
var scrolled = false;
$(window).on('scroll', function () {
	if (!scrolled) {
		scrolled = true;
		wow.init();
	}
})

/* ========================================================================= */
/*	Google Map Customization
/* =========================================================================  */

function initialize() {

	var latitude = $('#map-canvas').attr('data-latitude');
	var longitude = $('#map-canvas').attr('data-longitude');
	var myLatLng = new google.maps.LatLng(latitude, longitude);

	var roadAtlasStyles = [{
		"featureType": "landscape",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#2F3238"
		}]
	}, {
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#FFFFFF"
		}]
	}, {
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#50525f"
		}]
	}, {
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#808080"
		}]
	}, {
		"featureType": "poi",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "transit",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#808080"
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#3071a7"
		}, {
			"saturation": -65
		}]
	}, {
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#bbbbbb"
		}]
	}];

	var mapOptions = {
		zoom: 14,
		center: myLatLng,
		disableDefaultUI: true,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
		}
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: '',
	});


	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});

	var styledMapOptions = {
		name: 'US Road Atlas'
	};

	var usRoadMapType = new google.maps.StyledMapType(
		roadAtlasStyles, styledMapOptions);

	map.mapTypes.set('roadatlas', usRoadMapType);
	map.setMapTypeId('roadatlas');
}

google.maps.event.addDomListener(window, "load", initialize);

/* ========================================================================= */
/*	Staticman comments reply
/* ========================================================================= */
function changeValue(elementName, newValue) {
	document.getElementsByName(elementName)[0].value = newValue;
};

/* ========================================================================= */
/*	Honeypot
/* ========================================================================= */
$(document).ready(function () {
	$('form').submit(function () {
		if ($('input[type="text"]#e-mail').val().length > 0) {
			$('form').attr('action', '/');
			return false;
		}
	});
});