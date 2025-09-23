window.onload = function() {
    defaultTabs();
    importTestUsers(15);
}
//#region tab system
const content = ".tab-users, .tab-games, .tab-activity, .tab-accounts, .IU-tabs-container";
const leftPanelContent = ".default-tabs, .user-tabs"
const IUPanels = ".IU-tab-activity, .IU-tab-games, .IU-tab-accounts"

function defaultTabs() {
    opentab('Users');
    openlefttab('default-tabs')
}

function opentab(tabId) {
    document.querySelectorAll(content).forEach(el => el.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

function openlefttab(leftTabId) {
    document.querySelectorAll(leftPanelContent).forEach(el => el.style.display = 'none');
    document.getElementById(leftTabId).style.display = 'block';
}

function openUserSideBarTabs(username = "null") {
    document.querySelectorAll(leftPanelContent).forEach(el => el.style.display = 'none');
    document.getElementById("user-tabs").style.display = 'block';
    
    const p = document .getElementById("leftsidebar-user-info-username");
    console.log(username)
    p.textContent = username;
}

function openIUpanel(IUpanelId) {
    document.querySelectorAll(content).forEach(el => el.style.display = 'none');
    document.getElementById("IU-tabs-container").style.display = 'block';

    document.querySelectorAll(IUPanels).forEach(el => el.style.display = 'none');
    document.getElementById(IUpanelId).style.display = 'block';
}
//#endregion

function createNewUser(username = "username") {

    if (checkForMaxUserAmount()) {
        alert("Max Users Reached")
        return;
    }

    const usersParent = document.getElementById("Users")
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("users-info-container-box")
    newDiv.id = "user-info";

    newDiv.onclick = function () {
        const username = this.querySelector("p").textContent;
        openUserSideBarTabs(username);
        openIUpanel("IU-tab-activity")
    }
    const p = document.createElement("p");
    p.textContent = username;

    newDiv.appendChild(p);
    usersParent.appendChild(newDiv);
}

function checkForMaxUserAmount() {
    const maxUserAmount = 100;
    const useramount = document.querySelectorAll("#user-info")
    console.log(useramount.length)
    if (useramount.length >= maxUserAmount)
        return true;
    else 
        return false;
}

function importUsersFromDatabase() { 
    //take all users from database and put them in the ui
}

function importTestUsers(amount) {
    for(let i = 1; i < amount +1; i++) {
        createNewUser(`user:${i}`)
    }
}