import "./App.css";
import Body from "./components/Body";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <h1>Custom hook Day - 61</h1>
      <ChangeTheme />
      <Header />
      <Body />
      <Footer />
      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}
