//Server Utils
const express = require('express')
const app = express()
const PORT = 3001
const routes = require('./routes')

//Interim
app.use(express.static('public'))
app.use(express.json()) 
app.use( routes )

//Serves index.html
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })


// //Servers notes page
// app.get('/notes', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'notes.html'))
// })


//Sends saved notes to fronend
// app.get('/api/notes', async (req,res) => {
//     JSONNotes = await readJSON()
//     res.json(JSONNotes)
// })


//Adds a new note
// app.post('/api/notes', async (req,res) => {
//     const inboundNotes = req.body
//     const savedNotes = await updateNotes(inboundNotes)
//     res.json(savedNotes)
// })



//Deletes a note
// app.delete('/api/notes/:id', async (req,res)  => {
//     const id = req.params.id
//     await deleteNote(id)
//     res.end()
// })





//Starts server
app.listen(PORT, () => {
    console.log(`Server.js is listening on port ${PORT}`)
})