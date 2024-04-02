const {hash} = require("bcrypt")
const knex = require("../database/knex")


class userController {

    async show(req, res) {
        
        const user = await knex("users")

        res.json({
            user
        })
    }
}


module.exports = userController