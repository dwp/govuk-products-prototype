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
        response.redirect("forms/contact-winter-fuel-payments-centre/app/views/contact-form")
    } else {
        response.redirect("forms/contact-winter-fuel-payments-centre/app/views/not-eligible")
    }
})

/* Cost of Living form */

router.post('/payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("forms/cost-of-living/views/which-benefit-were-you-expecting")
    } else {
        response.redirect("forms/cost-of-living/views/contact-details-for-disability-payment")
    }
})

router.post('/which-benefit-answer', function(request, response) {

    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "tax-credits"){
        response.redirect("forms/cost-of-living/views/tax-credits")
    }
    else {
        response.redirect("forms/cost-of-living/views/which-payment-are-you-missing")
    }
})

router.post('/which-payment-answer', function(request, response) {

    var missingBenefit = request.session.data['which-payment']

    if (missingBenefit == "301"){
        response.redirect("forms/cost-of-living/views/contact-details-for-low-income-benefits")
    }
    else {
        response.redirect("forms/cost-of-living/views/did-you-have-a-joint-claim")
    }
})

router.post('/joint-benefit-answer', function(request, response) {

    var jointBenefit = request.session.data['joint-benefit']

    if (jointBenefit == "no"){
        response.redirect("forms/cost-of-living/views/personal-details")
    } else {
        response.redirect("forms/cost-of-living/views/joint-claim")
    }
})

router.post('/report-as-missing-answer', function(request, response) {

    var reportMissing = request.session.data['still-report-missing-payment']

    if (reportMissing == "yes"){
        response.redirect("forms/cost-of-living/views/personal-details")
    } else {
        response.redirect("forms/cost-of-living/views/report-a-different-missing-cost-of-living-payment")
    }
})

/* Retiring MTB4 form */

router.post('/mtb4-retired-payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("forms/cost-of-living-retiring-MTB4/contact-details-for-low-income-benefits")
    } else {
        response.redirect("forms/cost-of-living-retiring-MTB4/contact-details-for-disability-payment")
    }
})

/* Request Personal Information form */

router.post('/rpi-uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("forms/request-personal-information/app/views/your-uk-address")
    } else {
        response.redirect("forms/request-personal-information/app/views/your-abroad-address")
    }
})

router.post('/rpi-different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("forms/request-personal-information/app/views//address-to-write-to")
    } else {
        response.redirect("forms/request-personal-information/app/views//national-insurance-number")
    }
})

/* Send a personal information request for a citizen form */

router.post('/cpri-uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("forms/citizen-request-personal-information/app/views/your-uk-address")
    } else {
        response.redirect("forms/citizen-request-personal-information/app/views/your-abroad-address")
    }
})

router.post('/cpri-different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("forms/citizen-request-personal-information/app/views/address-to-write-to")
    } else {
        response.redirect("forms/citizen-request-personal-information/app/views/national-insurance-number")
    }
})