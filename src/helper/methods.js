export const enterPressed = (event, callBack) => {
  if (event.key === "Enter") {
      console.log("enter pressed ")
      callBack();
  }
};
