import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
}

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteTodo = (id) => {
  return{
    type: DELETE_TODO,
    id
  }
}

const todoStore = createStore(reducer);

const paintTodos = () => {
  let todos = todoStore.getState();
  ul.innerHTML = ""
  todos.map(todo => {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.innerText = "DEL"
    btn.addEventListener('click', dispatchDeleteAction)
    li.id = todo.id;
    li.innerText = todo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

todoStore.subscribe(paintTodos)

const dispatchAddAction = (text) => {
  todoStore.dispatch(addTodo(text))
}

const dispatchDeleteAction = (e) => {
  let id = parseInt(e.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id))
}

const onSubmit = (e) => {
  e.preventDefault()
  const todo = input.value
  input.value = ""
  dispatchAddAction(todo);
}

form.addEventListener('submit', onSubmit)
