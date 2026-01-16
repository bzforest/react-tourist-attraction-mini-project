import React, { useState } from "react";
import { Link, X } from "lucide-react";

function TripCard(props) {
  const { imgSrc, title, description, tag, img1, img2, img3, url, onTagClick } =
    props;

  //  state เสริมที่อยากลองทำ ในการซูมหลังจากคลิ้กที่รูป
  const [zoomImage, setZoomImage] = useState(null);

  const handleCopy = () => {
    if (url) {
      navigator.clipboard.writeText(url);
      alert(`Copy Link เรียบร้อยแล้ว!\n${url}`);
    }
  };

  return (
    <>
      <div className="card flex gap-6 w-full max-w-7xl mx-auto p-4 pt-10 bg-white items-center relative">
        {/* w-1/3: ให้รูปกินพื้นที่ประมาณ 1 ใน 3 ของการ์ด */}
        <div className="w-1/3 shrink-0">
          <img
            src={imgSrc}
            alt="Main Trip"
            className="w-[350px] h-[250px] object-cover rounded-3xl hover:scale-[1.02] cursor-pointer hover:shadow-2xl"
            onClick={() => setZoomImage(imgSrc)}
          />
        </div>

        {/* grow: ให้กล่องนี้ยืดกินพื้นที่ที่เหลือทั้งหมด */}
        <div className="flex flex-col gap-2 grow">
          <h1 className="title font-semibold text-3xl text-gray-700">
            {title}
          </h1>

          <p className="description text-gray-500 text-sm">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}{" "}
            {/* เช็คว่าเกิน 100 ตัวอักษรมั้ย */}
          </p>

          <a
            href={url}
            className="text-sky-400 underline cursor-pointer w-fit hover:scale-[1.05]"
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านต่อ
          </a>

          <div className="flex gap-2 text-xs text-gray-500 my-1">
            <span className="font-bold">หมวด:</span>
            {tag.map((item, index) => (
              <div key={index}>
                {index === tag.length - 1 && index > 0 && <span>และ</span>}
                <span
                  className="underline decoration-gray-400 cursor-pointer px-1 hover:text-sky-500 hover:scale-125"
                  onClick={() => onTagClick(item)}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mini-image flex gap-4 mt-2">
            <img
              src={img1}
              alt="mini 1"
              className="w-20 h-20 rounded-xl object-cover hover:scale-[1.02] cursor-pointer hover:shadow-xl"
              onClick={() => setZoomImage(img1)}
            />
            <img
              src={img2}
              alt="mini 2"
              className="w-20 h-20 rounded-xl object-cover hover:scale-[1.02] cursor-pointer hover:shadow-xl"
              onClick={() => setZoomImage(img2)}
            />
            <img
              src={img3}
              alt="mini 3"
              className="w-20 h-20 rounded-xl object-cover hover:scale-[1.02] cursor-pointer hover:shadow-xl"
              onClick={() => setZoomImage(img3)}
            />
          </div>
        </div>

        <button
          className="absolute bottom-6 right-6 text-sky-400 hover:text-sky-600 transition-colors hover:scale-[1.05] cursor-pointer"
          onClick={handleCopy}
        >
          <Link size={48} />
        </button>
      </div>
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setZoomImage(null)} // กดที่พื้นหลังดำๆ เพื่อปิด
        >
          <div className="relative max-w-5xl max-h-full">
            {/* รูปที่ขยายใหญ่ */}
            <img
              src={zoomImage}
              alt="Expanded"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

            <button
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => setZoomImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TripCard;
