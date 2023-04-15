"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"



async function AddTodos(name: any, refresh: any) {
    await fetch("/api/todo/add", {
        method: "POST",
        body: JSON.stringify({ name })
    });
    refresh();
}

export default function AddNewTodos() {
    const [name, setname] = useState("");

    const router = useRouter()
    return (
        <>
            <input type="text" onChange={(e) => { setname(e.target.value) }} value={name} />
            <button onClick={async() => { await AddTodos(name, router.refresh); setname("") }}>Add</button>
        </>
    )
}