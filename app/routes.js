// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const alternativeFormatsPlugin = require("alternative-formats-plugin");
alternativeFormatsPlugin(router);

const findAddressPlugin = require("find-an-address-plugin");
findAddressPlugin(router);

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

// -------------------------------------------------------------------------------------------------------------------------
// Request your personal information from DWP - v3

router.post('/pir-v3-address', function(request, response) {

    var emailAddress = request.session.data['email-address']

    if (emailAddress == "yes"){
        response.redirect("/personal-information-request/v3/15")
    }
    else {
        response.redirect("/personal-information-request/v3/11")
    }
})

router.post('/pir-v3-requester', function(request, response) {

    var requester1 = request.session.data['pir-v3-requester-1']
    var requester2 = request.session.data['pir-v3-requester-2']

    if (requester1 == "you" || requester2 == "appointee"){
        response.redirect("/personal-information-request/v3/35")
    }
    else if (requester2 == "solicitor" || requester1 == "other") {
        response.redirect("/personal-information-request/v3/38")
    }
})

router.post('/pir-v3-routing-to-send-info-to-different-address', function(request, response) {

    var emailAddress = request.session.data['pir-v3-email-address']

    if (emailAddress == "yes"){
        response.redirect("/personal-information-request/v3/4")
    }
    else {
        response.redirect("/personal-information-request/v3/31")
    }
})

router.post('/pir-v3-receiving-benefit', function(request, response) {

    var benefit = request.session.data['pir-v3-receiving-benefit']

    if (benefit == "pir-v3-none"){
        response.redirect("/personal-information-request/v3/38")
    }
    else {
        response.redirect("/personal-information-request/v3/36")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Employment and Support Allowance and Severe Disability Premium review request - v2

/* router.post('/esa-sdp-is-your-in-receipt-partner-benefits', function(request, response) {

    var partnerBenefits = request.session.data['esa--is-your-in-receipt-partner-benefits']

    if (partnerBenefits.length > 0 || partnerBenefits != 'undefined' || partnerBenefits !== null || partnerBenefits == "Don't know"){
        response.redirect("/esa-sdp-review/v2/what-is-your-full-name")
    }
    else {
        response.redirect("/esa-sdp-review/v2/is-your-partner-registered-blind")
    }
}) */

router.post('/esa-sdp-is-your-in-receipt-partner-benefits', function(request, response) {

    var partnerBenefits = request.session.data['esa--is-your-in-receipt-partner-benefits']

    if (partnerBenefits == "No"){
        response.redirect("/esa-sdp-review/v2/is-your-partner-registered-blind")
    }
    else {
        response.redirect("/esa-sdp-review/v2/what-is-your-full-name")
    }
})

router.post('/esa-sdp-is-their-in-receipt-partner-benefits', function(request, response) {

    var partnerBenefits = request.session.data['esa--is-their-in-receipt-partner-benefits']

    if (partnerBenefits == "No"){
        response.redirect("/esa-sdp-review/v2/is-their-partner-registered-blind")
    }
    else {
        response.redirect("/esa-sdp-review/v2/what-is-their-full-name")
    }
})

router.post('/esa-sdp-was-your-in-receipt-partner-benefits', function(request, response) {

    var partnerBenefits = request.session.data['esa--was-your-in-receipt-partner-benefits']

    if (partnerBenefits == "No"){
        response.redirect("/esa-sdp-review/v2/was-your-partner-registered-blind")
    }
    else {
        response.redirect("/esa-sdp-review/v2/what-is-your-full-name")
    }
})

router.post('/esa-sdp-was-their-in-receipt-partner-benefits', function(request, response) {

    var partnerBenefits = request.session.data['esa--was-their-in-receipt-partner-benefits']

    if (partnerBenefits == "No"){
        response.redirect("/esa-sdp-review/v2/was-their-partner-registered-blind")
    }
    else {
        response.redirect("/esa-sdp-review/v2/what-is-their-full-name")
    }
})