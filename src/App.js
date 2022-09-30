import ImagesList from 'components/image/ImagesList';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <ImagesList />
        <h1 className="text">圖片來源: Unsplash</h1>
      </div>
    </section>
  );
}

export default App;