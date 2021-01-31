import React, { useState } from 'react';
import './index.css';

const Note = (props) => {

    const [state, setstate] = useState(false);

    const [note, set] = useState({
        title: "",
        content: "",
    });

    const Inputevent = (event) => {

        const { name, value } = event.target;
        set((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })

    };

    const addevent = () => {
        props.passnote(note);
        set({
            title: "",
            content: ""
        })
    }

    const expandit=()=>{
        setstate(true);
    }
    const expanddown=()=>{
        setstate(false);
    }

    return (
        <React.Fragment>
            <div className="main_note" onDoubleClick={expanddown}>
                <form>
                    {
                       state ?
                       <input type="text" placeholder="Title" name="title" value={note.title} onChange={Inputevent} autoComplete="off" /> : null
                    }
                    <textarea type="text" rows="10" placeholder="Write a note......" cols="" name="content" 
                              value={note.content} onChange={Inputevent}  onClick={expandit}/>
                    {
                    state ?
                    <div className="btn">
                        <button type="button" onClick={addevent}>+</button>
                    </div>:null
                    }
                </form>
            </div>
        </React.Fragment>
    )
}
export default Note;