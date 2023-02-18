const express=require('express');

class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        //middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }
    middlewares(){

        this.app.use(express.static('public'));
    }

    routes(){

        this.app.get('/', (req, res)=> {
            res.json({
                msg:'get API'
            })
          })

        this.app.put('/', (req, res)=> {
            res.json({
                msg:'put API'
            })
          })
        this.app.post('/', (req, res)=> {
            res.json({
                msg:'post API'
            })
          })
        this.app.delete('/', (req, res)=> {
            res.json({
                msg:'delete API'
            })
          })

        this.app.patch('/', (req, res)=> {
            res.json({
                msg:'path API'
            })
          })
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en ',this.port
            );
        })
    }

}

module.exports=Server;