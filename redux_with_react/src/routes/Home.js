import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store'
import ToDo from '../component/Todo';

function Home({toDos, addTodo}) {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text)
        addTodo(text)
        setText("")
    }



    return (
        <>
        <h1>To do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {toDos: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (text) => dispatch(actionCreators. addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);