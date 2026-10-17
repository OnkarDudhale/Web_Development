import './App.css'
import Button from './Button';
import Demo from './demo/Demo';
import Form from './Form';
import MsgBox from './MsgBox';
import ProductTab from './ProductTab';

// function Description(){
//   return <p>
//     start with first component to understand the code !
//   </p>
// }

function App() {
  return (
    <div>
      {/* {<MsgBox username='onkar dudhale .' color={{ color: 'red' }} />
    <MsgBox username='vishal dhokchawale .' color={{ color: 'yellow' }} />
    <h1>Product cards</h1> */}
            
      <h1>Blockbuster Deals | Shop now</h1>
      <ProductTab />
      {/* <Form/>
      <Button/> */}
      {/* <Demo/> */}
    </div>
  )
}

export default App
