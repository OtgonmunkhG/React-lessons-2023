import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <h1>Day-57 React-context</h1>
      <Section level={6}>
        <Heading>Title</Heading>
        <Section level={5}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={4}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={3}>
              <Heading>Sub-Sub-heading</Heading>
              <Heading>Sub-Sub-heading</Heading>
              <Heading>Sub-Sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
