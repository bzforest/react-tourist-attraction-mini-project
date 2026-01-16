function SearchBar () {
    return (
        <div className="search-box flex flex-col items-center justify-center pt-10 px-4 w-full">
            <div className="w-full max-w-6xl">
                <p>ค้นหาที่เที่ยว</p>
            </div>
                <input className="text-center border-b border-gray-500 focus:border-sky-400 outline-none py-2 text-xl text-gray-600 w-full max-w-6xl"
                type="text"
                placeholder="หาที่เที่ยวแล้วไปกัน..."
                />
        </div>

    )
}

export default SearchBar