import React from "react";

const SearchContext = React.createContext({
  location: "",
  animal: "",
  breed: "",
  name: ""
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
