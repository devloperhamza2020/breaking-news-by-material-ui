import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';


function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ba26766a74a8448995a2be7e33f20d6b'
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])
  return (
    <div className="container">
      <Navigation></Navigation>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
      
    </div>

  );
}

export default App;
