import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-orange-50 flex flex-row">
      {/* Metinlerin olduğu kısım */}
      <div className="flex flex-col max-w-4xl w-full md:w-2/3 px-6 lg:ml-40 lg:w-1/2">
        <div className="flex flex-row">
          <h1 className="font-bold text-2xl justify-start text-black lg:mt-20 sm:mt-20">
            Kendi Paketini Oluştur
          </h1>
          <h2 className="text-sm hidden md:block mt-20 ml-4">Nasıl Çalışır?</h2>
        </div>
        <div>
          <h3 className="text-md text-gray-700 opacity-90 mt-2 lg:mt-4">
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </h3>
        </div>
        <div className="flex flex-row justify-between opacity-90 mt-2 lg:mt-4">
          <h4 className="text-gray-700 hover:text-black hover:underline cursor-pointer hover:font-bold">
            beije Ped
          </h4>
          <h4 className="text-gray-700 hover:text-black hover:underline cursor-pointer hover:font-bold">
            beije Günlük Ped
          </h4>
          <h4 className="text-gray-700 hover:text-black hover:underline cursor-pointer hover:font-bold">
            beije Tampon
          </h4>
        </div>
      </div>

      {/* Resmin olduğu kısım */}
      <div className="bg-white p-4 rounded-xl shadow-md mt-20 mb-60 mr-40 ml-10 hidden md:block max-w-2xl">
        <h1 className="text-black font-bold text-3xl ml-5 mt-5">
          Özel Paketin
        </h1>
        <a
          className="block w-full rounded border mt-5 mb-5 border-gray-300 border-opacity-80 px-12 py-3 text-md font-medium text-gray-800"
          href="#"
        >
          2 ayda 1 gönderim
        </a>
        <Image
          src="/images/packet.webp"
          alt="image"
          width={600}
          height={500}
          className="p-5 hidden md:block"
        />
        <div
          className="w-full h-10 justify-center  items-center rounded-full bg-gray-300 mt-10 mb-5 "
          
        >
          <p className="text-lg font-bold text-center text-gray-400 mt-5">Sepete Ekle</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
