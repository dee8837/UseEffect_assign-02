import { ombd } from "../utils";
import { useState, useEffect } from "react";
import * as React from "react";
import Card from "./Card";

const Nav = () => {
  const [list, setList] = useState("");
  const [clicked, setClicked] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== undefined) {
      (async (_) => {
        const response = await ombd.get(`?S=${value}`);
        if (response.data.Response === "True") {
          setList(response.data.Search);
          setTrigger(true);
        } else {
          setTrigger(false);
        }
      })();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  const input = (e) => {
    const input_value = e.target.value;
    setValue(input_value);
  };

  const submit_input = (_) => {
    if (value !== "") {
      setClicked(true);
      setTimeout((_) => {
        setClicked(false);
      }, 5000);
    }
  };

  return (
    <>
      {trigger === "false" && clicked === "true" ? console.log("trigger") : " "}

      <h2 color="white">Hooked</h2>
      <input
        type="text"
        onKeyUp={input}
        placeholder="search your Movie names here"
      />
      <button onClick={submit_input}>Search</button>

      <p
        className={
          trigger === false && clicked === true ? "notfound" : "notfound none"
        }
      >
        Not found
      </p>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        {trigger === true
          ? list.map((data, idx) => {
              return <Card key={idx} data={data} />;
            })
          : ""}
      </div>
    </>
  );
};

export default Nav;
