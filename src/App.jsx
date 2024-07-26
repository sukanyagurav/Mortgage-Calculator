import Input from "./components/Input";
import calculatorIcon from "./assets/icon-calculator.svg";
import emptyIcon from './assets/illustration-empty.svg'
function App() {
  return (
    <>
      <main className=" w-full flex bg-white md:rounded-2xl  overflow-hidden flex-col md:flex-row ">
        <div className="left bg-white p-6 ">
          <div className="flex items-center justify-between mb-4 flex-wrap">
            <h1 className="font-bold text-2xl">Mortgage Calculator</h1>
            <button className="border-b-2 border-slate_700 text-slate_700">Clear All</button>
          </div>
          <div className=" mt-2">
            <label
              htmlFor="mortgage_amount"
              className="mb-2 block text-slate_700 font-semibold"
            >
              Mortgage Amount
            </label>
            <Input text="£" position="left-0" textAlign="right" padding="px-4 pl-[3rem] " min="0" />
          </div>
          <div className="flex md:justify-between md:items-center flex-col md:flex-row md:gap-4 mt-2">
            <div className="mt-2 flex-1">
              <label
                htmlFor="mortgage_amount"
                className="mb-2 block text-slate_700 font-semibold"
              >
                Mortgage Term
              </label>
              <Input text="years" position="right-0" textAlign="left" padding="px-2 pr-[4rem]" min="1" />
            </div>
            <div className="mt-2 flex-1">
              <label
                htmlFor="mortgage_amount"
                className="mb-2 block text-slate_700 font-semibold"
              >
                Interest Rate
              </label>
              <Input text="%" position="right-0" textAlign="left" padding="px-2 pr-[4rem]"  min="0" />
            </div> 
          </div>
          <div className="mt-3">
            <h2 className="text-slate_700 font-semibold">Mortgage Type</h2>
            <div className="border-[1px] border-slate_700 px-3 py-2 rounded-md mt-3 relative flex items-center form_field cursor-pointer ">
              <input
                type="radio"
                name="type"
                value="repayment"
                id="repayment"
                className="absolute opacity-0  w-5 h-5 "
              />
              <span className="relative w-[20px] h-[20px] border-[1.4px] p-1 border-slate_700 rounded-full  mr-2 after:rounded-full after:bg-lime after:absolute after:w-[50%]  after:h-[50%] transition-all duration-100 after:scale-0 flex items-center justify-center"></span>
              <label htmlFor="repayment" >Repayment</label>
            </div>
            <div className="border-[1px] border-slate_700 px-3 py-2 rounded-md mt-3 relative flex items-center form_field cursor-pointer  ">
              <input
                type="radio"
                name="type"
                value="interest"
                id="interest"
                className="absolute opacity-0  w-5 h-5 "
              />
              <span className="relative w-[20px] h-[20px] border-[1.4px] p-1 border-slate_700 rounded-full  mr-2 after:rounded-full after:bg-lime after:absolute after:w-[50%]  after:h-[50%] transition-all duration-100 after:scale-0 flex items-center justify-center"></span>
              <label htmlFor="interest">Interest Only</label>
            </div>
          </div>
          <button className="flex  items-center justify-center mt-7 my-4 gap-2 px-4 py-3 cursor-pointer w-[300px] bg-lime rounded-full text-center">
            <img src={calculatorIcon} alt="" />
            <span>Calculate Repayments</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-slate_900 md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-[100px] md:max-w-[500px]">
          <img src={emptyIcon} alt="" />
          <h2 className="text-white font-semibold text-2xl">Results shown here</h2>
          <p className=" text-slate_300 text-center my-3">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </div>
      </main>
    </>
  );
}

export default App;
