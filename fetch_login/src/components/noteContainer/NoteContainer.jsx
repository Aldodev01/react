import NoteCard from './NoteCard'
import './NoteContainer.css'
import { useEffect, useState } from 'react'

function NoteContainer() {

    // buat penampung data statenya
    const [notes, setNotes] = useState()

    const[modal, setModal] = useState(false)

    const [addNote, setAddNote] = useState({
        user_email : sessionStorage.getItem('user'),
        title : '',
        body : '',
    })

    const handledataStore = (e) => {
        e.preventDefault()
        // alert(`
        //     user_email : ${addNote.user_email}
        //     title : ${addNote.title}
        //     body : ${addNote.body}
        // `)

        fetch('http://localhost:5000/notes', {
            method : "POST",
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(addNote),
        })
            window.location.href = '/home'
    }

    useEffect( (  ) => {
        

    // tangkap user yang login
    const user = sessionStorage.getItem('user')

    // ambil data notes
        fetch(`http://localhost:5000/notes?user_email=${user}`, {
            method : "GET",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then( (res) => res.json() )
        .then( (data) => {
            // kita simpan ke State
            setNotes(data)
        } ) 
    }, [] )
    // Mengambil data dari database


    return (
        <section className="noteContainer">

            {/* kita check apakah notes sudah berisi data */}

            {notes && (
                <>

                {notes.map( (e) => (

                    <NoteCard 
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        body={e.body}
                    />

                ) )}

                <i className="fa fa-plus addIcon" onClick={()=>{setModal(!modal)}}></i>
               
                    {modal ? (
                        <div className="formModal"  >
                            <form className="addNote" onSubmit={handledataStore}>
        
                                <label htmlFor="addTitle">
                                    Masukan Judul Note
                                </label>
                                <input type="text" id="addTitle" name="title" autoCorrect="none"
                                    onChange={(e) => {
                                        setAddNote({
                                            ...addNote,
                                            title : e.target.value
                                        })
                                    }}
                                />
        
                                <label htmlFor="addBody">
                                    Masukan Note
                                </label>
                                <textarea 
                                    name="body" 
                                    id="addBody"  
                                    onChange={(e) => {
                                        setAddNote({
                                            ...addNote,
                                            body: e.target.value
                                        })
                                    }}></textarea>
        
                                <button className="btnAddNote" type="submit">
                                    Tambahkan Note
                                </button>
        
                            </form>
                        </div>
                    ) : null}

                
                </>
            )}

        </section>
    )
}

export default NoteContainer
