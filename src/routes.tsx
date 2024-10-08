import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDtailPage } from "./pages/GameDtailPage";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:id', element: <GameDtailPage/>}
        ]
    }
])

export default router;