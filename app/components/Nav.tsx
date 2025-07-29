import { Link } from "react-router";

export default function Nav() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/client-component">Another page</Link>
        </>
    )
}