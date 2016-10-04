$(document).ready(function() {

	/* Modal window */
	$('#feedback-go').click( function(event) {
		event.preventDefault();
		$('#overlay').fadeIn(400, function() {
				$('#modal-form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});

	});

	$('#modal-close, #overlay').click( function() {
		$('#modal-form').animate({opacity: 0, top: '45%'}, 200, function() {
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
			}
		);
	});

	/* Validation modal window */
	$("#modal-btn-feedback").click(function(event) {
			var feedback_name = $("#name").val();
			var feedback_phone = $("#phone").val();
			var feedback_email = $("#email").val();

			if (feedback_name == "" || feedback_name.length > 30) {
				$("#name").css({
					borderColor: '#ff8383',
					boxShadow: 'inset 0 0 13px rgba(228, 106, 106, .75)'
				}).prop('placeholder', 'Name is mandatory field');
				return false;
			};

			if (feedback_phone == "" || feedback_phone.length > 15) {
				$("#phone").css({
					borderColor: '#ff8383',
					boxShadow: 'inset 0 0 13px rgba(228, 106, 106, .75)'
				}).prop('placeholder', 'Phone is mandatory field');
				return false;
			};

			if (feedback_email == "" || feedback_email.length > 15) {
				$("#email").css({
					borderColor: '#ff8383',
					boxShadow: 'inset 0 0 13px rgba(228, 106, 106, .75)'
				}).prop('placeholder', 'Email is mandatory field');
				return false;
			};
	});

	/* owlCarousel */
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			autoHeight: true,
			autoPlay: 4000
		});
		owl.on("mousewheel", ".owl-wrapper", function (e) {
			if (e.deltaY > 0) {
				owl.trigger("owl.prev");
			} else {
				owl.trigger("owl.next");
			}
			e.preventDefault();
		});
		$(".next_button").click(function(){
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function(){
			owl.trigger("owl.prev");
		});

		/* Burger Nav Toggle */
		$("#burger-nav").on("click", function() {
				$(".main-menu ul").toggleClass("open");
		});

		$("#burger-footer-nav").on("click", function() {
				$("footer .footer-menu").toggleClass("open");
		});

});