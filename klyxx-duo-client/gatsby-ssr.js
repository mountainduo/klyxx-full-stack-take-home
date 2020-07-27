const React = require("react")
const GlobalContextProvider = require("./src/context/GlobalContextProvider").default;

// Wrap with GlobalContextProvider
exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
};
