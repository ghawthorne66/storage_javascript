var cartId = "shoppingCart";

var helpers = {
    getHtml: function (id) {
        return document.getElementById(id).innerHTML;

    },
    setHtml: function (id, html) {
        document.getElementById(id).innerHTML = html;
        return true;
    },
    itemData: function (object) {
        var count = object.querySelector(".count"),
            patt = new RegExp("^[1-9]([0-9]+)?$");
    }
}