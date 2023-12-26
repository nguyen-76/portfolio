import { useContext } from "react";
import AuthContext from "./AuthContext";

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
}

export default RequireAuth;