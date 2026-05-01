import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-4">
      <h2 className="font-bold text-5xl text-green-400">
        This Page is Not Found
      </h2>

      <Link href={"/"}>
        <button className="btn bg-green-400 text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
