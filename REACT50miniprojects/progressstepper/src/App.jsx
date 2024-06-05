import classes from './App.module.css'

import Stepper from './components/Stepper';

function App() {

  return (
    <div className={classes.app}>
      <Stepper totalSteps={4}/>
    </div>
  );
}

export default App;
