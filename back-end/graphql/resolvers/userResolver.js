const User = require("../../models/user")

module.exports = {
    users: async () => {
        try {
            const userFetched = await User.find()
            return userFetched.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                    createdAt: new Date(user._doc.createdAt).toISOString(),
                }
            })

        } catch (error) {
            throw error
        }
    },

    createUser: async args => {
        try {
            const {name, email, password} = args.user
            const user = new User({
                name,
                email,
                password,
            })

            const newUser = await user.save()
            return {...newUser._doc, _id: newUser.id}

        } catch (error) {
            throw error
        }
    },
}