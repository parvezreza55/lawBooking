import { toast } from "react-toastify";

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
    toast("already added");
    return false;
  }

  lawyersData.push(law);

  toast(`Appointment scheduled for ${law.name} successfully`);
  localStorage.setItem("lawyers", JSON.stringify(lawyersData));
  return true;
};
export const removeLawyer = (id) => {
  const lawyer = getLawyer();
  const ramainingLawyer = lawyer.filter((law) => law.id !== id);
  toast("remove successfully");
  localStorage.setItem("lawyers", JSON.stringify(ramainingLawyer));
};
