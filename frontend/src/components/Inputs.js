import React from "react";
import Classnames from 'classnames'

function Inputs({name, label, type, onChangeHandler,errors}) {
  return (
    <div class=" mb-3">
      <label class="form-label"><i class="zmdi zmdi-account material-icons-name"></i>{label}</label>
      <div class="input-group">
        {/* <span class="input-group-text">
          <i class={icon}></i>
        </span> */}
        <input type={type}  name={name} class={Classnames("form-control", {"is-invalid": errors})} onChange={onChangeHandler} placeholder={name}/>
        {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        }
      </div>
    </div>
  );
}

export default Inputs;
