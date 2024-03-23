import Sidebar from "./Sidebar";
import React from "react";

export default function Layout({children}) {
    return (
        <main className="app">
            <Sidebar/>
            {children}
        </main>
    )
}