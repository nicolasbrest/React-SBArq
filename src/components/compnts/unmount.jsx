import React from "react";

const UnmountExample = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const input = document.getElementsByTagName("input");
        console.log(input[0].value);
    };

    const onChangeHandler = (e) => {
    if (
        e.key == "a" ||
        e.key == "e" ||
        e.key == "i" ||
        e.key == "o" ||
        e.key == "u"
    ) {
        e.preventDefault();
    }
    };

    return (
    <>
        <h1 id="title">Formulario</h1>
            <form onSubmit={onSubmitHandler}>
            <input onKeyDown={onChangeHandler} type="text" />
            <button type="submit">Submit form</button>
        </form>
    </>
);
};

export default UnmountExample;