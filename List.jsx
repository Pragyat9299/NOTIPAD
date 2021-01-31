import React from 'react';
import './index.css';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const List = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    return (
        <React.Fragment>
            <div className="list">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button type="button" className="del_btn" onClick={deleteNote} >
                    <DeleteRoundedIcon className="del" />
                </button>
            </div>

        </React.Fragment>
    )
}
export default List;