//목소리
person1.onclick = function() {
	person1.style.opacity = "0%";
	person2.style.opacity = "100%";
	smoke.style.opacity = "100%";
}


person2.onclick = function() {
	person2.style.opacity = "0%";
	person1.style.display = "none";
	smoke.style.opacity = "0%";
	smoke.style.animation = "smo 4s 0.5s forwards";
}

//반복문
	for(var i = 0; i<190; i++){
			var a = yek.cloneNode(true);
			a.id = i;
			a.style.left = Math.random()*700 + "px";
			a.style.top = Math.random()*550 + "px";
			a.style.animationDelay = i + "s";
			
			document.getElementById( 'back4' ).appendChild(a);
		}

	

//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

		if (t > 700) {
			mask.style.left = "-2px";

		}
		else{
			mask.style.left = "";
		}

		if (t > 1100) {
			mask_2.style.right = "-2px";

		}
		else{
			mask_2.style.right = "";
		}


		if (t > 1500) {
			mask_3.style.left = "-2px";

		}
	else{
			mask_3.style.left = "";
		}

}
		//if (t > 4620) {	location.href = 		}
