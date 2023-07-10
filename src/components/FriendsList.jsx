import FriendCard from "./FriendCard";

const FriendsList = ({ initialFriends }) => {
  //   console.log(initialFriends);
  return (
    <div className=' '>
      {initialFriends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
      {/* // <FriendCard key={friend.id} friend={friend} /> */}
    </div>
  );
};

export default FriendsList;
