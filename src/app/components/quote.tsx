export default function Quote() {
  return (
    <div className="bg-background h-72 p-8 md:flex md:justify-center md:items-center">
      <div className="flex flex-col relative  z-20 md:w-full ">
        <h1 className="text-3xl mb-0 z-20 mt-10 md:font-semibold md:text-4xl">
          Draw near to God, and he will draw near to you.
        </h1>
        <div className="absolute flex top-0  left-0 z-10 md:top-0">
          <div className="w-0 h-0 rotate-90 border-l-[0px] border-r-[50px] border-b-[50px] border-b-secondary border-transparent opacity-80  "></div>
          <div className="w-0 h-0 rotate-90 border-l-[0px] border-r-[50px] border-b-[50px] border-b-secondary border-transparent opacity-80  "></div>
        </div>
        <div className="absolute flex bottom-20 right-0 z-10 md:bottom-0 ">
          <div className="border-l-[75px] border-r-[0px] border-b-[75px] border-b-secondary border-transparent opacity-80 md:border-l-[125px] md:border-r-[0px] md:border-b-[125px]"></div>
          <div className="border-l-[75px] border-r-[0px] border-b-[75px] border-b-secondary border-transparent opacity-80 md:border-l-[125px] md:border-r-[0px] md:border-b-[125px]"></div>
        </div>

        <h2 className=" text-3xl text-right md:text-left mt-20 md:mt-10 z-20 md:text-4xl">
          —James 4:8
        </h2>
      </div>
    </div>
  );
}
