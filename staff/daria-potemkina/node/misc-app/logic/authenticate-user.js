require('../utils/string')
require('../utils/function')
const Email = require('../utils/email')
const {find} = require('../data/users')


module.exports = (email, password, callback) => {
    String.validate.notVoid(email)
    Email.validate(email)

    String.validate.lengthGreaterEqualThan(password, 8)

    Function.validate(callback)

    find({ email }, (error, [user]) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with e-mail ${email} does not exist`))

        if (user.password !== password) return callback(new Error('wrong password'))

        callback(null, user.id)
    })
}