"use client"

import { useRouter } from "next/navigation"

async function Update(id: any, isdone: any, refresh: any) {
    await fetch("/api/todo/update", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ id, isdone })
    })
    refresh();
}

async function deleteTodo(id: any, refresh: any) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE',
    });
    refresh();
}

export default function Todos({ todo }) {
    const router = useRouter()
    return (
        <>
            <input type="checkbox" onChange={(e) => Update(todo.id, e.target.checked, router.refresh)} checked={todo.isDone} />
            <span>{todo.name}</span>
            <button onClick={(e) => {deleteTodo(todo.id , router.refresh)}}>Delete</button>
        </>
    )
}