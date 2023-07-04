import './App.css';
import './App.dark.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h3>
          New Posts: <span>1 posts</span>
        </h3>
        <PostList />
      </main>
    </div>
  );
}

export default App;
