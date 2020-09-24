//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

		if (t > 3300) {
			mask.style.left = "-2px";


		}
		else{
			mask.style.left = "";
		}

		if (t > 3500) {
			mask_2.style.right = "-2px";
			voicemain.style.background = "url(back0-2.gif)";

		}
		else{
			mask_2.style.right = "";
			voicemain.style.background = "";
		}


		if (t > 3700) {
			mask_3.style.left = "-2px";

		}
	else{
			mask_3.style.left = "";
		}


		if (t > 5900) {
			mask3.style.opacity = "100%";

		}
	else{
			mask3.style.opacity = "";
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
        
 	 var url = "https://jjoohee.github.io/misfortune/";
		$(location).attr('href',url);
        
    }
});

//로딩화면
 document.addEventListener("DOMContentLoaded", function() {
    requestAnimationFrame(function() {
            document.getElementById("loadingBar").style.width = "100%";
      });
    });

window.onload = function () {
document.getElementById("loadingIndicator").style.opacity = "0";
setTimeout(function() {
    document.getElementById("loadingIndicator").style.display = "none";}, 450);
}
