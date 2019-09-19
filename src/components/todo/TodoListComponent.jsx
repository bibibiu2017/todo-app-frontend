import React, {Component} from 'react'

class TodoListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    description: "Learn react",
                    done: false,
                    date: new Date()
                },
                {
                    id: 2,
                    description: "Visit India",
                    done: false,
                    date: new Date()
                },
                {
                    id: 3,
                    description: "Learn Tables",
                    done: false,
                    date: new Date()
                }
            ]
        }
    }

    render() {
        return (
            <>
                <div className={"container"}>
                    <h1>List TODO</h1>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>done</th>
                            <th>date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.date.toLocaleString()}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default TodoListComponent
