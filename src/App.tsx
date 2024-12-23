import Navbar from "./components/navbar/navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl w-full mx-auto">
        <Button size="sm" variant="destructive">
          click
        </Button>
      </div>
    </>
  );
}

export default App;
