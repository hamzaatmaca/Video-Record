const Swal = require("sweetalert2");

class Login {
  run() {
    const joinButton = document.getElementById("joinButton");
    const userName = document.getElementById("floatingInput");

    joinButton.addEventListener("click", () => {
      let userNameValue = floatingInput.value;
      console.log(userNameValue);
      if (userNameValue == "") {
        Swal.fire("Username can not be empty !");
      } else {
        localStorage.setItem("userName", userNameValue);
        window.location.href = "/dashboard";
      }
    });
  }
  render() {
    let loginTemplate = `
    
    <div class="container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card border-0 shadow rounded-3 my-5">
                  <div class="card-body p-4 p-sm-5">
                    <h5 id="loginTitle" class="card-title text-center mb-5 fw-light fs-5 text-primary"><i class="fas fa-video"></i> &nbsp Video Record</h5>
                    
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Please Enter Your UserName">
                        <label for="floatingInput">Enter a Username </label>
                      </div>
                      <div class="d-grid">
                        <button id="joinButton" class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">JOIN</button>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

    document.body.insertAdjacentHTML("beforeend", loginTemplate);
    this.run();
    return "<div></div>";
  }
}
let login = new Login();

export default login;
