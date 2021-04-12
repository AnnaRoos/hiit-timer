  export const msToTime = (duration) => {

    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);


    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return {
      minutes: minutes,
      seconds: seconds
    };
  }
