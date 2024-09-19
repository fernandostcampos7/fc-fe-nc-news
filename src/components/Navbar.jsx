import { Link } from "react-router-dom";

function Navbar () {
	return (
		<nav>
			<ul className='nav-list'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='articles-list'>Articles List</Link>
				</li>
				<li>
					<Link to='article-details'>Article Details</Link>
				</li>
				
			</ul>
		</nav>
	);
}

export default Navbar;