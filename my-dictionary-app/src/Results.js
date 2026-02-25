import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}

          {props.results.meanings.map(function (meaning, index) {
            return (
              <Meaning meaning={meaning} key={index} />
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}