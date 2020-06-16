const joi = require('joi');

const adminRegisterSchema = joi.object().keys({
    email: joi.string().normalize().required().exist().email(),
    password: joi.string().normalize().exist().required().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
    role: joi.number().optional().valid([3])
})

module.exports = adminRegisterSchema;