const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

type Params = {
  params: {
    name: string;
  };
};

export default async function Prediction({ params }: Params) {
  const ageData = await getPredictedAge(params.name);
  const genderData = await getPredictedGender(params.name);
  const countryData = await getPredictedCountry(params.name);

  return (
    <div>
      <div>
        <div>Personal Info</div>
        <div>Age: {ageData.age}</div>
        <div>Gender: {genderData.gender}</div>
        <div>Country: {countryData.country[0].country_id}</div>
      </div>
    </div>
  );
}
