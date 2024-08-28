import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import ShowInfo from "./ShowInfo";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
            children: [
                {
                    path: "shows/:id",
                    element: <ShowInfo />
                }
            ]
        }
    ]);

    return  (
        <div>
            <RouterProvider router = {appRouter} />
        </div>
    );
};
export default Body;