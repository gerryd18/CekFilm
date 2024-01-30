import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container max-w-none mx-auto bg-[#393E46]">
        <ul className="flex flex-col md:flex-row gap-x-8 gap-y-4 mx-auto text-[#EEEEEE] justify-center items-center py-8 text-xl">
          <li className="cursor-pointer scale-1 hover:scale-110 transition-all duration-300">
            <Link to="/?type=nowPlaying">Now Playing</Link>
          </li>
          <li className="cursor-pointer scale-1 hover:scale-110 transition-all duration-300">
            <Link to="/?type=topRated">Top Rated</Link>
          </li>
          <li className="cursor-pointer scale-1 hover:scale-110 transition-all duration-300">
            <Link to="/?type=comingSoon">Coming Soon</Link>
          </li>
        </ul>   
      </div>
    </header>
  );
};

export default Header;
