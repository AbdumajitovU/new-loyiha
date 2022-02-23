import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className="mt-1">
        <Link
          style={{ color: match ? "rgb(209 213 219)" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

  export default CustomLink;
  