import { useState , useEffect } from "react";
import { FaDna } from "react-icons/fa6";
import DateInput from "./components/DateInput";
import ResultTable from "./components/ResultTable";
import Summary from "./components/Summary";
import ParentChart from "./components/ParentChart";
import { calculateLegacy } from "./utils/calculator";



function App() {
  const [dob, setDob] = useState("");
  const calculation = calculateLegacy(dob);
  useEffect(() => {
  const savedDob = localStorage.getItem("dob");

  if (savedDob) {
    setDob(savedDob);
  }
}, []);

useEffect(() => {
  if (dob) {
    localStorage.setItem("dob", dob);
  }
}, [dob]);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10">
            <div className="flex justify-center items-center gap-3 mb-3">
              <FaDna className="text-5xl text-indigo-600" />

              <h1 className="text-5xl font-bold text-indigo-700">
                Parental Legacy Calculator
              </h1>
            </div>

            <p className="text-gray-600 text-lg">
              Discover your parental legacy and life factor distribution
            </p>
          </div>

       <div className="bg-white rounded-2xl shadow-2xl p-8 border bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100">

          <DateInput
            dob={dob}
            setDob={setDob}
          />
          {dob && (
            <p className="mt-4 text-green-600 font-medium">
              Selected Date: {dob}
            </p>
          )}

          <div className="mt-10">
            <ResultTable data={calculation?.results}/>
          </div>

          <div className="mt-10">
            <Summary 
             motherTotal={calculation?.motherTotal}
            fatherTotal={calculation?.fatherTotal}
            grandTotal={calculation?.grandTotal}
            dominantParent={calculation?.dominantParent}
            />
          </div>

          <div className="mt-10">
            <ParentChart data={calculation?.results} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;