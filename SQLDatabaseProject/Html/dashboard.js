window.onload = function() {
    opentab('Users');
}


function opentab(tabId) {
    try {
        document.querySelectorAll(content).forEach(el => el.style.display = 'none');

        document.getElementById(tabId).style.display = 'block';
    }
    catch (err) {
        if (err) throw err;
    }
}
const content = [".tab-games",".tab-accounts",".tab-users",".tab-activity"]

