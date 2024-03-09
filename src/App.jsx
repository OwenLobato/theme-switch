import './styles/index.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { ThemeSwitch } from './components/ThemeSwitch';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContext>
      <div className='min-h-screen bg-blue-200 flex flex-col'>
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
    </ThemeContext>
  );
}

export default App;
