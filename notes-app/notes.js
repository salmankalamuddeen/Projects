const fs=require('fs')
const chalk=require('chalk')
const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNote =notes.filter((note)=>note.title===title)
    if(duplicateNote.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('adding notes'))
    }
    else
    {
        console.log(chalk.red.inverse('already taken'))
    }
}

const removeNotes=(tit)=>
{
    const notes=loadNotes()
    const remove=notes.filter(function(note){
         return note.title!==tit
    })
    if(notes.length>remove.length)
    {
        console.log(chalk.green.inverse('removing Notes'))
        saveNotes(remove)
    }else{
        console.log(chalk.red.inverse('no note found'))
    }
}

const listNotes=()=>
{
    const notes=loadNotes()
    console.log(chalk.inverse('list of notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNotes=(title)=>
{
    const notes=loadNotes()
    const note = notes.find((note)=> note.title===title)
    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else
    {
        console.log(chalk.red.inverse('Note not found!'))
    }
}
const loadNotes=()=>
{
    try
    {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
}

const saveNotes=(notes)=>
{
    const newdata=JSON.stringify(notes)
    fs.writeFileSync('notes.json',newdata)
}

module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}