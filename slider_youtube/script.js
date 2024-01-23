const items = document.querySelectorAll(".slider_content_item");

const slider = document.querySelector(".slider");
const slider_content = document.querySelector(".slider_content");

let width_slider = slider.offsetWidth;
function previous() {
    // alert(width_slider)
    
    if (slider_content.scrollLeft ==0) {
        //   alert('a')
        // slider_content.scrollLeft = 0;
        
        slider_content.scrollLeft = width_slider * items.length;
    } else {
        slider_content.scrollLeft -= width_slider;
    }
}

function next() {
    if (slider_content.scrollLeft > (width_slider * items.length - 601)) {
        // alert('a')
        // slider_content.scrollLeft = 0;
        
        slider_content.scrollLeft =0
    } else {
            console.log(slider_content.scrollLeft);
        slider_content.scrollLeft += width_slider;
    }
   
        
}
