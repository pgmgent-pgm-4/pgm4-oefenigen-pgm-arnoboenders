import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember';

function App() {
  return (
    <TeamMember firstName="Arno" lastName="Boenders" func="Developer" mail="arnoboenders@gmail.com" phoneNumber="0478093824" />
  );
}

export default App;
