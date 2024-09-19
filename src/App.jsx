import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='articles-list' element={<ArticlesList/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
