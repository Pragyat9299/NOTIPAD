import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import List from './List';
import './index.css'


const Notipad = () => {

    const [additem, setitem] = useState([]);

    const addnote = (note) => {
        setitem((prevData) => {
            return [...prevData, note];
        })
         console.log(additem);
    };

    const onDelete = (id) => {
        setitem((olddata)=>
            olddata.filter((currdata,ind)=>{
                return ind!==id;
            })
        )
    }

    return (
        <React.Fragment>
            <Header />
            <Note passnote={addnote} />
                <div className="section">
                {
                    additem.map((val,indx)=>{
                        return (
                            <List
                            id={indx}
                            key={indx}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                            />
                        )
                    })
                }
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Notipad;