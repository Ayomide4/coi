export default function Quote() {
  return (
    <div className="bg-background h-72 p-10">
      <div className="flex flex-col items-center relative border border-red-500">
        <h1 className="text-4xl mb-10">
          Draw near to God, and he will draw near to you.
        </h1>
        <h2 className="text-4xl">—James 4:8</h2>
        <div className="absolute flex bottom-0">
          <div className="w-0 h-0 border-l-[85px] border-r-[0px] border-b-[85px] border-b-secondary border-transparent opacity-80 z-1"></div>
          <div className="w-0 h-0 border-l-[85px] border-r-[0px] border-b-[85px] border-b-secondary border-transparent opacity-80 z-1"></div>
        </div>
      </div>
    </div>
  );
}
