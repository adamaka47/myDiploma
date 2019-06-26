window.addEventListener('DOMContentLoaded', function() {
	let overlay = document.querySelector('.overlay'),
		 main = document.querySelector('.main'),
		 popup = document.querySelector('.popup'),
		 customize = document.querySelector('.custom'),
		 customizeInfo = document.querySelector('.custom-info'),
		 customizeChar = document.querySelector('.custom-char'),
		 customizeStyle = document.querySelector('.custom-style'),
		 btnReady = document.getElementById('ready'),
		 name = document.querySelector('.name'),
		 age = document.querySelector('.age'),
		 male = document.querySelector('.sex'),
		 views = document.querySelector('.views'),
		 bio = document.querySelector('.bio'),
		 createButton = document.getElementById('popup-btn'),
		 prevArrow = document.querySelectorAll('.prev'),
		 nextArrow = document.querySelectorAll('.next'),
		 mainCards = document.querySelector('.main-cards'),
		 personSkin = document.getElementById('person-skin'),
		 personHair = document.getElementById('person-hair'),
		 personClothes = document.getElementById('person-clothes'),
		 inputsRadio = document.querySelectorAll('.radios'),
		 radio = document.querySelector('.radio'),
		 person = document.querySelector('.person'),
		 inputName = document.querySelector('#name'),
		 inputAge = document.querySelector('#age');


		 createButton.addEventListener('click', function() {
		 	customize.style.display = 'flex';
		 	customizeInfo.style.display = 'block';
		 	customizeStyle.style.display = 'block';
		 	customizeChar.style.display = 'block';
		 	overlay.style.display = 'none';
		 	main.style.display = 'none';
		 	popup.style.display = 'none';
		 });	

		 btnReady.addEventListener('click', function() {
		 	customize.style.display = 'none';
		 	customizeInfo.style.display = 'none';
		 	customizeStyle.style.display = 'none';
		 	customizeChar.style.display = 'none';
		 	main.style.display = 'block';
		 	mainCards.appendChild(person);
		 	person.classList.add('main-cards-item');

		 });


		 sliderSkin();

		 sliderHair();

		 sliderClothes();







		 // slider skin

		 function sliderSkin() {
		 	let sliderIndex = 1,
		 		 sliderItem = document.getElementsByClassName('skin-color');

		 		 showSlider(sliderIndex);


		 		 function showSlider(now) {
		 		 	if (now > sliderItem.length) {
		 		 		sliderIndex = 1;
		 		 	}
		 		 	if (now < 1) {
		 		 		sliderIndex = sliderItem.length;
		 		 	}
		 		 	for (let i = 0; i < sliderItem.length; i++) {
		 		 		sliderItem[i].style.display = 'none';
		 		 	}
		 		 	sliderItem[sliderIndex - 1].style.display = 'block';
		 		 };

		 		 function selectSkin() {
		 		 	if (inputsRadio[0].checked) {
		 		 		if (sliderIndex === 1) {
		 		 			personSkin.style.backgroundImage = 'url(img/skin/skin-1.png)';

		 		 		}
		 		 		if (sliderIndex === 2) {
		 		 			personSkin.style.backgroundImage = 'url(img/skin/skin-2.png)';
		 		 		}
		 		 		if (sliderIndex === 3) {
		 		 			personSkin.style.backgroundImage = 'url(img/skin/skin-3.png)';
		 		 		}
		 		 	}
		 		 	if (inputsRadio[1].checked) {
		 		 		if (sliderIndex === 1) {
		 		 			personSkin.style.backgroundImage = 'url(img/skin/skin-4.png)';

		 		 		}
		 		 		if (sliderIndex === 2) {
		 		 			personSkin.style.backgroundImage = 'url(img/skin/skin-5.png)';
		 		 		}
		 		 		if (sliderIndex === 3) {
		 		 			personSkin.style.backgroundImage = 'url(img/skin/skin-6.png)';
		 		 		}
		 		 	}
		 		 	radio.addEventListener('change', function() {
		 		 		if (inputsRadio[0].checked) {
		 		 			if (sliderIndex === 1) {
		 		 				personSkin.style.backgroundImage = 'url(img/skin/skin-1.png)';

		 		 			}
		 		 			if (sliderIndex === 2) {
		 		 				personSkin.style.backgroundImage = 'url(img/skin/skin-2.png)';
		 		 			}
		 		 			if (sliderIndex === 3) {
		 		 				personSkin.style.backgroundImage = 'url(img/skin/skin-3.png)';
		 		 			}
		 		 		}
		 		 		if (inputsRadio[1].checked) {
		 		 			if (sliderIndex === 1) {
		 		 				personSkin.style.backgroundImage = 'url(img/skin/skin-4.png)';

		 		 			}
		 		 			if (sliderIndex === 2) {
		 		 				personSkin.style.backgroundImage = 'url(img/skin/skin-5.png)';
		 		 			}
		 		 			if (sliderIndex === 3) {
		 		 				personSkin.style.backgroundImage = 'url(img/skin/skin-6.png)';
		 		 			}
		 		 		}
		 		 	});

		 		 }

		 		 function nextSlider(now) {
		 		 	showSlider(sliderIndex += now)
		 		 };

		 		prevArrow[0].addEventListener('click', function() {
		 			nextSlider(-1);
		 			selectSkin();

		 		});

		 		nextArrow[0].addEventListener('click', function() {
		 			nextSlider(1);
		 			selectSkin();

		 		});

		 		selectSkin();
		 };


		 function sliderHair() {
		 	let sliderIndex = 1,
		 		 sliderItem = document.getElementsByClassName('hair-style');

		 		 showSlider(sliderIndex);


		 		 function showSlider(now) {
		 		 	if (now > sliderItem.length) {
		 		 		sliderIndex = 1;
		 		 	}
		 		 	if (now < 1) {
		 		 		sliderIndex = sliderItem.length;
		 		 	}
		 		 	for (let i = 0; i < sliderItem.length; i++) {
		 		 		sliderItem[i].style.display = 'none';
		 		 	}
		 		 	sliderItem[sliderIndex - 1].style.display = 'block';
		 		 };

		 		 function selectHair() {
		 		 	if (sliderIndex === 1) {
		 		 		personHair.style.backgroundImage = 'url(img/hair/construct/hair-1.png)';
		 		 	}
		 		 	if (sliderIndex === 2) {
		 		 		personHair.style.backgroundImage = 'url(img/hair/construct/hair-2.png)';
		 		 	}
		 		 	if (sliderIndex === 3) {
		 		 		personHair.style.backgroundImage = 'url(img/hair/construct/hair-3.png)';
		 		 	}
		 		 	if (sliderIndex === 4) {
		 		 		personHair.style.backgroundImage = 'url(img/hair/construct/hair-4.png)';
		 		 	}
		 		 	if (sliderIndex === 5) {
		 		 		personHair.style.backgroundImage = 'url(img/hair/construct/hair-5.png)';
		 		 	}
		 		 	if (sliderIndex === 6) {
		 		 		personHair.style.backgroundImage = 'url(img/hair/construct/hair-6.png)';
		 		 	}
		 		 }

		 		 function nextSlider(now) {
		 		 	showSlider(sliderIndex += now)
		 		 };

		 		prevArrow[1].addEventListener('click', function() {
		 			nextSlider(-1);
		 			selectHair();


		 		});

		 		nextArrow[1].addEventListener('click', function() {
		 			nextSlider(1);
		 			selectHair();

		 		});
		 }

		 function sliderClothes() {
		 	let sliderIndex = 1,
		 		 sliderItem = document.getElementsByClassName('clothes-style');

		 		 showSlider(sliderIndex);


		 		 function showSlider(now) {
		 		 	if (now > sliderItem.length) {
		 		 		sliderIndex = 1;
		 		 	}
		 		 	if (now < 1) {
		 		 		sliderIndex = sliderItem.length;
		 		 	}
		 		 	for (let i = 0; i < sliderItem.length; i++) {
		 		 		sliderItem[i].style.display = 'none';
		 		 	}
		 		 	sliderItem[sliderIndex - 1].style.display = 'block';
		 		 };

		 		 function selectClothes() {
		 		 	if (sliderIndex === 1) {
		 		 		personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-1.png)';
		 		 	}
		 		 	if (sliderIndex === 2) {
		 		 		personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-2.png)';
		 		 	}
		 		 	if (sliderIndex === 3) {
		 		 		personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-3.png)';
		 		 	}
		 		 	if (sliderIndex === 4) {
		 		 		personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-4.png)';
		 		 	}
		 		 	if (sliderIndex === 5) {
		 		 		personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-5.png)';
		 		 	}
		 		 	if (sliderIndex === 6) {
		 		 		personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-6.png)';
		 		 	}
		 		 }

		 		 function nextSlider(now) {
		 		 	showSlider(sliderIndex += now)
		 		 };

		 		prevArrow[2].addEventListener('click', function() {
		 			nextSlider(-1);
		 			selectClothes();


		 		});

		 		nextArrow[2].addEventListener('click', function() {
		 			nextSlider(1);
		 			selectClothes();

		 		});
		 }




});