import Todos from "./todo";

const getTodos = async () => {
    let todos = await fetch("http://json-api-basitgggg.vercel.app/api/todo/list");
    return todos.json();
}

export default async function TodoList() {
    let { todos } = await getTodos()
    return (
        <>
            <div>
                <ul style={{ listStyleType: "none", padding: "0" }}>
                    {
                        todos.map((t: any) => {
                            return (
                                <li key={t.id} style={{ padding: "5px 0" }}>
                                    <Todos todo={t} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}