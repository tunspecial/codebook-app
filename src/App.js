import { AllRoute } from "./routes/AllRoute";
import { Header } from "./components";
import { Footer } from "./components";

function App() {
  return (
    <div className="App dark:bg-bg-dark">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
