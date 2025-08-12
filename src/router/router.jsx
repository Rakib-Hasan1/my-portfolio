import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
import Projects from "../Components/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/:id",
    Component: ProjectDetails,
  }
]);
