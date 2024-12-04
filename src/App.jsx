import Random from "./components/Random_v1";
import Tag from "./components/Tag_v1";
const App = () => {
  return (
    <div>
      <h1>Random GIF Application</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
