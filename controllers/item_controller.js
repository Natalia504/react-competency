module.exports = {
    getItems: (req, res)=> {
        const db = req.app.get('db');

        db.get_items()
        .then(item => {
            res.status(200).send(item)
        }).catch (err => res.status(500).send(err))
    },

    addItem: (req, res) => {
        const db = req.app.get('db');
        const { item_name, item_price} = req.body;

        db.add_item([item_name, item_price])
        .then(item => {
            res.status(200).send(item)
        }).catch (err => res.status(500).send(err))
    },

    editItem: (req, res) => {
        const db = req.app.get('db');
        
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db');
         
    }
}