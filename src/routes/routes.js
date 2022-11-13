import HomePage from "../Components/pages/HomePage";
import MembersPage from "../Components/pages/MembersPage";
import UsersPage from "../Components/pages/UsersPage";

 const routes = [
    {
        path: '/',
        element: <HomePage />,
    },


    {
        path: '/memberspage',
        element: <MembersPage />,
    },


]

export default routes