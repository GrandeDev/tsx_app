import useAthleteByUrlService from "./useAthleteByUrlService";

export interface Props {
  url: string;
}

const Athlete: React.FC<Props> = ({ url }) => {
  const service = useAthleteByUrlService(url);

  return (
    <div>
      {service.status === "loading" && <div>Loading API service...</div>}
      {service.status === "loaded" && (
        <div>
          <h2>{service.payload.firstName}</h2>
        </div>
      )}
        {/* // service.payload.results.map(Athlete => (
        //   <div key={Athlete.url}>{Athlete.firstName}</div>
        // ))} */}
      {service.status === "error" && (
        <div>Error on initializing API.</div>
      )}
    </div>
  );
};

export default Athlete;
