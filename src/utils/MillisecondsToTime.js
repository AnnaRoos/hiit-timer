  export const msToTime = (duration) => {

    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);


    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
