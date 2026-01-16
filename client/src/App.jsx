{/* 
1. Server Connection:
ต้องรัน Server (Port 4001) ให้ติดก่อน
API Endpoint: GET http://localhost:4001/trips?keywords=xxx

2. Search Feature:
พิมพ์ปุ๊บ ค้นหาปั๊บ (หรืออาจจะต้องกด Enter แล้วแต่ดีไซน์ แต่โจทย์บอก "พิมพ์คำค้นหา... เพื่อค้นหา"

3. UI Display:
แสดงรายการที่ค้นหาเจอ
รูปภาพ: รูปใหญ่ 1 รูป (ตัวแรกใน array), รูปเล็ก 3 รูป
Text: Title, Description (ตัดคำไม่เกิน 100 ตัวอักษร!)
Links: คลิก Title หรือ "อ่านต่อ" ต้องเปิด Tab ใหม่
Tags: แสดงหมวดหมู่

*/}

import "./App.css";
import SearchBar from "./components/SearchBar";
import TripList from "./components/TripList";
import TitleBar from "./components/TitleBar";

function App() {
  return (
  <div className="App">
    <TitleBar />
    {/* <SearchBar /> */}
    <TripList />
  </div>
  )
}

export default App;
