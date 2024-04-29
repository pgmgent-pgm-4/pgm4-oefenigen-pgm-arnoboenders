import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";
import { About, Contact, Home, Projects, Resume } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path={ROUTES.home.path} element={<Home />} />
        <Route path={ROUTES.about.path} element={<About />} />
        <Route path={ROUTES.projects.path} element={<Projects />} />
        <Route path={ROUTES.contact.path} element={<Contact />} />
        <Route path={ROUTES.resume.path} element={<Resume />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
