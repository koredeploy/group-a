
import home from '../../assets/home.svg'
import category from '../../assets/category.svg'
import restaurant from '../../assets/restaurant.svg'
import favorite from '../../assets/favorite.svg'
import history from '../../assets/history.svg'
import logout from '../../assets/logout.svg'
import settings from '../../assets/settings.svg'

export const Dashboard_Sidebar_Links =[
    {
        key: "home",
        label: "Home",
        path: "/LayoutInternal",
        image: home
    },
    {
        key: "category",
        label: "Category",
        path: "/category",
        image: category
    },
    {
        key: "restaurant",
        label: "Restaurant",
        path: "/restaurant",
        image: restaurant
    },
    {
        key: "favourite",
        label: "Favourite",
        path: "/favourite",
        image: favorite
    },
    {
        key: "order history",
        label: "Order History",
        path: "/order",
        image: history
    }
]

export const Dashboard_Sidebar_Bottom_Links = [
    {
        key: "logout",
        label: "Logout",
        path: "/logout",
        image: logout
    },
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        image: settings
    },
];