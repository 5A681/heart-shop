import Content from "./components/Content";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      {/* <LoginRegister data="Hello"></LoginRegister> */}
      <div>
        <NavBar></NavBar>
        <Content></Content>
      </div>
    </div>
  )
}