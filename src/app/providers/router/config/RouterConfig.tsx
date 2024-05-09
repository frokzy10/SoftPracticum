import {RouteProps} from "react-router/dist/lib/components";
import MainPage from "../../../../pages/MainPage/ui/MainPage";
import GamePage from "../../../../pages/GamePage/ui/GamePage";
import AuthPage from "../../../../pages/AuthPage/ui/AuthPage";
import LoginPage from "../../../../pages/LoginPage/ui/LoginPage";
import ProfilePage from "../../../../pages/ProfilePage/ui/ProfilePage";
import LevelPage from "../../../../pages/LevelPage/ui/LevelPage";
import GameStartPage from "../../../../pages/GameStartPage/ui/GameStartPage";
import NotFoundPage from "../../../../pages/NotFoundPage/ui/NotFoundPage";
import SuccessPage from "../../../../pages/SuccessPage/ui/SuccessPage";

export enum AppRoutes {
    MAIN = "main",
    AUTH = "auth",
    LOG_IN = "login",
    PROFILE = "profile",
    GAME = "game",
    LEVEL = "level",
    START_GAME = "startgame",
    NOT_FOUND = "not_found",
    SUCCESS = "success"
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.LOG_IN]: "/log_in",
    [AppRoutes.PROFILE]:"/game/profile",
    [AppRoutes.GAME]:"/game",
    [AppRoutes.LEVEL]:"/game/:id",
    [AppRoutes.SUCCESS]:"/game/success",
    [AppRoutes.START_GAME]:"game/:id/startGame",
    [AppRoutes.NOT_FOUND]:"*"
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
    [AppRoutes.PROFILE]:{
        path:RoutePaths.profile,
        element:<ProfilePage/>
    },
    [AppRoutes.GAME]:{
        path:RoutePaths.game,
        element:<GamePage/>
    },
    [AppRoutes.LEVEL]:{
        path:RoutePaths.level,
        element:<LevelPage/>
    },
    [AppRoutes.START_GAME]:{
        path:RoutePaths.startgame,
        element:<GameStartPage/>
    },
    [AppRoutes.SUCCESS]:{
        path:RoutePaths.success,
        element:<SuccessPage/>
    },
    [AppRoutes.NOT_FOUND]:{
        path:RoutePaths.not_found,
        element:<NotFoundPage/>
    }
}