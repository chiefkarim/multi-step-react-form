import "./App.css";
import { MultiStepFormForm } from "./components/multi-step-form/form";
function App() {
  return (
    <div className="bg-[url(/bg-cover.svg)] m-0 w-full h-full fixed top-0 left-0 flex justify-center items-center">
      <div className="max-w-xl bg-white py-5 px-12 rounded-3xl border-[#b9b9b9] border-solid border-[.3px]">
        <div className="text-center w-full ">
          <img
            src="/logo.svg"
            width={400}
            height={150}
            className="max-w-[65vw]"
          />
          <h2 className=" text-[#202224] font-semibold text-nowrap">
            Create an Account
          </h2>
          <div>
            <p>Please enter your personal info to continue</p>
          </div>
          <form className="my-5">
            <MultiStepFormForm />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
