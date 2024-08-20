//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Import search from Intelligence Community Design System 2.25.1 (https://design.sis.gov.uk/components/search-bar)
import('https://unpkg.com/@ukic/web-components/loader').then((module) => {
    module.defineCustomElements();
});

// Hide products that don't match the search query
$('#search').on('input', function () {
    var input = $(this).val().toLowerCase();
    $(".govuk-product").each(function (i) {
        var product = $(this).text().toLowerCase()
        if (product.includes(input)) {
            $(this).parent().parent().removeClass('hide');
        } else {
            $(this).parent().parent().addClass('hide');
        }
    });
});

// Show list of products after clearing the search
const searchBar = document.querySelector("ic-search-bar");
searchBar.addEventListener('icClear', (ev) => $('.hide').removeClass('hide'))