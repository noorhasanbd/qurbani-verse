import React from "react";
import data from "@/lib/data/data.json";
import Image from "next/image";
import Link from "next/link";

const AnimalDetails = async ({ params }) => {
  const { id } = await params;
  const animal = data.find((item) => item.id.toString() === id);

  if (!animal) {
    return <div className="text-center py-20 font-bold text-xl">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <Link href="/all-animals" className="text-sm text-slate-400 hover:text-green-600 mb-8 inline-block transition-colors">
          &larr; SHOP ALL / {animal.type.toUpperCase()}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-lg bg-slate-100">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              priority
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-sm">
              Featured Item
            </div>
          </div>

          
          <div className="flex flex-col">
            <div className="border-b border-slate-100 pb-6 mb-6">
              <h1 className="text-5xl font-black text-slate-900 mb-2 uppercase tracking-tighter">
                {animal.name}
              </h1>
              <p className="text-lg text-slate-500 font-medium">{animal.breed}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-slate-900">৳{animal.price}</span>
                
              </div>
              <p className="text-green-600 text-sm font-bold">In stock and ready to ship</p>
            </div>

            <div className="space-y-6 mb-10">
              
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>🚚</span> <strong>Free Shipping</strong> on orders over ৳50000
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>🛡️</span> <strong>Secure</strong> health guarantee included
                </div>
              </div>
            </div>

            {/* Checkout Actions */}
            <div className="flex flex-col gap-4">
              
              <button className="btn btn-outline border-green-300 rounded-none h-14 hover:bg-green-500 hover:text-white">
                BUY IT NOW
              </button>
            </div>

            {/* Extra Info Accordion (DaisyUI) */}
            <div className="mt-10 border-t border-slate-100">
              <div className="collapse collapse-plus border-b border-slate-100 rounded-none">
                <input type="checkbox" /> 
                <div className="collapse-title text-sm font-bold px-0">
                  SPECIFICATIONS
                </div>
                <div className="collapse-content px-0 text-sm text-slate-500">
                  <p>Type: {animal.type}</p>
                  <p>Breed: {animal.breed}</p>
                  <p>ID: SKU-{id.padStart(5, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;