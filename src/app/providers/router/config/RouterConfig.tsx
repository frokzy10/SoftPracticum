
import {RouteProps} from "react-router/dist/lib/components";
import MainPage from "../../../../pages/MainPage/ui/MainPage";

import GamePage from "../../../../pages/GamePage/ui/GamePage";
import AuthPage from "../../../../pages/AuthPage/ui/AuthPage";
import LoginPage from "../../../../pages/LoginPage/ui/LoginPage";
import ProfilePage from "../../../../pages/ProfilePage/ui/ProfilePage";
import Router from "../../NavigateRouter/NavigateRouter";

export enum AppRoutes {
    MAIN = "main",
    AUTH = "auth",
    LOG_IN = "login",
    GAME = "game",
    PROFILE = "profile"
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.LOG_IN]: "/log_in",
    [AppRoutes.GAME]: "/game",
    [AppRoutes.PROFILE]:"/game/profile"
}



export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>,
    },
    [AppRoutes.AUTH]:{
        path:RoutePaths.auth,
        element:<AuthPage/>
    },
    [AppRoutes.LOG_IN]:{
        path:RoutePaths.login,
        element: <LoginPage/>
    },
    [AppRoutes.GAME]:{
        path:RoutePaths.game,
        element: <GamePage/>
    },
    [AppRoutes.PROFILE]:{
        path:RoutePaths.profile,
        element:<ProfilePage/>
    }
}