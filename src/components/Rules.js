import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs"
// import axios from "axios";
function Rules(props) {
  const [state,setstate] = useState(false)
  const test=()=>{
    setstate(true)
  }
  return (
    <div class="container1">

            <div class="vertical-menu">
        <a style={{height:'35px'}} href="#" class="active" onClick={test}>Rule</a>
       {/* <a href="#">  */}
       {/* <Contractid.Provider value={{ Set, isLoading }}>
      {children}
    </Contractid.Provider> */}
       {/* </a> */}
      </div>
      {!state?null:<div class="row">
        <div class="col-sm" style={{marginTop:'-274px',marginLeft:'16px'}}>
          <div class="form-group row">
            <label
              for="contractid"
              class="col-sm-3 col-form-label"
              style={{ width: "10px" }}
            >
              Priority
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                style={{ width: "260px" }}
                class="form-control"
                placeholder="Enter a value priority"
                name="contractid"
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputoption"
              class="col-sm-3 col-form-label"
              style={{ width: "10px" }}
            >

              Frequency
            </label>

            <div class="col-sm-9">
              <select
                id="form-control1"
                class="form-control"
                style={{ width: "260px" }}
                placeholder="Enter a value"
                name="contractdate"
              >
                <option selected>Open this select Frequency</option>
                <option value="1 day">1 day</option>
                <option value="2 day">2 day</option>
                <option value="3 day">3 day</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="contractdate" class="col-sm-3 col-form-label">
              Penalty
            </label>

            <div class="col-sm-9">
              <input

                class="form-control"
                style={{ width: "260px" }}
                placeholder="Enter a value penalty"
                name="contractdate"
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="contractdate" class="col-sm-3 col-form-label">
              Condition
            </label>

            <div class="col-sm-9">
              <div class="form-row"
                style={{ width: "368px" }}>
                <div class="col">

                  <input

                    class="form-control"
                    style={{ width: "260px" }}
                    placeholder=" "
                    name="contractdate"
                  ></input>


                </div>
                <div class="col" style={{ width: '12px' }} >
                  <input type="text" class="form-control"></input>
                </div>
              </div>
              <div style={{ marginTop: '-10%', marginLeft: '115%' }}>

                <BsPlusLg style={{ marginLeft: "-13px" }} size='1em' backgroundColor='lavender' onClick={""} />


              </div>
            </div>
          </div>





        </div></div> }
      {/* <div className="col-sm">
        <div class="form-group row">

        </div>

      </div> */}
      </div>







  );

}
export default Rules;
























{/* <div class="panel panel-primary" id="result_panel" style={{marginTop:'111px',marginLeft:'-258px',width:'220px'}}>
    <div class="panel-heading"><h6 class="panel-title">Rule</h6>
    </div>
    <div class="panel-body">
        <ul class="list-group">
            <li class="list-group-item"><strong>Signature
                Accommodations</strong>(1480m)
            </li>
            <li class="list-group-item"><strong>Signature
                Accommodations</strong>(1480m)
            </li>
            <li class="list-group-item"><strong>Signature
                Accommodations</strong>(1480m)
            </li>
            <li class="list-group-item"><strong>Signature
                Accommodations</strong>(1480m)
            </li>
            <li class="list-group-item"><strong>Signature
                Accommodations</strong>(1480m)
            </li>
            </ul>
            </div>
            </div> */}