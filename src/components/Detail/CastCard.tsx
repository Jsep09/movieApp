import React from "react";
import { Cast } from "../../interface/Credit";
import personIcon from "../../assets/background-person-icon.png";
import { useNavigate } from "react-router-dom";
interface CastProps {
  cast: Cast;
}
const CastCard: React.FC<CastProps> = ({ cast }) => {
  const navigate = useNavigate();
  const handelClickToCastCredit = () => {
    navigate(`/persondetail/${cast.id}`, { state: { id: cast.id } });
  };
  return (
    <div
      className="inline-block mr-3 rounded-xl bg-white hover:scale-105 transition duration-500 cursor-pointer"
      onClick={handelClickToCastCredit}
    >
      <div className="w-52 h-64 max-w-md overflow-hidden  shadow-md ">
        <img
          src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
          //   alt={cast.name}
          className="object-cover rounded-lg"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = personIcon;
          }}
        />
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center my-2 text-black">
        <h1 className="font-bold">{cast.name}</h1>
        <p>{cast.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
