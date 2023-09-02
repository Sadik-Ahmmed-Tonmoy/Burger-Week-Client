import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
 
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-slate-900">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  p-4 w-52 min-h-full bg-orange-400 text-black text-center">
            {/* Sidebar content here */}
            <Link to="/dashboard/myCart">
              {" "}
              <li>My Cart</li>
            </Link>
         
         <div className="border my-4 border-black"></div>
         <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
          </ul>      
        </div>
      </div>
    </>
  );
};

export default Dashboard;
