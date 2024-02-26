// Data.jsx
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

export const SideBarData = [
    {
        id: 1,
        name: "Tableau de bord",
        icon: BsGrid1X2Fill,
        link: "/"
    },
    {
        id: 2,
        name: "Produits",
        icon: BsFillArchiveFill,
        link: "/Products"
    },
    {
        id: 3,
        name: "Clients",
        icon: BsPeopleFill,
        link: "/Clients"
    },
    {
        id: 4,
        name: "Categories",
        icon: BsFillGrid3X3GapFill,
        link: "/Categories"
    },
    {
        id: 5,
        name: "Inventaire",
        icon: BsListCheck,
        link: "/Inventory"
    },
    {
        id: 6,
        name: "Rapports",
        icon: BsMenuButtonWideFill,
        link: "/Reports"
    },
    {
        id: 7,
        name: "Paramètres",
        icon: BsFillGearFill,
        link: "/Settings"
    },
];
