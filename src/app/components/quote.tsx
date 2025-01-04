export default function Quote() {
  return (
    <div className="bg-background h-72 p-8">
      <div className="flex flex-col relative  z-20">
        <h1 className="text-3xl mb-0 z-20 mt-10">
          Draw near to God, and he will draw near to you.
        </h1>
        <div className="absolute flex top-0 left-0 z-10">
          <div className="w-0 h-0 rotate-90 border-l-[0px] border-r-[50px] border-b-[50px] border-b-secondary border-transparent opacity-80"></div>
          <div className="w-0 h-0 rotate-90 border-l-[0px] border-r-[50px] border-b-[50px] border-b-secondary border-transparent opacity-80"></div>
        </div>
        <div className="absolute flex bottom-20 right-0 z-10">
          <div className="w-0 h-0 border-l-[75px] border-r-[0px] border-b-[75px] border-b-secondary border-transparent opacity-80"></div>
          <div className="w-0 h-0 border-l-[75px] border-r-[0px] border-b-[75px] border-b-secondary border-transparent opacity-80"></div>
        </div>
        <h2 className=" text-3xl text-right mt-20 z-20 ">—James 4:8</h2>
      </div>
    </div>
  );
}
