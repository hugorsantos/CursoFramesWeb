const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    cont bundle = res.locals.bundle;
    if (bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forin(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(){
        if (error) {
            res.status(500).json({errors: [error]})
        }
    }) 
}) 

module.exports = BillingCycle