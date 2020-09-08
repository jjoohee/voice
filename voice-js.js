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


		if (t > 1600) {
			mask_3.style.left = "-2px";

		}
	else{
			mask_3.style.left = "";
		}

}


//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
 	 var url = "https://jjoohee.github.io/story/";
		$(location).attr('href',url);
        
    }
});


 //https://jjoohee.github.io/doong0826/
