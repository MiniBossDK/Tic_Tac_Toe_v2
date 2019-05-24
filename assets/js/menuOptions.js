function modeChose(chose) {
  // Reset both values
  sessionStorage.setItem("difficulty", null);
  sessionStorage.setItem("isMultiplayer", null);
  // Set the mode according to the user's chose
  switch (chose) {
    case 1:
      sessionStorage.setItem("difficulty", "1");
      break;
    case 2:
      sessionStorage.setItem("difficulty", "2");
      break;
    case 3:
      sessionStorage.setItem("difficulty", "3");
      break;
    case 4:
      sessionStorage.setItem("isMultiplayer", "true");
      break;
    default:
      console.log("Something went wrong");
  }

}
