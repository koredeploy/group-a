import Cart from "../../../../components/Cart/Cart";

const Feedback = () => {
  return (
    <div className="flex w-full">
      <div className="text-black sm:pl-[33.3rem] w-full sm:py-[11.7rem] py-[2rem] sm:px-0 px-4">
        <div className="border bg-white text-black rounded-md px-[1.2rem] h-[35rem] w-full mr-">
          <h1 className="py-[2rem] text-[28.5px] font-semibold text-[#0c513f]">
            Feedback
          </h1>
          <form>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input
                type="text"
                placeholder="Subject Title"
                className="w-full border z-90 py-3 rounded-lg px-3 border-[#0c513f82] mt-3 text-[#494B4D] font-light outline-none"
              />
            </div>
            <div className="mt-7">
              <label htmlFor="feedback">Write your feedback</label>
              <textarea
                placeholder="Type your message"
                className="w-full border p-20 px-2 pt-3 rounded-lg border-[#0c513f82] mt-3 text-[#494B4D] font-light outline-none resize-none"
                rows="4"
              ></textarea>
            </div>
            <button className="border px-10 mt-3 border-[#FF7834] text-white bg-[#FF7834] rounded-lg py-2 text-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Feedback;
