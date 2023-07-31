import "./App.css";
import AppProvider from "./context/AppProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
