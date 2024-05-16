import logo from './logo.svg';
import './App.css';
import { useAppContext } from './context/Appcontext';
import { useDispatch } from 'react-redux';
import { printclg } from './redux/reduxSlice';

function App() {
  const { contextstate } = useAppContext()
  const dispatch = useDispatch()
  return (
    <>
      {contextstate}
      <button onClick={()=> dispatch(printclg('i am from redux'))}>redux check console</button>
    </>
  );
}

export default App;
