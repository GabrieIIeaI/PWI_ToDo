export const createTodoData = (create, text, id) => {
    const obj = {
        id: create ? Math.floor((1 + Math.random()) * 0x10000) : id, 
        todo: text 
    };

    return obj;
}

export const validations = (text) => {
    console.log(text.length);
    if(text === "") {
        return 1;
    } else if (text.length < 8) {
        return 2
    }
    
    return 0;
}