export const getUserLocation = () => {
  return navigator.geolocation.getCurrentPosition(
    ({ cords, timestamp }) => {
      //  console.log(position.coords.latitude);
      //  console.log(position.coords.longitude);
      // console.log('getUserLocation ~ position', position);
      return { cords, timestamp };
    },
    error => {
      console.log(error.message);
    }
  );
};
