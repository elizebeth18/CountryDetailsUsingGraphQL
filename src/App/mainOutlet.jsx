import { Outlet } from "react-router-dom";

const MainOutlet = () => {
    return (
        <div className="list-group">
            <Outlet />
        </div>
    )
}

export default MainOutlet;