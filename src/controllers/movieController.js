const knex = require("../database/knex");


class movieController {

    async createMovie(req, res) {
        const {title, description, note} = req.body;
        const {user_id} = req.params;

        if(note > 5) {
            return res.status(401).json({
                message: 'numbers greater than 5 are not allowed'
            })
        }

        const checkIfUserExists = await knex("users").where("id", user_id).count()

        if(checkIfUserExists[0]["count(*)"] < 1) {
            return res.status(401).json({
                message: "this user don't exist"
            })

        }

        const [note_id] = await knex("movie_notes").insert({
            title,
            description,
            noteForTheFilm: note,
            user_id
        })

        console.log(note_id)

        return res.status(201).json({
            message: "movie note created"
        })
    }

    async deleteMovie(req, res) {
        
    }
}

module.exports = movieController