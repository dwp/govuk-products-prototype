//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("your-uk-address")
    } else {
        response.redirect("your-abroad-address")
    }
})

router.post('/different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("/address-to-write-to")
    } else {
        response.redirect("/national-insurance-number")
    }
})
