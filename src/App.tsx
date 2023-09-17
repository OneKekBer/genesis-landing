import Header from "./components/Header";
import Home from "./home/Home";

function App() {
   return (
      <div>
         <div className="max-w-[1000px] px-5 mx-auto ">
            <Header />
            <Home />
         </div>
      </div>
   );
}

export default App;
