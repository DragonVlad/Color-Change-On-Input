let bodyColor = document.body;

function randColor() {
                let r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

		    bodyColor.style.background = color;
}

bodyColor.addEventListener('keydown', function(){
	randColor(bodyColor);
});