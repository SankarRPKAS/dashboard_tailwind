import './App.css';
import Navigation from './component/navigation';
import MainRoutes from './mainRouter';

function App() {
  return (
    <div className="h-screen flex">
      <Navigation />
      <div className="flex-1 p-10">
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
