module.exports = {

    readAll: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        }).catch(err => res.status(500).send(console.log(err)))
    },
    create: (req, res) => {
        const db = req.app.get('db')
        let {name, address, city, state, zip, img, mortgage, rent} = req.body
        console.log(state)
        db.new_house({name, address, city, state, zip, img, mortgage, rent}).then(houses => {
            res.status(200).send(console.log("House Added"))
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_house({id}).then(houses => {
            res.status(200).send(houses)
        })
    }
}
