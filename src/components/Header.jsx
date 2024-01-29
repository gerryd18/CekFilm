// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container max-w-none mx-auto bg-[#393E46]">
        <ul className="flex gap-x-8 mx-auto  text-[#EEEEEE] justify-center items-center py-8 text-xl">
          <li className="cursor-pointer scale-1 hover:scale-110 transition-all duration-300">
            <a href="/">Now Playinh</a>
          </li>
          <li className="cursor-pointer scale-1 hover:scale-110 transition-all duration-300">
            <a href="/">Top Rated</a>
          </li>
          <li className="cursor-pointer scale-1 hover:scale-110 transition-all duration-300">
            <a href="/">Coming Soon</a>
          </li>
        </ul>   
      </div>
    </header>
  );
};

export default Header;
