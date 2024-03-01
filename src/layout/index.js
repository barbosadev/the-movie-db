import { Context } from "../context";
import { useContext, useState } from "react";

export const Layout = ({ children }) => {
  const [error, setError] = useState("");

  return (
    <Context.Provider value={[error, setError]}>
      {children}
      {error !== "" && (
        <div className="px-2 fixed bottom-2 flex justify-center w-full">
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex gap-2 w-100 flex-wrap justify-center "
            role="alert"
          >
            <strong class="font-bold">Ops, algo deu errado!</strong>
            <span class="block sm:inline">{error}</span>
          </div>
        </div>
      )}
    </Context.Provider>
  );
};
