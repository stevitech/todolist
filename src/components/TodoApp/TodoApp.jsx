import React, { useEffect, useState } from "react";
import { TodoAppContainer } from "./TodoApp.styles";
import TodoForm from "../TodoForm/TodoForm";
import TodoListItem from "../TodoListItem/TodoListItem";
import { v4 } from "uuid";

const TodoApp = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [edit, setEdit] = useState(undefined);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const addTodos = (todo) => {
        setTodos([{ id: v4(), task: todo }, ...todos]);
    };
    const deleteTodos = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    const editTodos = (edit, value) => {
        setTodos((todos) => {
            const newArray = todos.map((todo) => {
                if (todo.id === edit.id) {
                    return { ...todo, task: value };
                } else {
                    return todo;
                }
            });
            return newArray;
        });
        setEdit(undefined);
    };

    return (
        <TodoAppContainer>
            <div className="header">
                <h1>Todo-list</h1>
                <p>What would you like to do?</p>
            </div>
            <div className="body-content">
                <TodoForm addTodos={addTodos} edit={edit} editTodos={editTodos} />
                <div className="map-container">
                    {todos.map((todo) => {
                        return (
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                deleteTodos={deleteTodos}
                                setEdit={setEdit}
                                editTodos={editTodos}
                            />
                        );
                    })}
                </div>
            </div>
        </TodoAppContainer>
    );
};

export default TodoApp;
