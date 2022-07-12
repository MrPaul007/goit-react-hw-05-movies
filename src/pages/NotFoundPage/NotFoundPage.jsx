import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <main>
            <div className="container">
                <h2>Page not found</h2>
                <Link to="/">To home page</Link>
            </div>
        </main>
    )
}

export default NotFoundPage;