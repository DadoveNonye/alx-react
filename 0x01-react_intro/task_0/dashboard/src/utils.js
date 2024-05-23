import React from "react";

 export default function getFullYear () {
  return new Date().getFullYear();
}

export default function getFooterCopy (isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}