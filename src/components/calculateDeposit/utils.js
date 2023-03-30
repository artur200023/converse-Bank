import { TbCurrencyDram } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { BiRuble } from "react-icons/bi";

export const onCalculation = ({ amount, rate, duration }) => {
    const dailyRate = Number(rate) / 365;
    const amountPercent =
      (Number(amount) * Number(duration) * dailyRate) / 100 || 0;
    return {
        amountPercent,
        amount,
        overallAmount: amount + amountPercent
    }
  };

  export  const capitalPracent = ({ amount, rate, duration }) => {
    const amountPercent =
      Number(amount) *
      Math.pow(1 + Number(rate) / 100, duration / 365) || 0;
      return {
        amountPercent,
        amount,
        overallAmount:amount + amountPercent
      }

  };

  const getDataCheckboxes = (number) => {
    return number === 1;
  };

  export const getFilteredSetting = (calculate = [], userInput) => {
    // console.log(userInput, 'user input');
    const data = calculate.filter((element) => {
  //  console.log(element.currency.sign === userInput.iso ,'element.currency.sign');

     return (
      Number(userInput.amount)  > element.amount_from &&
      Number(userInput.amount)  < element.amount_to &&
       userInput.capitalization === getDataCheckboxes(element.capitalization) &&
       userInput.with_partial_withdrawal ===
         getDataCheckboxes(element.with_partial_withdrawal) &&
       userInput.with_replenishment ===
         getDataCheckboxes(element.with_replenishment) &&
       Number(userInput.duration) > element.duration_from &&
       Number(userInput.duration) < element.duration_to &&
      ( userInput.iso === element.currency.sign)
       
     );
     
   });

   if(!data.length) {
     return {}
   };
 
   return data[0];
   }


   export const buttonList = [
    {
      id: 1,
      component: <TbCurrencyDram />,
      iso: "֏",
    },
    {
      id: 2,
      component: <TbCurrencyDollar />,
      iso: "$",
    },
    {
      id: 3,
      component: <BiRuble />,
      iso: "₽",
    },
  ];





