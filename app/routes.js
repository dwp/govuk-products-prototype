//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// -------------------------------------------------------------------------------------------------------------------------
// Contact Winter Fuel Payment Centre

router.post('/cwfpc-age', function(request, response) {

    var ageVerification = request.session.data['age-verification']

    if (ageVerification == "yes"){
        response.redirect("/contact-winter-fuel-payments-centre/v2/contact-form")
    } else {
        response.redirect("/contact-winter-fuel-payments-centre/v2/not-eligible")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Cost of Living form - MTB4

router.post('/payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("/cost-of-living-mtb4/which-benefit-were-you-expecting")
    } else {
        response.redirect("/cost-of-living-mtb4/contact-details-for-disability-payment")
    }
})

router.post('/which-benefit-answer', function(request, response) {

    var missingBenefit = request.session.data['which-benefit']

    if (missingBenefit == "tax-credits"){
        response.redirect("/cost-of-living-mtb4/tax-credits")
    }
    else {
        response.redirect("/cost-of-living-mtb4/which-payment-are-you-missing")
    }
})

router.post('/which-payment-answer', function(request, response) {

    var missingBenefit = request.session.data['which-payment']

    if (missingBenefit == "301"){
        response.redirect("/cost-of-living-mtb4/contact-details-for-low-income-benefits")
    }
    else {
        response.redirect("/cost-of-living-mtb4/did-you-have-a-joint-claim")
    }
})

router.post('/joint-benefit-answer', function(request, response) {

    var jointBenefit = request.session.data['joint-benefit']

    if (jointBenefit == "no"){
        response.redirect("/cost-of-living-mtb4/personal-details")
    } else {
        response.redirect("/cost-of-living-mtb4/joint-claim")
    }
})

router.post('/report-as-missing-answer', function(request, response) {

    var reportMissing = request.session.data['still-report-missing-payment']

    if (reportMissing == "yes"){
        response.redirect("/cost-of-living/mtb4/personal-details")
    } else {
        response.redirect("/cost-of-living/mtb4/report-a-different-missing-cost-of-living-payment")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Retiring MTB4 form

router.post('/mtb4-retired-payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("/cost-of-living/retiring-mtb4/contact-details-for-low-income-benefits")
    } else {
        response.redirect("/cost-of-living/retiring-mtb4/contact-details-for-disability-payment")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Cost of Living form - MTB5

router.post('/mtb5-payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "£301, £300 or £299 for a low income benefit"){
        response.redirect("/cost-of-living/mtb5/benefit-entitlement-low-income")
    } else {
        response.redirect("/cost-of-living/mtb5/contact-details-for-disability-payment")
    }
})

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

router.post('/mtb5-joint-benefit-answer', function(request, response) {

    var jointBenefit = request.session.data['joint-benefit']

    if (jointBenefit == "No"){
        response.redirect("/cost-of-living/mtb5/personal-details")
    } else {
        response.redirect("/cost-of-living/mtb5/joint-claim")
    }
})

router.post('/mtb5-report-as-missing-answer', function(request, response) {

    var reportMissing = request.session.data['still-report-missing-payment']

    if (reportMissing == "Yes"){
        response.redirect("/cost-of-living/mtb5/personal-details")
    } else {
        response.redirect("/cost-of-living/mtb5/report-a-different-missing-cost-of-living-payment")
    }
})

router.post('/mtb5-details-received', function(request, response) {
        response.redirect("/cost-of-living/mtb5/details-received")
})

// -------------------------------------------------------------------------------------------------------------------------
// Retiring MTB5 form

router.post('/mtb5-retired-payment-type-answer', function(request, response) {

    var typeOfPaymentMissing = request.session.data['type-of-payment-missing']

    if (typeOfPaymentMissing == "301-or-300"){
        response.redirect("/cost-of-living/retiring-mtb5/contact-details-for-low-income-benefits")
    } else {
        response.redirect("/cost-of-living/retiring-mtb5/contact-details-for-disability-payment")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Cold Weather Payments


router.post('/cwp-check-postcode', function(request, response) {

    var country = request.session.data['country']

    if (country == "england"){
        response.redirect("/cold-weather-payments/england-and-wales")
    } else if (country == "wales"){
        response.redirect("/cold-weather-payments/england-and-wales")
    } else if (country == "northern ireland"){
        response.redirect("/cold-weather-payments/northern-ireland")
    } else {
        response.redirect("/cold-weather-payments/scotland")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Request Personal Information form

router.post('/rpi-uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("/personal-information-request/your-uk-address")
    } else {
        response.redirect("/personal-information-request/your-abroad-address")
    }
})

router.post('/rpi-different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("/personal-information-request/address-to-write-to")
    } else {
        response.redirect("/personal-information-request/national-insurance-number")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Send a personal information request for a citizen form

router.post('/cpri-uk-address', function(request, response) {

    var addressInUK = request.session.data['uk-address']
    if (addressInUK == "yes"){
        response.redirect("/citizen-personal-information-request/your-uk-address")
    } else {
        response.redirect("/citizen-personal-information-request/your-abroad-address")
    }
})

router.post('/cpri-different-address', function(request, response) {

    var addressInUK = request.session.data['different-address']
    if (addressInUK == "yes"){
        response.redirect("/citizen-personal-information-request/address-to-write-to")
    } else {
        response.redirect("/citizen-personal-information-request/national-insurance-number")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Request information about underpaid State Pension for someone who has died

router.post('/relationship-answer', function(request, response) {

    var relationship = request.session.data['relationship']
    if (relationship == "husband wife or civil partner"){
        response.redirect("/request-information-about-underpaid-state-pension-for-someone-who-has-died/v1/about-you-partner")
    } else {
        response.redirect("/request-information-about-underpaid-state-pension-for-someone-who-has-died/v1/about-you")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Find out who to contact about money taken off your Universal Credit payment v1

router.post('/v1-contact-about-money-off-uc-where-do-you-live', function(request, response) {

    var whereDoYouLive = request.session.data['WhereDoYouLive']
    if (whereDoYouLive == "england-scotland-wales"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/what-do-you-need-help-with")
    } else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/northern-ireland")
    }
})

router.post('/v1-contact-about-money-off-uc-what-do-you-need-help-with', function(request, response) {

    var whatDoYouNeedHelpWith = request.session.data['whatDoYouNeedHelpWith']
    if (whatDoYouNeedHelpWith == "advance-payment"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/advance-payment-what-is-your-enquiry-about")
    } 
    else if (whatDoYouNeedHelpWith == "universal-credit-overpayment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/universal-credit-overpayment")
    }
    else if (whatDoYouNeedHelpWith == "benefit-overpayment-budgeting-crisis-loan-repayment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/benefit-overpayment-budgeting-and-crisis-loan-repayment")
    }
    else if (whatDoYouNeedHelpWith == "recoverable-hardship-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction")
    }
})

router.post('/v1-contact-about-money-off-uc-advance-payment-enquiry-type', function(request, response) {

    var advancePaymentEnquiryType = request.session.data['advancePaymentEnquiryType']
    if (advancePaymentEnquiryType == "how-much-owed-in-total"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/advance-payment-how-much-i-owe-in-total")
    } 
    else if (advancePaymentEnquiryType == "how-much-paid-every-month") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/advance-payment-how-much-i-pay-every-month")
    }
    else if (advancePaymentEnquiryType == "one-off-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/advance-payment-i-want-to-make-a-one-off-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/advance-payment-i-want-to-pause-repayments")
    }
})

router.post('/v1-contact-about-money-off-uc-universal-credit-overpayment', function(request, response) {

    var universalCreditOverpayment = request.session.data['universalCreditOverpayment']
    if (universalCreditOverpayment == "uc-overpayment-reason"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/universal-credit-overpayment-i-want-to-know-what-the-overpayment-was-for")
    } 
    else if (universalCreditOverpayment == "uc-how-much-left-to-pay") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/universal-credit-overpayment-how-much-i-have-left-to-pay")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/universal-credit-overpayment-i-want-to-make-a-one-off-payment")
    }
})

router.post('/v1-contact-about-money-off-uc-recoverable-hardship-payment-help', function(request, response) {

    var recoverableHardshipPaymentHelp = request.session.data['recoverableHardshipPaymentHelp']
    if (recoverableHardshipPaymentHelp == "hardship-payment-payment-reason"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-i-want-to-know-what-the-payment-is-for")
    } 
    else if (recoverableHardshipPaymentHelp == "hardship-payment-left-to-pay") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-how-much-i-have-left-to-pay")
    }
    else if (recoverableHardshipPaymentHelp == "hardship-payment-one-off-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-i-want-to-make-a-one-off-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-i-am-struggling-to-repay")
    }
})

router.post('/v1-contact-about-money-off-uc-debt-and-deductions', function(request, response) {

    var recoverableHardshipDebtAndDeductions = request.session.data['recoverableHardshipDebtAndDeductions']
    if (recoverableHardshipDebtAndDeductions == "no-only-recoverable-hardship-payment"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-i-am-struggling-to-repay-outcome")
    } 
    else if (recoverableHardshipDebtAndDeductions == "yes-but-only-a-uc-advance") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-i-am-struggling-to-repay-and-only-have-a-universal-credit-advance")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/recoverable-hardship-payment-i-am-struggling-to-repay-and-have-other-debt-and-deductions")
    }
})

router.post('/v1-contact-about-money-off-uc-third-party-deductions', function(request, response) {

    var thirdPartyDeduction = request.session.data['thirdPartyDeduction']
    if (thirdPartyDeduction == "money-taken-off-reason"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-want-to-know-why-the-money-was-taken-off")
    } 
    else if (thirdPartyDeduction == "amount-owed-in-total") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-how-much-i-owe-in-total")
    }
    else if (thirdPartyDeduction == "one-off-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-want-to-make-a-one-off-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-am-struggling-to-make-the-repayments")
    }
})

router.post('/v1-contact-about-money-off-uc-third-party-rent-arrears', function(request, response) {

    var thirdPartyDeductionRentArrears = request.session.data['thirdPartyDeductionRentArrears']
    if (thirdPartyDeductionRentArrears == "yes"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-have-money-taken-off-for-rent-arrears")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-do-not-have-money-taken-off-for-rent-arrears")
    }
})

router.post('/v1-contact-about-money-off-uc-third-party-other-reasons', function(request, response) {

    var thirdPartyDeductionOtherReasons = request.session.data['thirdPartyDeductionOtherReasons']
    if (thirdPartyDeductionOtherReasons == "yes"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-have-money-taken-off-for-rent-arrears-and-a-benefit-overpayment-social-fund-loan-or-recoverable-hardship")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-do-not-have-money-taken-off-for-rent-arrears-and-a-benefit-overpayment-social-fund-loan-or-recoverable-hardship")
    }
})

router.post('/v1-contact-about-money-off-uc-third-party-other-third-party-deductions', function(request, response) {

    var thirdPartyDeduction = request.session.data['thirdPartyDeduction']
    if (thirdPartyDeduction == "no"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-only-have-rent-arrears")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v1/third-party-deduction-i-have-rent-arrears-and-other-third-party-deductions")
    }
})

// -------------------------------------------------------------------------------------------------------------------------
// Find out who to contact about money taken off your Universal Credit payment v2

router.post('/v2-contact-about-money-off-uc-where-do-you-live', function(request, response) {

    var whereDoYouLive = request.session.data['WhereDoYouLive']
    if (whereDoYouLive == "england-scotland-wales"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/what-do-you-need-help-with")
    } else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/northern-ireland")
    }
})

router.post('/v2-contact-about-money-off-uc-what-do-you-need-help-with', function(request, response) {

    var whatDoYouNeedHelpWith = request.session.data['whatDoYouNeedHelpWith']
    if (whatDoYouNeedHelpWith == "advance-payment"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/advance-payment-what-is-your-enquiry-about")
    } 
    else if (whatDoYouNeedHelpWith == "universal-credit-overpayment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/universal-credit-overpayment")
    }
    else if (whatDoYouNeedHelpWith == "tax-credits-benefit-overpayment-budgeting-crisis-loan-repayments") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/tax-credits-and-benefit-overpayments-budgeting-and-crisis-loan-repayments")
    }
    else if (whatDoYouNeedHelpWith == "recoverable-hardship-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/recoverable-hardship-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction")
    }
})

router.post('/v2-contact-about-money-off-uc-advance-payment-enquiry-type', function(request, response) {

    var advancePaymentEnquiryType = request.session.data['advancePaymentEnquiryType']
    if (advancePaymentEnquiryType == "how-much-owed-in-total"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/advance-payment-how-much-i-owe-in-total")
    } 
    else if (advancePaymentEnquiryType == "how-much-paid-every-month") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/advance-payment-how-much-i-pay-every-month")
    }
    else if (advancePaymentEnquiryType == "one-off-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/advance-payment-i-want-to-make-a-one-off-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/advance-payment-i-want-to-pause-repayments")
    }
})

router.post('/v2-contact-about-money-off-uc-universal-credit-overpayment', function(request, response) {

    var universalCreditOverpayment = request.session.data['universalCreditOverpayment']
    if (universalCreditOverpayment == "uc-overpayment-reason"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/universal-credit-overpayment-i-want-to-know-what-the-overpayment-was-for")
    } 
    else if (universalCreditOverpayment == "uc-how-much-left-to-pay") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/universal-credit-overpayment-how-much-i-have-left-to-pay")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/universal-credit-overpayment-i-want-to-make-a-one-off-payment")
    }
})

router.post('/v2-contact-about-money-off-uc-recoverable-hardship-payment-help', function(request, response) {

    var recoverableHardshipPaymentHelp = request.session.data['recoverableHardshipPaymentHelp']
    if (recoverableHardshipPaymentHelp == "hardship-payment-payment-reason"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/recoverable-hardship-payment-i-want-to-know-what-the-payment-is-for")
    } 
    else if (recoverableHardshipPaymentHelp == "hardship-payment-left-to-pay") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/recoverable-hardship-payment-how-much-i-have-left-to-pay")
    }
    else if (recoverableHardshipPaymentHelp == "hardship-payment-one-off-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/recoverable-hardship-payment-i-want-to-make-a-one-off-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/recoverable-hardship-payment-i-am-struggling-to-repay-outcome")
    }
})

router.post('/v2-contact-about-money-off-uc-third-party-deductions', function(request, response) {

    var thirdPartyDeduction = request.session.data['thirdPartyDeduction']
    if (thirdPartyDeduction == "money-taken-off-reason"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-want-to-know-why-the-money-was-taken-off")
    } 
    else if (thirdPartyDeduction == "amount-owed-in-total") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-how-much-i-owe-in-total")
    }
    else if (thirdPartyDeduction == "one-off-payment") {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-want-to-make-a-one-off-payment")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-am-struggling-to-make-the-repayments")
    }
})

router.post('/v2-contact-about-money-off-uc-third-party-rent-arrears', function(request, response) {

    var thirdPartyDeductionRentArrears = request.session.data['thirdPartyDeductionRentArrears']
    if (thirdPartyDeductionRentArrears == "yes"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-have-money-taken-off-for-rent-arrears")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-do-not-have-money-taken-off-for-rent-arrears")
    }
})

router.post('/v2-contact-about-money-off-uc-third-party-other-reasons', function(request, response) {

    var thirdPartyDeductionOtherReasons = request.session.data['thirdPartyDeduction']
    if (thirdPartyDeductionOtherReasons == "no"){
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-only-have-rent-arrears")
    }
    else {
        response.redirect("/find-out-who-to-contact-about-money-taken-off-your-universal-credit-payment/v2/third-party-deduction-i-have-rent-arrears-and-other-third-party-deductions")
    }
})