import rules from "./rules";

export const checkAccess = (route) => {
  const userRole = localStorage.getItem("role");
  if(!userRole) return false;
  const tempRules = rules[userRole];
  return tempRules.includes(route);
};
