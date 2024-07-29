
import home from '../../assets/home.svg'
import category from '../../assets/category.svg'
import restaurant from '../../assets/restaurant.svg'
import favorite from '../../assets/favorite.svg'
import history from '../../assets/history.svg'
import logout from '../../assets/logout.svg'
import settings from '../../assets/settings.svg'
import notification from '../../assets/notification1.svg'
import notificationwhite from '../../assets/notification.svg'
import privacy from '../../assets/privacy.svg'
import privacywhite from '../../assets/privacy1.svg'
import feedback from '../../assets/feedback.svg'
import feedbackwhite from '../../assets/feedback1.svg'
import support from '../../assets/support.svg'
import supportwhite from '../../assets/support1.svg'
import terms from '../../assets/terms.svg'
import termswhite from '../../assets/terms1.svg'

export const Dashboard_Sidebar_Links =[
    {
        key: "home",
        label: "Home",
        path: "/internal/dashboard",
        image: home
    },
    {
        key: "category",
        label: "Category",
        path: "/internal/category",
        image: category
    },
    {
        key: "restaurant",
        label: "Restaurant",
        path: "/internal/restaurant",
        image: restaurant
    },
    {
        key: "favourite",
        label: "Favourite",
        path: "/internal/favourite",
        image: favorite
    },
    {
        key: "order history",
        label: "Order History",
        path: "/internal/order",
        image: history
    }
]

export const Dashboard_Sidebar_Bottom_Links = [
    {
        key: "logout",
        label: "Logout",
        path: "/internal/logout",
        image: logout
    },
    {
        key: "settings",
        label: "Settings",
        path: "/internal/settings",
        image: settings
    },
];

export const Settings_Sidebar_Links =[
    {
        key: "notification",
        label: "Notifications",
        path: "/notification",
        image: notification,
        image2: notificationwhite
    },
    {
        key: "privacy_policy",
        label: "Privacy Policy",
        path: "/privacypol",
        image: privacy,
        image2: privacywhite
    },
    {
        key: "terms_of_service",
        label: "Terms of Service",
        path: "/terms",
        image: terms,
        image2: termswhite
    },
    {
        key: "feedback",
        label: "Feedback",
        path: "/feedback",
        image: feedback,
        image2: feedbackwhite
    },
    {
        key: "support",
        label: "Contact Support",
        path: "/support",
        image: support,
        image2: supportwhite
    }
]
