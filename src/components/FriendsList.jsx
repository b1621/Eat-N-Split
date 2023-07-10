import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendCard from "./FriendCard";

const FriendsList = ({ friends, setFriends }) => {
  //   console.log(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  return (
    <div className=' '>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
      <div className=' flex  justify-end my-5'>
        <button
          onClick={() => setOpenAddFriend(!openAddFriend)}
          className=' px-5'
          // className='bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded '
        >
          {openAddFriend ? <p className=' text-black'>❌</p> : "➕"}
        </button>
      </div>
      {openAddFriend && (
        <AddFriend
          friends={friends}
          setFriends={setFriends}
          setOpenAddFriend={setOpenAddFriend}
        />
      )}
    </div>
  );
};

export default FriendsList;
