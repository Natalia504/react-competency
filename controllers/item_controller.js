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
        // console.log("BODY", req.body)
        db.add_item([item_name, item_price])
        .then(item => {
            res.status(200).send(item)
        }).catch (err => res.status(500).send(err))
    },

    editItem: (req, res) => {
        const db = req.app.get('db');
        const {item_name, item_price} = req.body
        // console.log("EDIT BODY", req.body)
        // console.log(req.params.id)
        db.edit_item([item_name, item_price, req.params.id])
        .then ((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
        
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db');
         
        db.delete_item([req.params.id])
        .then(() => res.status(200).send("Deleted!"))
        .catch((err) => res.status(500).send(err))
    },
    
    searchItem: (req, res) => {
        if(req.query.name){
            // console.log(req.query, "Query")
            const db = req.app.get('db');
            db.search_item([req.query.name])
           
            .then(response => {
                // console.log("RESPONSE" , response)
                res.status(200).send(response)
            })
            
            .catch((err) => res.status(500).send(err))
        }   
   }
}