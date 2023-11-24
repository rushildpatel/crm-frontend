import "./App.css";
import { DefaultLayout } from "./components/layout/DefaultLayout";
// import { Entry } from "./pages/entry/Entry.page";

function App() {
  return (
    <div className="app">
      {/* <Entry /> */}
      <DefaultLayout>Send page components</DefaultLayout>
    </div>
  );
}

export default App;
