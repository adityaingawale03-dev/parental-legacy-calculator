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
    <div>

      <label className="block text-lg font-semibold mb-2">
        Date of Birth
      </label>

      <input
        type="date"
        value={dob}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

    </div>
  );
}

export default DateInput;