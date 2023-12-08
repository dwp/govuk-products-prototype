//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

// Routes for all forms are located here.

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

/* Contact Winter Fuel Payments Centre */

router.post('/cwfpc-age', function(request, response) {

    var ageVerification = request.session.data['age-verification']

    if (ageVerification == "yes"){
        response.redirect("forms/contact-winter-fuel-payments-centre/contact-form")
    } else {
        response.redirect("forms/contact-winter-fuel-payments-centre/not-eligible")
    }
})

/* Cost of Living form */

router.post('/payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("forms/cost-of-living-mtb4/which-benefit-were-you-expecting")
    } else {
        response.redirect("forms/cost-of-living-mtb4/contact-details-for-disability-payment")
    }
})

router.post('/which-benefit-answer', function(request, response) {

    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "tax-credits"){
        response.redirect("forms/cost-of-living-mtb4/tax-credits")
    }
    else {
        response.redirect("forms/cost-of-living-mtb4/which-payment-are-you-missing")
    }
})

router.post('/which-payment-answer', function(request, response) {

    var missingBenefit = request.session.data['which-payment']

    if (missingBenefit == "301"){
        response.redirect("forms/cost-of-living-mtb4/contact-details-for-low-income-benefits")
    }
    else {
        response.redirect("forms/cost-of-living-mtb4/did-you-have-a-joint-claim")
    }
})

router.post('/joint-benefit-answer', function(request, response) {

    var jointBenefit = request.session.data['joint-benefit']

    if (jointBenefit == "no"){
        response.redirect("forms/cost-of-living-mtb4/personal-details")
    } else {
        response.redirect("forms/cost-of-living-mtb4/joint-claim")
    }
})

router.post('/report-as-missing-answer', function(request, response) {

    var reportMissing = request.session.data['still-report-missing-payment']

    if (reportMissing == "yes"){
        response.redirect("forms/cost-of-living-mtb4/personal-details")
    } else {
        response.redirect("forms/cost-of-living-mtb4/report-a-different-missing-cost-of-living-payment")
    }
})

/* Retiring MTB4 form */

router.post('/mtb4-retired-payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("forms/cost-of-living-retiring-mtb4/contact-details-for-low-income-benefits")
    } else {
        response.redirect("forms/cost-of-living-retiring-mtb4/contact-details-for-disability-payment")
    }
})

/* Request Personal Information form */

router.post('/rpi-uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("forms/request-personal-information/your-uk-address")
    } else {
        response.redirect("forms/request-personal-information/your-abroad-address")
    }
})

router.post('/rpi-different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("forms/request-personal-information/address-to-write-to")
    } else {
        response.redirect("forms/request-personal-information/national-insurance-number")
    }
})

/* Send a personal information request for a citizen form */

router.post('/cpri-uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("forms/citizen-request-personal-information/your-uk-address")
    } else {
        response.redirect("forms/citizen-request-personal-information/your-abroad-address")
    }
})

router.post('/cpri-different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("forms/citizen-request-personal-information/address-to-write-to")
    } else {
        response.redirect("forms/citizen-request-personal-information/national-insurance-number")
    }
})