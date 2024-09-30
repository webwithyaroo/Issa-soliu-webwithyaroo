import { FaBeer } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container text-4xl blg">
      <div>logo</div>
      <div>
        <button className="flex shrink-0 cursor-pointer  items-center justify-center gap-x-4 rounded-full p-[6px] pr-2 text-black ring-2 ring-gray-200 max-[430px]:gap-x-2  max-[430px]:p-1 max-[430px]:pr-3 ">
          <div className="flex size-9  shrink-0 items-center justify-center overflow-hidden rounded-full   ring-2 ring-gray-200">
            <video autoPlay loop src="gesture.mp4">
              <track
                default
                kind="captions"
                label="English captions"
                src="captions.vtt"
              />
            </video>
          </div>
          <p>Let&apos;s talk</p>
        </button>
        <button>
          <FaBeer className="text-2xl font-bold" />
        </button>
      </div>
    </div>
  );
};

export default Header;
