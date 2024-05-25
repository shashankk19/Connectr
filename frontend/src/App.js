import "./App.css";
import ChatPage from "./Components/ChatPage";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
        <Route />
      </ChatProvider>
    </div>
  );
}

export default App;
