import './styles/index.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { ThemeSwitch } from './components/ThemeSwitch';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { useThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`theme-${theme} min-h-screen bg-bgPrimary text-textContent flex flex-col`}
    >
      <Header />
      <ThemeSwitch />
      <Content />
      <div className='flex justify-center'>
        <Card
          title='Title 1'
          description='Description 1'
          image='https://via.placeholder.com/150'
        />
        <Card
          title='Title 2'
          description='Description 2'
          image='https://via.placeholder.com/150'
        />
        <Form />
      </div>
    </div>
  );
}

export default App;
