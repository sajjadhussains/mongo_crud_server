/**
* 1.npm install express cors nodemon mongodb
* 2.basic setup upto port listening
* 3.connect mongodb database 
*       database>connect>drivers>node>view code
* 4.create-
    app.post('/users',(req,res)=>{})
    const user = req.body
        [to do this make sure,app.use(express.json())]--middleware
    from front end:
        ->take from value using form and function and make a object user.then fetch
        and within fetch api as a second parameter use 
        method:'POST',
        headers:'Content-Type:application/json'
        body.json.stringify(user object)
5.for deleting:
        backend:
            app.delete('/users/:id',(req,res)=>{
                const id=req.params.id;
                const query={_id:new ObjectId(id)}
                const result = await collectionName.deleteOne(query)
                res.send(result)
            })
        front-end:
            fetch dynamic api and within 2nd parameter use:
                method:'DELETE',
            and to show remaining data:
                const remaining=users.filter(user=>user._id!==_id)
                //then set this remaining user to state
                setUsers(remaining)
6.for updating:
            backend:
            app.put('/users/:id',(req,res)=>{
                
            })
**/