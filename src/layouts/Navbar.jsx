import Search from "./Search";

export default function Navbar() {
  return (
    <div className="bg-dark">
      <nav
        // bg="dark"
        // variant="dark"
        className="d-flex justify-content-between align-items-center text-white container p-2"
      >
        <div>
          <h4>
            IMAGE
            <br />
            GALLERIA.
          </h4>
        </div>
        <div><Search/></div>
        <div className="d-flex gap-3">
          <button className="bg-primary button-1">Signin</button>
          <button className="bg-primary button-2">Logout</button>
        </div>
      </nav>
    </div>
  );
}
