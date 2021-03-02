"use strict";

window.addEventListener("DOMContentLoaded", start);

let elementToPaint;

async function start() {
  let response = await fetch("cap_exercise-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  document.querySelector("#crown").classList.add("g_to_interact_with");
  document.querySelector("#visor").classList.add("g_to_interact_with");

  document.querySelectorAll(".g_to_interact_with").forEach((eachG) => {
    console.log("eachG");

    eachG.addEventListener("click", theClick);
    eachG.addEventListener("mouseover", theMouseover);
    eachG.addEventListener("mouseout", theMouseout);
  });

  document.querySelectorAll(".color_btn").forEach((each_btn) => {
    each_btn.addEventListener("click", colorClick);
  });
}

function theClick() {
  elementToPaint = this;
  this.style.fill = "grey";
}

function theMouseover() {
  this.style.stroke = "blue";
}

function theMouseout() {
  this.style.stroke = "none";
}

function colorClick() {
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
