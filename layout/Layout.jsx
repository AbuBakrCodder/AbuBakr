import { Outlet } from "react-router-dom";
import Navbar from "../src/Components/Navbarl";

export default function Layout () {
    return(
        <>
            <header className="mb-25">
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}