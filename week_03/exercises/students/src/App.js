import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/routes";
import { StudentDetail, Students } from "./pages";
import Root from "./layouts/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.home.path} element={<Students />} />
      <Route path={ROUTES.studentDetail.path} element={<StudentDetail />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
