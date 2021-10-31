import { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import useServices from "../hooks/useServices.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // hooks
  const AllContexts = useFirebase();
  const { services, totalPage, currentPage, setCurrentPage } = useServices();
  const { addToCart, selectedService, remove, setSelectedService } = useCart();

  const data = {
    currentPage,
    setCurrentPage,
    AllContexts,
    totalPage,
    services,
    addToCart,
    selectedService,
    remove,
    setSelectedService,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
