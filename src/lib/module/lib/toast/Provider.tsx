import React, { useState } from "react";
import { N_Toast } from "lib/@types";
import { Context } from "./Toast";

function Provider(props: N_Toast.Provider.Props) {
  const [alert, setAlert] = useState<N_Toast.Alert[]>([]);
  const set = (payload: N_Toast.Provider.Payload) => {
    const { text, status } = payload;
    setAlert([...alert, { text, status, id: new Date().getTime() }]);
  };

  const remove = (id: number) => setAlert((prev) => prev.filter((el) => el.id !== id));
  const clear = () => setAlert([]);

  return (
    <Context.Provider value={{ alert, set, remove, clear }}>{props.children}</Context.Provider>
  );
}

export default Provider;
