const {hash, compare} = require("bcrypt")
const knex = require("../database/knex")


class userController {

    async createUser(req, res) {
        const {name, email, password} = req.body;
        

        const hashPassword = await hash(password, 8);
        
        const checkIfExistsUser = await knex("users")
        .where("email", email).count()
    
        if(checkIfExistsUser[0]["count(*)"] > 0) {
            return res.status(401).json({
                message: "this email is exists"
            })
        }
        
        await knex("users").insert({
            name,
            email,
            password: hashPassword
        })
        
        return res.json({
            message: "users exists"
        })
    }

    async deleteUser(req, res) {
        const {id} = req.params;
        const {email, password} = req.body;

        const user = await knex("users").where("id", id)

        await knex("users").update({
            
        })




        return res.json({
            message: "alo"
        })
    }
}


module.exports = userController