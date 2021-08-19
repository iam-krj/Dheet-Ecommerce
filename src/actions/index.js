import React from "react";

const updateArt = () => {
  return (dispatch) => {
    fetch("/assets/database.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_ART",
          payload: data,
        });
      });
  };
};

export { updateArt };
