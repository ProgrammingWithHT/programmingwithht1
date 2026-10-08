
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import Status from './components/Status';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter } from './components/state/Counter';
import { User } from './components/state/User';
import logo from './logo.svg'

function App() {
  const personName={
    first: 'Hamza',last: 'tahir'
  }
  const nameList=[
    {first:'hamza',last:'tahir'},
    {first:'qasim',last:'tahir'},
    {first:'sidra',last:'tahir'}
  ]
  return (
    <div>
      {/* <img src={logo} alt="" />
      <Greet name='hamza' messageCount={5} isLoggedIn={true} />
      <Greet name='hamza' isLoggedIn={true} styles={{background:'red',border: '2px solid black'}}/>
      <Person name={personName} namelist={nameList}/>
      <Status status='loading'/>
      <Heading>children props</Heading>
      <Oscar>
        <Heading>children Oscar</Heading>
      </Oscar> */}
      {/* <Button handleClick={()=>{console.log('Button Clicked')}} /> */}
      {/* <Button handleClick={(event,id)=>{console.log('Button Clicked',event,id)}} /> */}
      {/* <Input value='' handleChange={(event)=> console.log(event)}/> */}

      {/* <User /> */}

      {/* <Counter /> */}


      <DomRef />
      {/* <MutableRef /> */}

    </div>
  );
}

export default App;
