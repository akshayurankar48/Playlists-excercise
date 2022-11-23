
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  let postIdsArr = [];

  return (
    <div className="bg-gray-100 h-screen w-screen p-4">
      <Header postIdsArr={postIdsArr} />
      <Cards postIdsArr={postIdsArr} />
    </div>
  );
}

export default App;
