import LeftSideBar from "./components/LeftSideBar";
import Navbar from "./components/Navbar";
import RightSideBar from "./components/RightSideBar";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-[100%] justify-between">
        <RightSideBar/>
        <TextEditor />
        <LeftSideBar/>
      </div>
    </>
  );
}

export default App;
