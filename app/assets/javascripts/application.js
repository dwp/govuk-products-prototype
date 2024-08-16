//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

/* $('#search').on('input', function(){
    var lowercase = $(this).val().toLowerCase();
    var input = $(this).val();
    $('.govuk-products .app-card').show();  
    $(".govuk-products .app-card:not(:contains("+input+"))").hide(); 
    console.log(lowercase, input);
});  */

document.getElementById("search").addEventListener("keyup", function (evt) {
    [].forEach.call(document.querySelectorAll(".govuk-products .govuk-product"), function (subject) {
        if (subject.textContent.indexOf(evt.target.value) === -1) {
            subject.parentElement.parentElement.classList.add("hide");
        } else {
            subject.parentElement.parentElement.classList.remove("hide");
        }
    });
}, false);

/* function clearSearch(){      
   document.getElementById('search').value = '';
   $('.hide').removeClass('hide');
} */

import('https://unpkg.com/@ukic/web-components/loader').then((module) => {
    module.defineCustomElements();
});