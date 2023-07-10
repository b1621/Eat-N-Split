import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendCard from "./FriendCard";

const FriendsList = ({
  friends,
  setFriends,
  onSelectFriend,
  selectedFriend,
}) => {
  //   console.log(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };
  return (
    <div className=" ">
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
      <div className=" flex  justify-end my-5">
        <button
          onClick={() => setOpenAddFriend(!openAddFriend)}
          className=" px-5"
          // className='bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded '
        >
          {openAddFriend ? <p className=" text-black">❌</p> : "➕"}
        </button>
      </div>
      {openAddFriend && (
        <AddFriend
          onAddFriend={handleAddFriend}
          setOpenAddFriend={setOpenAddFriend}
        />
      )}
    </div>
  );
};

export default FriendsList;
