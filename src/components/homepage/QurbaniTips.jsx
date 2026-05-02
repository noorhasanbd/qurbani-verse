import React from "react";

const QurbaniTips = () => {
  return (
    <div className="bg-slate-50 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Qurbani Essentials & Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "Ensure your sacrifice is performed with excellence and compassion
            according to the Sunnah."
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2 duration-300">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                🔍
              </div>
              <h3 className="card-title text-xl font-bold">Animal Selection</h3>
              <p className="text-gray-600 text-sm">
                Choose an animal that is healthy, bright-eyed, and free from
                visible defects. Check for age requirements (e.g., 1 year for
                goats, 2 for cows).
              </p>
            </div>
          </div>

          <div className="card bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2 duration-300">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                🌿
              </div>
              <h3 className="card-title text-xl font-bold">
                Compassionate Care
              </h3>
              <p className="text-gray-600 text-sm">
                Provide the animal with ample water, feed, and a comfortable
                rest area. Do not sharpen the knife in front of the animal or
                cause unnecessary stress.
              </p>
            </div>
          </div>

          <div className="card bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2 duration-300">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                🧼
              </div>
              <h3 className="card-title text-xl font-bold">Health & Hygiene</h3>
              <p className="text-gray-600 text-sm">
                Maintain a clean environment during the process. Ensure proper
                waste disposal and follow local city guidelines for a clean
                neighborhood.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold mb-2">
              Meat Distribution Guideline
            </h4>
            <p className="opacity-90">
              Remember the 1/3 Rule: One-third for yourself, one-third for
              relatives, and one-third for the needy.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;
