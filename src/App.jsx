import { useState } from "react";

function App() {
  /*PART 1 --->*/ const [show, setShow] = useState(true);
  /*PART 2 --->*/ const [valueToShow, setValueToShow] = useState("");
  /*PART 3 --->*/ const [valueEnabledBtn, setvalueEnabledBtn] = useState("");

  //show--->variable
  //setShow---> function to change it
  //useState ---> allows React to change UI (User Interface)

  return (
    //When you click button ---> setShoow changes "show"
    //using "!"---> show from default "false" to "true"
    <>
      {/* +++PART 1+++ 
      Cliccking a "button" we will activate or deactivate a "div*/}
      <button style={{ margin: "15px" }} onClick={() => setShow(!show)}>
        Show Div
      </button>
      {show && <div style={{ margin: "15px" }}>Now the Div is visibile</div>}
      {/* && ---> this one check if both are true and,
       if both are true, returns the last one!
       So, we will get <div>Div visibile</div> only if "show" is true */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      <br />
      <br />
      <br />
      {/* +++PART 2+++ 
      Writing in an "input" and have the same text in a "div" */}
      <input
        style={{ margin: "15px" }}
        type="text"
        placeholder="Input text here!"
        value={valueToShow} //the value of the input! comes from what I type in the box!
        onChange={(inputElement) => setValueToShow(inputElement.target.value)}
        //onChange---> every time i modify the input-box ---> cast the function!
        //+++++++++++++++++++++++
        // function--->setValueToShow(inputElement.target.value)--->
        // take the "value" you typed in the input and assign it to {valueToShow}
        // "event.target.value" --->gets the value of the "thing" where an eventOccurred
      />
      <div style={{ margin: "15px", border: "solid red" }}>
        I will be filled with the value you typed above:
        {valueToShow}
      </div>
      {/* Here the div gets as InnerHTML {valueToShow} */}
      {/*using {{}} for the style because of CSS and React  */}
      {/* ///////////////////////////////////////////////////////////////////// */}
      <br />
      <br />
      <br />
      {/* +++PART 3+++ 
      Activate a button only if you type in the input */}
      <input
        style={{ margin: "15px" }}
        type="text"
        placeholder="When type, activate button!"
        onChange={(e) => {
          setvalueEnabledBtn(e.target.value);
        }}
        // (e.target.value) --->"take the value of the element
        //where the event (e) occured" ---> everty time "input" changes because "onChange"
        //SO---> the setvalueEnabledBtn(e.target.value)---> will give valueEnabledBtn ---> FALSE IF "input" is empty
      />
      <button style={{ margin: "15 px" }} disabled={valueEnabledBtn < 1}>
        {/* BECAUSE (when input is empty)  --->
        valueEnabledBtn is FALSE will be--->  "0 < 1" -----> disabled={true} */}
        I'm active ONLY if you've typed!
      </button>
    </>
  );
}

export default App;
