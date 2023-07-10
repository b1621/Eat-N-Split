const FriendCard = ({ friend }) => {
  return (
    <div className='bg-slate-800 p-5 my-10'>
      <div className='flex flex-row justify-between'>
        <div className='flex items-center'>
          <div className='h-12 w-12 rounded-full overflow-hidden'>
            <img
              className='h-full w-full object-cover'
              src={friend.image}
              alt={friend.name}
            />
          </div>
          <div className='ml-4'>
            <p className='text-white font-bold'>{friend.name}</p>
            {/* <p className="text-gray-300">{friend.profile}</p> */}
          </div>
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
