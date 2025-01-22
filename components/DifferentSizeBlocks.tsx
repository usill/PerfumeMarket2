import React from "react";

const DifferentSizeBlocks: React.FunctionComponent = () => {
  return (
    <div className="mt-12 h-large flex gap-8">
      <div className="w-1/3 h-full relative flex flex-col gap-8">
        <div className="h-2/3 w-full bg-gray-300"></div>
        <div className="h-1/3 w-full bg-gray-300"></div>
      </div>
      <div className="w-2/3 h-full flex flex-col gap-8">
        <div className="flex h-1/2 gap-8">
          <div className="w-1/2 h-full bg-gray-300"></div>
          <div className="w-1/2 h-full bg-gray-300"></div>
        </div>
        <div className="w-full h-1/2 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default DifferentSizeBlocks;