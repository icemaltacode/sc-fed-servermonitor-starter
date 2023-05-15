// Globals ----------------------------------------------------------------------------------
const MODE_VIEW = 1;
const MODE_ADD = 2;
const PROMISES = [];

let SERVER_LIST = [];
let timer = undefined;

// End Globals ------------------------------------------------------------------------------

// Event Listeners --------------------------------------------------------------------------
document.addEventListener(
  "DOMContentLoaded",
  function (e) {
    loadServers();
    if (SERVER_LIST.length > 0) {
      switchMode(MODE_VIEW);
    } else {
      switchMode(MODE_ADD);
    }
  },
  false
);

document
  .getElementById("frmAddServer")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (is_valid_input()) {
      addServer();
      document.getElementById("frmAddServer").reset();
      switchMode(MODE_VIEW);
      showServers();
    }
  });

document
  .getElementById("btnAddServer")
  .addEventListener("click", () => switchMode(MODE_ADD));

document.getElementById("btnCancelAddServer").addEventListener("click", () => {
  document.getElementById("frmAddServer").reset();
  switchMode(MODE_VIEW);
});

document.getElementById("inputName").addEventListener("keyup", isValidName);
document.getElementById("inputHost").addEventListener("keydown", isValidHost);
// End Event Listeners -----------------------------------------------------------------------

// Validation Functions ----------------------------------------------------------------------
function isValidName() {
  // TODO Code me!
}

function isValidHost() {
  // TODO Code me!
}

function is_valid_input() {
  // TODO Code me!
}
// End Validation Functions ------------------------------------------------------------------------------

// Program Logic -----------------------------------------------------------------------------------------
function switchMode(mode) {
  document.getElementById("serverListView").style.display = "none";
  document.getElementById("addServerView").style.display = "none";

  switch (mode) {
    case MODE_VIEW:
      document.getElementById("serverListView").style.display = "block";
      showServers();
      startMonitor();
      break;
    case MODE_ADD:
      document.getElementById("addServerView").style.display = "block";
      break;
  }
}

function loadServers() {
  // TODO Code me!
}

function addServer() {
  // TODO Code me!
}

function showServers() {
  // TODO Code me!
}

function startMonitor() {
  // TODO Code me!
}

const ping = (url, timeout = 6000) => {
  // TODO Code me!
};

async function checkStatus() {
  // TODO Code me!
}
// End Program Logic -------------------------------------------------------------------------------------
