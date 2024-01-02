import { Link } from "react-router-dom";

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
            <ul>
                {
                    LINKS && LINKS?.map(item => (
                            <li key={item?.to}>
                                <Link to={item?.to}>{item?.name}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default Navbar