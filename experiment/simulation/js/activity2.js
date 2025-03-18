let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <br>
      <p style="text-align:left">
         Calculate the weight of a ball of diameter ${D_a2 * 1000} mm which is just supported in a vertical air stream which is flowing at a velocity of ${U_a2} m/s. <br>
         The density of air ${rho_a2} kg/m<sup>3</sup>. The kinematic viscosity of air ${parseFloat((nue * Math.pow(10, 4)).toFixed(1))} stokes.
      </p>
      <br>

      <div id="act2-Re-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Re = \\frac{UD}{\\nu} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Re-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Re();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    U_a2 = parseFloat(random(6.5, 7.5).toFixed(1));
    Re = (U_a2 * D_a2) / nue;
    if (Re > 0.2 && Re < 5) {
        Cd = (24 / Re) * (1 + 3 / (16 * Re));
    }
    else if (Re >= 5 && Re < 1000) {
        Cd = 5;
    }
    else if (Re >= 1000 && Re < 100000) {
        Cd = 0.5;
    }
    else if (Re >= 100000 && Re < Math.pow(10, 5)) {
        Cd = 0.2;
    }
    A_a2 = (Math.PI / 4) * Math.pow(D_a2, 2);
    Fd = Cd * A_a2 * ((rho_a2 * Math.pow(U_a2, 2)) / 2);
    console.log('U_a2', U_a2);
    console.log('Re', Re);
    console.log('Cd', Cd);
    console.log('A_a2', A_a2);
    console.log('Fd', Fd);
}
function a2_verify_Re() {
    let inp = (document.getElementById('act2-Re-inp'));
    console.log(Re);
    if (!verify_values(parseFloat(inp.value), Re)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Re-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Re = \\frac{UD}{\\nu} =  ${parseFloat(Re.toFixed(3))}  $$
      </p>
      <p>
         $$
            \\begin{aligned}
               (i)& \\quad C_D = \\frac{24}{Re}\\left[1+ \\frac{3}{16RE}\\right], &Re > 0.2 \\ \\ \\& \\ \\ Re < 5 \\\\ 
            
               (ii)& \\quad C_D = 5, &Re \\ge 5 \\ \\ \\& \\ \\ Re < 1000 \\\\

                  (iii)& \\quad C_D = 0.5, &Re \\ge 1000 \\ \\ \\& \\ \\ Re < 100000 \\\\
   
                  (iv)& \\quad C_D = 0.2, &Re \\ge 100000 \\ \\ \\& \\ \\ Re < 10^5
            \\end{aligned}
         $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <div id="act2-cd-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-sm-4">
               $$C_D = $$
            </div>
            <div class="row justify-content-center col-sm-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-cd-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_cd();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_cd() {
    let inp = (document.getElementById('act2-cd-inp'));
    console.log(Cd);
    if (!verify_values(parseFloat(inp.value), Cd)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-cd-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$C_D =  ${Cd} $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
            Drag Force
         </p>
         <div id="act2-drag-force-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$F_D = C_D \× A \× \\frac{\ρ U^2}{2} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-drag-force-inp' class='form-control fs-16px' /><span style="display:contents;"> N</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_drag_force();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_drag_force() {
    let inp = (document.getElementById('act2-drag-force-inp'));
    console.log(Fd);
    if (!verify_values(parseFloat(inp.value), Fd)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-drag-force-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_D = C_D \× A \× \\frac{\ρ U^2}{2}=  ${parseFloat(Fd.toFixed(3))} $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map