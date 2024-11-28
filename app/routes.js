// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// -------------------------------------------------------------------------------------------------------------------------
// Cost of Living form - MTB4

router.post('/which-benefit-answer', function(request, response) {

    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "tax-credits"){
        response.redirect("/cost-of-living/mtb4/tax-credits")
    }
    else {
        response.redirect("/cost-of-living/mtb4/which-payment-are-you-missing")
    }
})

router.post('/which-payment-answer', function(request, response) {

    var missingPayment = request.session.data['which-payment']
    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "universal-credit" && missingPayment == "300"){
        response.redirect("/cost-of-living/mtb4/did-you-have-a-joint-claim")
    }
    else if (missingBenefit != "universal-credit" && missingPayment == "300"){
        response.redirect("/cost-of-living/mtb4/personal-details")
    } 
    else {
        response.redirect("/cost-of-living/mtb4/contact-details-for-low-income-benefits")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Cost of Living form - MTB5

router.post('/mtb5-which-benefit-answer', function(request, response) {

    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "Tax Credits"){
        response.redirect("/cost-of-living/mtb5/tax-credits")
    }
    else {
        response.redirect("/cost-of-living/mtb5/which-payment-are-you-missing")
    }
})

router.post('/mtb5-which-payment-answer', function(request, response) {

    var missingPayment = request.session.data['which-payment']
    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "Universal Credit" && missingPayment == "£299 paid between 6 February and 22 February 2024 for most people"){
        response.redirect("/cost-of-living/mtb5/did-you-have-a-joint-claim")
    }
    else if (missingBenefit != "Universal Credit" && missingPayment == "£299 paid between 6 February and 22 February 2024 for most people"){
        response.redirect("/cost-of-living/mtb5/personal-details")
    } 
    else {
        response.redirect("/cost-of-living/mtb5/contact-details-for-low-income-benefits")
    }
})