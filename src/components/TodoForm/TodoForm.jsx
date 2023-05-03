import React, { useEffect, useState } from "react";
import {
    FormContainer,
    StyledButton,
    StyledForm,
    StyledInput,
} from "./TodoForm.styles";

const TodoForm = ({ addTodos, setTodos, edit, editTodos }) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit) {
            editTodos(edit, value);
            setValue("");
            return;
        }
        if (value.length === 0) {
            console.log("pls enter a task");
        } else {
            addTodos(value);
        }
        setValue("");
    };
    useEffect(() => {
        if (edit) {
            setValue(edit.task);
        }
    }, [edit]);

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    onChange={handleChange}
                    type="text"
                    placeholder="enter todos"
                    value={value || ""}
                />
                <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
        </FormContainer>
    );
};

export default TodoForm;
