let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Buoyancy and Floatation: Lift and Drag on sphere and cylinder</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      <p style="text-align:left">
         The air flowing over a cylinder of diameter ${D_a1 * 1000} mm and infinite length with a velocity if ${U_a1} m/s. <br>
         Find the total drag, shear drag and pressure drag on ${L_a1} m length of the cylinder, if the total drag coefficient is 1.5 and shear drag coefficient is 0.25. Take density of air 1.2 kg/m<sup>3</sup>.
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Total Drag
      </p>

      <div id="act1-total-drag-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$F_{DT} = C_{DT} \× A \× \\frac{\ρ U^2}{2} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-total-drag-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_ttl_drag();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    D_a1 = random1(40, 61) / 1000;
    A_a1 = L_a1 * D_a1;
    F_dt = C_dt * A_a1 * ((rho_a1 * Math.pow(U_a1, 2)) / 2);
    F_ds = C_ds * A_a1 * ((rho_a1 * Math.pow(U_a1, 2)) / 2);
    F_dp = F_dt - F_ds;
    console.log('D_a1', D_a1);
    console.log('A_a1', A_a1);
    console.log('F_dt', F_dt);
    console.log('F_ds', F_ds);
    console.log('F_dp', F_dp);
}
function a1_verify_ttl_drag() {
    let inp = (document.getElementById('act1-total-drag-inp'));
    console.log(F_dt);
    if (!verify_values(parseFloat(inp.value), F_dt)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-total-drag-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_{DT} = C_{DT} \× A \× \\frac{\ρ U^2}{2}=  ${parseFloat(F_dt.toFixed(6))} \\ N $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Shear Drag
      </p>
      <div id="act1-sh-drag-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$F_{DS} = C_{DS} \× A \× \\frac{\ρ U^2}{2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-sh-drag-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_sh_drag();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_sh_drag() {
    let inp = (document.getElementById('act1-sh-drag-inp'));
    console.log(F_ds);
    if (!verify_values(parseFloat(inp.value), F_ds)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-sh-drag-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_{DT} = C_{DT} \× A \× \\frac{\ρ U^2}{2}  =  ${parseFloat(F_ds.toFixed(6))} \\ N $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Pressure Drag
      </p>
      <div id="act1-pr-drag-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-lg-5">
               $$\\text{Pressure drag} = \\text{total drag} - \\text{shear drag} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-pr-drag-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_pr_drag();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_pr_drag() {
    let inp = (document.getElementById('act1-pr-drag-inp'));
    console.log(F_dp);
    if (!verify_values(parseFloat(inp.value), F_dp)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-pr-drag-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\text{Pressure drag} = \\text{total drag} - \\text{shear drag} =  ${parseFloat(F_dp.toFixed(6))} \\ N $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `

         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map