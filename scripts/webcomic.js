var PageCount = 0;

function NextPage() {
    PageCount++;
    var page = "../rat_img/Page" + PageCount + ".jpg";
    document.getElementById("bottomleft").style.visibility = "visible";

    if (PageCount == 0) {
        page = "../rat_img/Cover.jpg";
        document.getElementById("bottomleft").style.visibility = "hidden";
    }

    if (PageCount == 2) {
        document.getElementById("centerpage").style.width = "90%";
    }

    else if (PageCount == 16) {
        document.getElementById("centerpage").style.width = "45%";
        document.getElementById("bottomright").style.visibility = "hidden";
    }

    document.getElementById("centerpage").src = page;
}

function PrevPage() {
    PageCount--;
    var page = "../rat_img/Page" + PageCount + ".jpg";
    document.getElementById("bottomright").style.visibility = "visible";

    if (PageCount == 0) {
        page = "../rat_img/Cover.jpg";
        document.getElementById("bottomleft").style.visibility = "hidden";
    }

    if (PageCount == 1) {
        document.getElementById("centerpage").style.width = "45%";
    }

    else if (PageCount == 2) {
        document.getElementById("centerpage").style.width = "90%";
    }

    else if (PageCount == 15) {
        document.getElementById("centerpage").style.width = "90%";
    }

    else if (PageCount == 16) {
        document.getElementById("centerpage").style.width = "45%";
        document.getElementById("bottomright").style.visibility = "hidden";
    }

    document.getElementById("centerpage").src = page;
}