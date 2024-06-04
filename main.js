console.log("hola mundo con Node JS")

import express from "express"
const express =requiere("express")
const app = express()
const port =3000

app.get ("/api/v1/usuarios",(req, res)=>{
    res.send("hola mundo")
    res.json({
        mensaje:"lista de usuarios"
    })

})
app.post("/api/v1/usuaarios",(req, res)=>{
res.jesion({
    mensaje:"usuario gurdado"
})
})

app.put("/api/v1/usuaarios",(req, res)=>{
    res.jesion({
        mensaje:"usuario actualizado"
    })
    })

app.listen(port,()=>{
    console.log("la API esta escuchando en el puerto ${port}")
})  

app.patch("/api/v1/usuaarios",(req, res)=>{
    res.jesion({
        mensaje:"edad del usuario actualizada"
    })
    })

    app.delete("/api/v1/usuaarios",(req, res)=>{
        res.jesion({
            mensaje:"usuario eliminado"
        })
        })