export const emailEffectiveness = (isEmail) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return emailRegex.test(isEmail);
};

export const nameEffectiveness = (isName) => {
  const nameRegex = /^[가-힣]{2,15}$/;

  return nameRegex.test(isName);
};

export const phoneEffectiveness = (isPhone) => {
  const phoneRegex = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

  return phoneRegex.test(isPhone);
};

export const passwordEffectiveness = (isPassword) => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;

  return passwordRegex.test(isPassword);
};
