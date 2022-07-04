import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "Ajex Kizz" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 25 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
function App() {
  return (
    <UncontrolledOnboardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}

export default App;
