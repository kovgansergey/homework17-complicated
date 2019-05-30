var callMe = document.querySelector('#callMeBtn');
var modal = document.querySelector('#modal');
var closeModal = document.querySelector('#closemodal')

callMe.addEventListener('click', function() {
	modal.classList.add('modal_active');
	setTimeout(function() {
		modal.classList.remove('modal_active');
	}, 5000);
});

closeModal.addEventListener('click', function() {
	modal.classList.remove('modal_active');
});

