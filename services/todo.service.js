// todo.service.js

export const getTodo = async (query) => {
    try {
        const todoList = [
            { title: 'JavaScriptを勉強する', done: true },
            { title: 'Node.jsを勉強する', done: false },
            { title: 'Web APIを作る', done: false }
        ]

        return todoList
    } catch (e) {
        throw Error("Error while getting Omimkuji.")  // わかっていない
    }
};