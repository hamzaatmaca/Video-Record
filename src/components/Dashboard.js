class Dashboard {
  constructor() {
    this.userName = localStorage.getItem("userName");
  }
  run() {
    const logout = document.getElementById("logout");

    logout.addEventListener("click", () => {
      window.location.href = "/";
    });

    document.getElementById("startRecord").onclick = function () {
      console.log("test");
      const parts = [];
      let mediaRecorder;
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          document.getElementById("localVideo").srcObject = stream;
          document.getElementById("startbtn").onclick = () => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start(1000);
            mediaRecorder.ondataavailable = (e) => {
              parts.push(e.data);
            };
          };
        });

      document.getElementById("stopbtn").onclick = () => {
        mediaRecorder.stop();
        const blob = new Blob(parts, {
          type: parts[0].type,
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display:none";
        a.href = url;
        a.download = "MyRecord.mp4";
        a.click();
      };
    };
  }

  render() {
    let dashboardTemplate = `
      <nav class="navbar navbar-expand-lg navbar-light bg-dark navbar-dark ">
        <a class="navbar-brand ms-4"
          ><i class="fas fa-video"></i> &nbsp Video Record</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5">
            <li id="logout" class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fas fa-door-open"></i> &nbsp Logout
                <span class="sr-only">(current)</span></a
              >
            </li>
          </ul>
        </div>
      </nav>

      <div class="container">
        <div class="row mt-5 ">
          <div class="videoHeader">
            <span class="videoHeaderText">Welcome <span class="videoUser">${this.userName}</span> &nbsp</span>
            <button id="startRecord" class="btn btn-success" id="startbtn">
              <i class="fas fa-record-vinyl"></i> &nbsp Open Cam
            </button>
          </div>

          <div class="videoSection">
            <video id="localVideo" autoplay playsinline></video>
            <div class="buttonSection mt-4">
              <button class="btn btn-primary" id="startbtn">Start Record</button>
              <button class="btn btn-danger" id="stopbtn">Stop Record</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", dashboardTemplate);
    this.run();
    return `<div></div>`;
  }
}
let dashboard = new Dashboard();

export default dashboard;
