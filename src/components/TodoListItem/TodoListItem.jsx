import React, { useState } from "react";
import {
    StyledListButton,
    StyledListInput,
    TLContainer,
} from "./TodoListItem.styles";
import { MdOutlineDeleteOutline, MdEditNote } from "react-icons/md";

const TodoListItem = ({ todo, deleteTodos, editTodos }) => {
    const [value, setValue] = useState(todo.task);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (e) => {
        editTodos(todo, value);
        setIsEditing(false);
    };

    return (
        <div className="list">
            {/* <TodoListItem key={todo.id} todo={todo.task} /> */}
            <TLContainer>
                <div className="styled-list-section">
                    {isEditing ? (
                        <div className="edit-list-section">
                            <StyledListInput
                                onChange={(e) => setValue(e.target.value)}
                                value={value}
                                placeholder="edit todo"
                            />
                            <StyledListButton onClick={handleSave} className="">
                                save
                            </StyledListButton>
                        </div>
                    ) : (
                        <p>{todo.task}</p>
                    )}
                </div>
            </TLContainer>
            <div className="icons">
                <MdEditNote
                    className="edit-btn"
                    onClick={() => {
                        if (isEditing) {
                            setValue(todo.task);
                            setIsEditing(false);
                        } else {
                            // setEdit(todo);
                            setIsEditing(true);
                        }
                    }}
                />
                <MdOutlineDeleteOutline
                    className="delete-btn"
                    onClick={() => deleteTodos(todo.id)}
                />
            </div>
        </div>
    );
};

export default TodoListItem;
