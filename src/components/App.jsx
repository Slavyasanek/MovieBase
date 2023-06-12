import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route path="/movies"></Route>
      </Route>
    </Routes>
    </>
  );
};
