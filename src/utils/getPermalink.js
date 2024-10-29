import { getData } from "./apiHandler";

export const getPermalink = async (permalink) => {
  const local = localStorage.getItem(permalink);
  if (local) {
    return JSON.parse(local);
  }
  try {
    const data = await getData(`products/${permalink}`);
    localStorage.setItem(permalink, JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};
