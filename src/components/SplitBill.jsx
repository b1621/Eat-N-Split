import { useState } from "react";

const SplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    // setBill("");
    // setPaidByUser("");
    // setWhoIsPaying("user");
  }

  return (
    <div className=" bg-slate-800 py-10 px-5">
      <h2 className="text-center text-3xl pb-10 uppercase">
        SPLIT A BILL WITH {selectedFriend.name}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 gap-x-3 gap-y-5"
      >
        <label>💰 Bill Value</label>
        <input
          className="text-gray-800 px-3 py-1 bg-slate-300 outline-none col-span-2  rounded"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="number"
        />

        <label> 👨 Your Expense</label>
        <input
          className="text-gray-800 px-3 py-1 bg-slate-300 outline-none col-span-2  rounded"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
          type="number"
        />

        <label> 👩‍💼👨‍💼 {selectedFriend.name}'s Expense</label>
        <input
          className="text-gray-800 px-3 py-1 rounded  outline-none col-span-2 "
          type="number"
          value={paidByFriend}
          disabled
        />

        <label>🤑 Who is paying the bill? </label>
        <select
          className="outline-none text-gray-800 bg-slate-300 px-3 py-1 rounded col-span-2 "
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          name=""
          id=""
        >
          <option className="py-1" value="you">
            You
          </option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className=" col-start-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-7 rounded ">
          Split Bill
        </button>
      </form>
    </div>
  );
};

export default SplitBill;
