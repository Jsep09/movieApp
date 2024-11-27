import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Container from "@mui/material/Container";
import getMoviePerson from "../service/Movieperson";
import getPersonDetail from "../service/PersonDetail";
import { useLocation } from "react-router-dom";
import { Cast } from "../interface/movieperson";
import { CastDetailResponse } from "../interface/CastDetail";
import MoviePersonCard from "../components/Person-detail/MoviePersonCard";
interface locationStateId {
  id: number;
}
const Castdetail = () => {
  const [personDetail, setPersonDetail] = useState<CastDetailResponse>();
  const [moviePerson, setmoviePerson] = useState<Cast[]>([]);
  const location = useLocation();
  const { state } = location as { state: locationStateId };

  const getApiCastCredit = async () => {
    const result = await getMoviePerson(state.id);
    setmoviePerson(result);
  };

  useEffect(() => {
    getApiCastCredit();
  }, []);

  // useEffect(() => {
  //   console.log("castCredit data =>", moviePerson);
  // }, [[moviePerson]]);

  const getApiPersonDetail = async () => {
    const result = await getPersonDetail(state.id);
    setPersonDetail(result);
  };
  useEffect(() => {
    getApiPersonDetail();
  }, []);

  // useEffect(() => {
  //   console.log("personDetail data =>", personDetail);
  // }, [[personDetail]]);

  return (
    <div>
      <Appbar />
      <Container maxWidth="xl">
        {/* desktop view */}
        <div className="hidden md:block relative mt-3 p-10">
          <div className="flex gap-4">
            <div className="flex-1 z-20  max-w-md shadow-white  ">
              <img
                src={`https://image.tmdb.org/t/p/original/${personDetail?.profile_path}`}
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="flex-1 flex-col z-20 overflow-hidden">
              <h2 className="text-white text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold inline-block">
                {personDetail?.name}
              </h2>
              <div className="my-4">
                <div className="my-4">
                  <h2 className="text-white text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold inline-block mb-2">
                    biography
                  </h2>
                  <p className="text-white text-sm  ">
                    {personDetail?.biography}
                  </p>
                </div>
                <div className="flex flex-col  ">
                  <h1 className=" pt-5  font-bold text-2xl text-white">
                    Movie
                  </h1>
                  <div className="flex overflow-x-scroll p-5  ">
                    <div className="flex flex-nowrap ">
                      {moviePerson.map((movie, index) => (
                        <MoviePersonCard key={index} movie={movie} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="block md:hidden max-h-screen">
          <div className=" flex-col justify-center items-center relative mt-5 z-20 text-white text-3xl font-bold">
            <div className="flex-1 flex justify-center ">
              <div className="max-w-60">
                <img
                  src={`https://image.tmdb.org/t/p/original/${personDetail?.profile_path}`}
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-white text-4xl font-bold inline-block mt-5">
                {personDetail?.name}
              </h2>

              <div className="mt-5">
                <h2 className="text-white text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold inline-block mb-2">
                  Biography
                </h2>
                <p className="text-gray-400 text-xs">
                  {personDetail?.biography}
                </p>
              </div>
              <div className="flex flex-col  ">
                <h1 className=" pt-5  font-bold text-xl text-white">Movie</h1>
                <div className="flex overflow-x-scroll p-5  ">
                  <div className="flex flex-nowrap text-sm">
                    {moviePerson.map((movie, index) => (
                      <MoviePersonCard key={index} movie={movie} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Castdetail;
