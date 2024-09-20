import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ArticlesList from './components/ArticlesList';
import ArticleDetails from './components/ArticleDetails';
import Footer from './components/Footer';

function App() {
	return (
		<div className='app'>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles-list' element={<ArticlesList />} />
				<Route path='/article-details' element={<ArticleDetails />} />
				<Route path='/article-details/:article_id/' element={<ArticleDetails />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
