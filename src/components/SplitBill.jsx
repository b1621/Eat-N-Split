const SplitBill = () => {
  return (
    <div className=' bg-slate-800 py-10 px-5'>
      <h2 className='text-center text-3xl pb-10'>SPLIT A BILL WITH X</h2>
      <form className='grid grid-cols-3 gap-x-3 gap-y-5'>
        <label>💰 Bill Value</label>
        <input
          className='text-gray-800 px-3 py-1 bg-slate-300 outline-none col-span-2'
          type='text'
        />

        <label> 👨 Your Expense</label>
        <input
          className='text-gray-800 px-3 py-1 bg-slate-300 outline-none col-span-2'
          type='text'
        />

        <label> 👩‍💼👨‍💼 X's Expense</label>
        <input
          className='text-gray-800 px-3 py-1  outline-none col-span-2'
          type='text'
          disabled
        />

        <label>🤑 Who is paying the bill? </label>
        <select
          className='outline-none text-gray-800 bg-slate-300 px-3 py col-span-2'
          name=''
          id=''
        >
          <option className='py-1' value='you'>
            You
          </option>
          <option value='friend'>Friend</option>
        </select>
        <button className=' col-start-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-7 rounded '>
          Split Bill
        </button>
      </form>
    </div>
  );
};

export default SplitBill;
