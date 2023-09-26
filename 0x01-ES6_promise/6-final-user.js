import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then((settled) => {
    const [ fulfilled, rejected ] = settled;
    return [
      {
        status: 'fulfilled',
        value: fulfilled
      }, 
      {
        status: 'rejected',
        value: rejected
      },
    ];
  });
}
