export const getLawyer = () => {
  const getLawyerFromSt = localStorage.getItem("lawyers");
  if (getLawyerFromSt) {
    const convertedeGetLawyer = JSON.parse(getLawyerFromSt);
    return convertedeGetLawyer;
  } else {
    return [];
  }
};

export const setLawyer = (law) => {
  const lawyersData = getLawyer();
  const isExist = lawyersData.find((p) => p.id === law.id);
  if (isExist) {
    return lawyersData;
  }
  lawyersData.push(law);
  console.log(law);
  localStorage.setItem("lawyers", JSON.stringify(lawyersData));
};
