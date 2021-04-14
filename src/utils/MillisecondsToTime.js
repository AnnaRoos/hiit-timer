  export const msToTime = (duration) => {

    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);


    return {
      minutes: minutes,
      seconds: seconds
    };
  }
