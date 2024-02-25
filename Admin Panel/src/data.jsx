// Data.jsx
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

export const SideBarData = [
    {
        name: "Tableau de bord",
        icon: BsGrid1X2Fill,
        link: "/",
    },
    {
        name: "Produits",
        icon: BsFillArchiveFill,
        link: "/Products",
    },
    {
        name: "Categories",
        icon: BsFillGrid3X3GapFill,
        link: "/Categoris",
    },
    {
        name: "Clients",
        icon: BsPeopleFill,
        link: "/Clients",
    },
    {
        name: "Inventaire",
        icon: BsListCheck,
        link: "/Inventory",
    },
    {
        name: "Raports",
        icon: BsMenuButtonWideFill,
        link: "/Reports",
    },
    {
        name: "Paramètres",
        icon: BsFillGearFill,
        link: "/Settings",
    },
];
