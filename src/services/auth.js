import { sleep } from "../utils/sleep";

export const doSignin = (users, email, password) => {
  const isAuthenticated = users.find((user) => {
    return user.email === email && user.password === password;
  });

  return isAuthenticated;
};

export const doSignup = async (users, setUsers, user) => {
  // estos van a ser mis campos requeridos, todo servicio de autentificacion siempre va a tener campos requeridos
  const fieldsRequired = ["email", "password"];
  const errors = [];

  // chequeo si complete los campos requeridos, sino devuelvo un array con los errores
  Object.entries(user).forEach((element) => {
    const [key, value] = element;
    const isFieldRequired = fieldsRequired.includes(key);

    if (!value && isFieldRequired) {
      const error = `${key} is required`;
      errors.push(error);
    }
  });

  if (errors.length > 0) {
    return Promise.reject(errors);
  } else {
    await sleep();
    setUsers([...users, user]);
  }

  // toda async function retorna una promesa, eso significa que esta funcion retorna una promesa, en el caso de haber errores esta promesa se rechaza y devuelve los errores y en el caso que este todo bien se resuelve despues de 2000ms
};
