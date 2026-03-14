import Reach from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import "../styles/Layout.css";
import "../styles/Transitions.css";

export default function Layout() {
    const location = useLocation();

    return (
        <div className="layout">
            <Header />
            <main key={location.pathname} className="layout-content page-transition">
            <Outlet />
            </main>
        </div>
    )
}