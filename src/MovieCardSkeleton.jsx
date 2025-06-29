import React from "react";

function MovieCardSkeleton() {
  return (
    <div className="w-[17rem]  min-h-[20rem]  relative bg-transparent  rounded-[.45rem] flex justify-between items-center flex-col px-2 py-1">
      <div className=" h-[20rem] pulseContainer  relative top-0 w-full rounded-[.45rem] bg-gray-950"></div>
      <div className="flex justify-between py-3 w-full ">
        <h1 className="font-bold text-[1.1rem] h-[1.5rem] w-[5.3rem]  rounded-[1rem] pulseContainer bg-gray-950"></h1>
        <h1 className="bg-gray-950 px-2 pulseContainer rounded-[1rem] h-[1.4rem] w-[2.3rem] absolute bottom-4 right-2"></h1>

        <div className="flex  gap-x-2 pt-2 px-1 absolute top-0 left-0 ">
          <h1 className=" ml-3 mt-2 rounded-[1rem] h-[1.5rem] w-[5rem] px-2 backdrop-blur-lg bg-gray-950 pulseContainer"></h1>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
