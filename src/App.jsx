import UserRoutes from "./UserRoutes";
import Header from "./modules/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <UserRoutes />
    </div>
  );
};

export default App;