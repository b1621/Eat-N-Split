import { useState } from "react";

const AddFriend = ({ friends, setFriends, setOpenAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/145/145843.png?w=740&t=st=1688991122~exp=1688991722~hmac=b7f96d4e0eea19d92d88b36db4afd493cc2bacc1b8ded5fa5521d323d0eb7485"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setFriends([
      ...friends,
      { name: friendName, image: friendImage, balance: 0 },
    ]);
    setOpenAddFriend(false);
  };
  return (
    <div className=' bg-gray-800 bg-cyan-900 bg-sky-950 bg-slate-800 px-10 py-5'>
      <form onSubmit={handleSubmit}>
        <div className=' grid grid-cols-3 px-3 py-5'>
          <span> 🙍‍♂️🙍‍♀️ Friend Name</span>
          <input
            className='border outline-none bg-slate-300 text-black px-5 py-1 col-span-2'
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            type='text'
          />
        </div>
        <div className=' grid grid-cols-3 px-3 py-5'>
          <span className=''> 📷 Image Url</span>
          <input
            type='text'
            value={friendImage}
            onChange={(e) => setFriendImage(e.target.value)}
            className=' border outline-none col-span-2 bg-slate-300 text-black px-5 py-1'
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700  font-bold py-2 px-6 rounded '
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
