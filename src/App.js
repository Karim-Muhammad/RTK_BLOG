import './App.css';
import AddPost from './components/Form/AddPost';
import PostsList from './components/Posts/PostsList';

function App() {

  return (
    <div className="App">
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
