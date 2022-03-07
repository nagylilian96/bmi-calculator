import React,{useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Calculator} from './components/Calculator'
import {Toggle} from './components/Toggle'


function App() {

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(1)

  let bmi = true;


  const showBmi = (e) => {
    e.preventDefault();
    console.log(height);
    console.log(weight);
    bmi =weight/(Math.pow(height/100,2))
    console.log(bmi)
    return bmi;
  }
  

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
    <div className="border bg-light text-center">
      <h1 className="p-5">Testtömegindex (BMI) Kalkulátor</h1>
      <div className="row">
        <div className="col-md-4">
        <img className="img-fluid p-2" src="https://cdn.pixabay.com/photo/2014/07/28/11/18/scale-403585_960_720.jpg" alt="scale" />
        </div>
        <div className="col-md-8">
          <p className="p-2">A testtömegindex-kalkulátor segítségével megtudhatja, hogy a testsúlya ideális, vagy elhízott, esetleg túl sovány-e.
          A Testtömegindex számításához mindössze a magasságát és a súlyát kell megadnia.</p>
        </div>
        </div>
        <form className="row justify-content-center ">
          <div className="col-md-6">
            <input type="number" name="height" className="form-control h-100" placeholder="Magasság (cm)" onChange={(e) => { setHeight(parseInt(e.target.value) )}} />
          </div>
          <div className="col-md-6">
            <input type="number" name="weight" className="form-control h-100" placeholder="Súly (kg)" onChange={(e) => { setWeight(parseInt(e.target.value) )}} />
          </div>
          <div className="d-grid gap-2 col-8 mx-auto">
          <button type="submit" className="btn btn-secondary border border-dark btn-block mt-5 mb-3" onClick={showBmi} >BMI számítása</button>
          </div>
        </form>
        <Calculator bmi={bmi}/>
        <Toggle />
    </div>
    </div>
  );
}

export default App;
