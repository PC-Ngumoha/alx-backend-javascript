import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((userInfo) => {
    const [{ body }, { firstName, lastName }] = userInfo;
    console.log(`${ body } ${ firstName } ${ lastName }`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
