import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDtailPage } from "./pages/GameDtailPage";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:id', element: <GameDtailPage/>}
        ]
    }
])

export default router;