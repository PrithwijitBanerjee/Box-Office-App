// import { NavLink } from "react-router-dom";
import { LinkStyled, NavList } from "../styled_css/Navs";

//Global Variable.....
const LINKS = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/starred',
        name: 'Starred'
    }
];

const Navbar = () => {
    return (
        <>
            <NavList>
                {
                    LINKS && LINKS?.map(item => (
                            <li key={item?.to}>
                                <LinkStyled to={item?.to}>{item?.name}</LinkStyled>
                            </li>
                        )
                    )
                }
            </NavList>
        </>
    )
}

export default Navbar