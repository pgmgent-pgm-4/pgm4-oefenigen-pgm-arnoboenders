import "./App.css";
import TeamMember from "./components/TeamMember";

function App() {
  return (
    <TeamMember
      firstName="Erin"
      lastName="Lindford"
      func="Customer Support"
      mail="erinlindford@example.com"
      phoneNumber="(555) 765-4321"
      image="./logo.svg"
    />
  );
}

export default App;
