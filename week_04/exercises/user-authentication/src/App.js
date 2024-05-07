import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layouts/Root";
import { Login, Welcome } from "./pages";
import { ROUTES } from "./routes/routes";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.welcome.path} element={<Welcome />} />
      <Route path={ROUTES.login.path} element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
