import { useState } from 'react'
import React from 'react'
import { InputBox } from './componets'
import useCurrnecyInfo from './hooks/useCurrencyinfo'
function App() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmonunt, setConvertedAmount] =  useState(0)

  const currnecyInfo = useCurrnecyInfo(from)
  console.log("currencyInfo: ", currnecyInfo)

  const options = Object.keys(currnecyInfo)
  const BackgroundImage = `https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600`
console.log("HERE ARE THE OPTIONS: ",options);

  const swap =  () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmonunt)
    }

   const convert = () => {
     setConvertedAmount(amount * currnecyInfo[to])
   }
 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrancyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)} 
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmonunt}
                                currencyOptions={options}
                                onCurrancyChange={(currency) => setTo(currency) }
                                selectCurrency={from}
                                amountDiable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

 
}

export default App
