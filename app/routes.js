//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("/which-benefit-were-you-expecting")
    } else {
        response.redirect("/contact-details-for-disability-payment")
    }
})

router.post('/which-benefit-answer', function(request, response) {

    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "tax-credits"){
        response.redirect("/tax-credits")
    }
    else {
        response.redirect("/which-payment-are-you-missing")
    }
})

router.post('/which-payment-answer', function(request, response) {

    var missingBenefit = request.session.data['which-payment']

    if (missingBenefit == "301"){
        response.redirect("/contact-details-for-low-income-benefits")
    }
    else {
        response.redirect("/did-you-have-a-joint-claim")
    }
})

router.post('/joint-benefit-answer', function(request, response) {

    var jointBenefit = request.session.data['joint-benefit']

    if (jointBenefit == "yes"){
        response.redirect("/joint-claim")
    } else {
        response.redirect("/index")
    }
})

router.post('/report-as-missing-answer', function(request, response) {

    var reportMissing = request.session.data['still-report-missing-payment']

    if (reportMissing == "yes"){
        response.redirect("/personal-details")
    } else {
        response.redirect("/report-a-different-missing-cost-of-living-payment")
    }
})
