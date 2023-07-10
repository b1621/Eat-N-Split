import FriendsList from "./components/FriendsList";

function App() {
  const initialFriends = [
    {
      id: 1122,
      name: "Clark",
      image:
        "https://img.freepik.com/free-photo/confident-bearded-macho-man-looks-pleased-has-friendly-kind-grin-face-wears-round-spectacles-pink-jumper_273609-51174.jpg?w=826&t=st=1688974634~exp=1688975234~hmac=c1e826ac8b5bb60ebe40c8f3ada7d8dbfdd3d65183a27e5338dc7dc3248c6186",
      balance: -7,
    },
    {
      id: 1536,
      name: "Sarah",
      image:
        "https://img.freepik.com/free-photo/cheerful-positive-female-youngster-with-blonde-hair-dressed-casually-positive-emotions-feelings_176420-14971.jpg?w=826&t=st=1688974638~exp=1688975238~hmac=25adde87e3280d0e9da5ccf27237bafeb09fab5620da0a3b70a97aa93959eeb5",
      balance: 20,
    },
    {
      id: 1241,
      name: "Anthony",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?w=826&t=st=1688974642~exp=1688975242~hmac=04da294af25652e49fd3d4a9dd34de7e6c03a06043106eb9e6d0c10eb63bc291",
      balance: 0,
    },
  ];
  return (
    <>
      <div className='absolute w-screen bg-slate-900 text-white h-screen'>
        <div className=' w-[80%] mx-auto'>
          {/* <div className=' bg-slate-800 p-5 m-10'>
            <p>Name</p>
            <p className=' text-green-700'>You owe clark</p>
            <button className='px-5 py-1  float-right relative -top-10 bg-orange-700'>
              Select
            </button>
          </div> */}

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  my-10'>
            <div className=''>
              <FriendsList initialFriends={initialFriends} />
            </div>
            <div className=' border px-10 lg:px-0'>
              <div className=' bg-slate-800 p-5 my-10'>some text</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
