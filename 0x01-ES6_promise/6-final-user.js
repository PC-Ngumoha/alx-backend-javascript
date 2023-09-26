import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      let status;
      let value;
      data.forEach((item) => {
        status = item.status;
        if (status === 'rejected') value = item.reason;
        value = item.value;
        response.push({ status, value });
      });
      return response;
    });
}
