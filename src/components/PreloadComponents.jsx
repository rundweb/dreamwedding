import flower from "../assets/flowers.png";

const PreloadComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={flower} alt="" className="w-20 animate-[spin_3s_linear_infinite]"/>
      <h1 className="font-Playfair text-2xl text-blue-900">Loading Memories</h1>
    </div>
  );
};

export default PreloadComponents;
