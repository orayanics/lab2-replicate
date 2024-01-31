import Header from "./components/Header";
import Popular from "./components/Popular";
// CSS
import "./styles/header.css";
import "./styles/popular.css";
import "./styles/reset.css";

function App() {
  return (
    <>
      <Header
        artist={"Hev Abi"}
        listeners={3123142}
        img={"https://i.scdn.co/image/ab676161000051748d5a1ee02dfbda8671226e68"}
      />
      <Popular />
    </>
  );
}

export default App;
