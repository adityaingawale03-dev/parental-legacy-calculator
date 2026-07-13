import { FaCalendarAlt } from "react-icons/fa";



function DateInput({ dob, setDob }) {

  const handleChange = (e) => {

    const selectedDate = e.target.value;

    if (new Date(selectedDate) > new Date()) {
      alert("Future dates are not allowed.");
      return;
    }

    setDob(selectedDate);
  };

  return (
    <div className="relative">

  <label className="block text-lg font-semibold mb-2">
    Date of Birth
  </label>

  <FaCalendarAlt
    className="absolute left-4 top-[52px] text-gray-500"
  />

  <input
    type="date"
    value={dob}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  />

</div>
  );
}

export default DateInput;