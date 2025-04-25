import { Bounce, toast } from "react-toastify";

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
    toast.error("Appointment already scheduled for today", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    return false;
  }

  lawyersData.push(law);

  toast.success(`Appointment scheduled for ${law.name} successfully`);
  localStorage.setItem("lawyers", JSON.stringify(lawyersData));
  return true;
};
export const removeLawyer = (id) => {
  const lawyer = getLawyer();
  const ramainingLawyer = lawyer.filter((law) => law.id !== id);
  toast.error("Appointment Canceled", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  localStorage.setItem("lawyers", JSON.stringify(ramainingLawyer));
};
