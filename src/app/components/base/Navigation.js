import { Sidebar } from 'adminlte-2-react';
const { Item } = Sidebar;
const MainMenu = [
    <Item key="alert-all" text="All Alert" to="/alert" />,
    <Item key="alert-add" text="Add Alert" to="/alert/add" /> 
]
export default MainMenu;