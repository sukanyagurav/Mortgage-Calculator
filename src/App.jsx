import Input from "./components/Input";
import calculatorIcon from "./assets/icon-calculator.svg";
import emptyIcon from "./assets/illustration-empty.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

function App() {
  const schema = z.object({
    mortgage_amount: z.number({message:'This field is required!'}).min(1,{message:'Amount should be between 1 to 100000000'}).max(100000000,{message:'Amount should be between 1 to 100000000'}),
    term: z.number({message:'This field is required!'}).min(1,{message:'Interest rate should be between 1 to 100'}).max(100,{message:'Interest rate should be between 1 to 100'}),
    interst_rate: z.number({message:'This field is required!'}).min(1,{message:'Interest rate should be between 1 to 100'}).max(100,{message:'Interest rate should be between 1 to 100'}),
    type: z.string().refine((val) => ["repayment", "interest"].includes(val)),
  });
  const [monthlyPayement,setMonthlyPayment] = useState(0)
  const [termValue,setTermValue] = useState(0)


  const {
    register,
    formState: { errors,isSubmitSuccessful},
    handleSubmit,
    reset,
    
  } = useForm({ resolver: zodResolver(schema) });
  function clearAll() {
    reset();
  }

  function calculateData(data) {
   
   let monthlyInterest = (data.interst_rate / 100) / 12
    let calculatedMonthlyPayment, calculatedTermValue
    if(data.type == 'repayment'){
    
      calculatedMonthlyPayment = data.mortgage_amount * (monthlyInterest * Math.pow( monthlyInterest + 1,data.term * 12)) /  (Math.pow( monthlyInterest + 1, data.term * 12) - 1)
      calculatedTermValue = calculatedMonthlyPayment.toFixed(2) * (parseInt(data.term) * 12)
      setMonthlyPayment(new Intl.NumberFormat('en-US',{  maximumFractionDigits: 2}).format(calculatedMonthlyPayment))
      setTermValue(new Intl.NumberFormat('en-US',{  maximumFractionDigits: 2}).format(calculatedTermValue))
    }else if(data.type == 'interest'){
      calculatedMonthlyPayment = data.mortgage_amount * monthlyInterest
      calculatedTermValue = calculatedMonthlyPayment.toFixed(2) * (parseInt(data.term) * 12)
      setMonthlyPayment(new Intl.NumberFormat('en-US',{  maximumFractionDigits: 2}).format(calculatedMonthlyPayment))
      setTermValue(new Intl.NumberFormat('en-US',{  maximumFractionDigits: 2}).format(calculatedTermValue))
    }

  }
  return (
    <>
      <main className=" w-full flex bg-white md:rounded-2xl  drop-shadow-md overflow-hidden flex-col md:flex-row max-w-[900px]">
        <div className=" bg-white p-6 basis-6/12 ">
          <div className="flex items-center justify-between mb-4 flex-wrap">
            <h1 className="font-bold text-2xl text-slate_900">Mortgage Calculator</h1>
            <button
              onClick={clearAll}
              className="border-b-2 border-slate_700 text-slate_700 hover:opacity-[0.5]"
            >
              Clear All
            </button>
          </div>
          <form onSubmit={handleSubmit(calculateData)} noValidate="noValidate">
            <div className=" mt-2">
              <label
                htmlFor="mortgage_amount"
                className="mb-2 block text-slate_700 font-semibold"
              >
                Mortgage Amount
              </label>
              <Input
                text="£"
                position="left-0"
                id="mortgage_amount"
                padding="px-4 pl-[3rem] "
                min="0"
                register={register}
                name="mortgage_amount"
                valueAsNumber
                errors={errors.mortgage_amount}
              />
              {errors.mortgage_amount && (
                <span className="text-red my-1 block">
                  {errors.mortgage_amount.message}
                </span>
              )}
            </div>
            <div className="flex md:justify-between md:items-center flex-col md:flex-row md:gap-4 mt-2">
              <div className="mt-2 flex-1">
                <label
                  htmlFor="mortgage_term"
                  className="mb-2 block text-slate_700 font-semibold"
                >
                  Mortgage Term
                </label>
                <Input
                  text="years"
                  position="right-0"
                  id="mortgage_term"
                  padding="px-2 pr-[4rem]"
                  min="1"
                  max="100"
                  register={register}
                  name="term"
                  valueAsNumber
                  errors={errors.term}
                />
                {errors.term && (
                  <span className="text-red my-1 block">
                    {errors.term.message}
                  </span>
                )}
              </div>
              <div className="mt-2 flex-1">
                <label
                  htmlFor="interst_rate"
                  className="mb-2 block text-slate_700 font-semibold"
                >
                  Interest Rate
                </label>
                <Input
                  text="%"
                  id="interst_rate"
                  position="right-0"
                  register={register}
                  name="interst_rate"
                  valueAsNumber
                  padding="px-2 pr-[4rem]"
                  errors={errors.interst_rate}
                  min="1"
                  max="100"
                />
                {errors.interst_rate && (
                  <span className="text-red my-1 block">
                  {errors.interst_rate.message}
                  </span>
                )}
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
                  {...register("type")}
                />
                <span className="relative w-[20px] h-[20px] border-[1.4px] p-1 border-slate_700 rounded-full  mr-2 after:rounded-full after:bg-lime after:absolute after:w-[50%]  after:h-[50%] transition-all duration-100 after:scale-0 flex items-center justify-center"></span>
                <label htmlFor="repayment">Repayment</label>
              </div>
              <div className="border-[1px] border-slate_700 px-3 py-2 rounded-md mt-3 relative flex items-center form_field cursor-pointer  ">
                <input
                  type="radio"
                  name="type"
                  value="interest"
                  id="interest"
                  className="absolute opacity-0  w-5 h-5 "
                  {...register("type")}
                />
                <span className="relative w-[20px] h-[20px] border-[1.4px] p-1 border-slate_700 rounded-full  mr-2 after:rounded-full after:bg-lime after:absolute after:w-[50%]  after:h-[50%] transition-all duration-100 after:scale-0 flex items-center justify-center"></span>
                <label htmlFor="interest">Interest Only</label>
              </div>
              {errors.type && (
                <span className="text-red my-1 block">
                  This field is required!
                </span>
              )}
            </div>
            <button
              type="submit"
              className="flex  items-center justify-center mt-7 my-4 gap-2 px-4 py-3 cursor-pointer w-[300px] bg-lime rounded-full transition-all duration-300 text-center hover:bg-light"
            >
              <img src={calculatorIcon} alt="" />
              <span>Calculate Repayments</span>
            </button>
          </form>
        </div>
        <div className={`flex basis-6/12 flex-col ${!isSubmitSuccessful && 'items-center justify-center text-center'} p-8 bg-slate_900 md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-[100px] `}>
        { !isSubmitSuccessful && <>  <img src={emptyIcon} alt="" />
          <h2 className="text-white font-semibold text-2xl">
            Results shown here
          </h2>
          <p className=" text-slate_300  my-3">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
          </>}
          {
            isSubmitSuccessful && <>
              <h2 className="text-white font-semibold text-2xl">Your results</h2>
              <p className=" text-slate_300  my-3"> Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>

              <div className="p-8 rounded-t-md border-t-lime border-t-4 mt-6 bg-slate_900 drop-shadow-2xl">
                <p className=" text-slate_300">Your monthly repayments</p>
                <span className="text-lime text-5xl font-bold block pt-2 pb-4 border-b-[0.3px] border-b-slate_700">£ {monthlyPayement}</span>
               <p className=" text-slate_300 mt-4 mb-2">Total you'll repay over the Term</p> 
               <span className="text-slate_100 font-semibold text-2xl">£ {termValue}</span>
              </div>
            </>
          }
        </div>
      </main>
    </>
  );
}

export default App;
