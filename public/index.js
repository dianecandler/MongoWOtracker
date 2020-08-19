init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
// this function controls the new workout/continue buttons
// "?id=" will appear on the http link
// else calls for button continue or none if not there...d-none is bootstrap to hide cont btn
