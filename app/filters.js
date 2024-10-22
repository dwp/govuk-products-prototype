/* const govukPrototypeKit = require('govuk-prototype-kit'); 
const addFilter = govukPrototypeKit.views.addFilter;

let filters = {}; // Define filters as an object 
filters.toMonth = function(x) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (x > 0 && x <= 12) {
        return months[x - 1]; // returns the month as per x
    } else {
        return 'Invalid month'; // Handle invalid month
    }
};

addFilter('toMonth', filters.toMonth);
module.export = filters;

 */