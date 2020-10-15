var cartId = "shoppingCart";

var localAdapter = {
    saveCart: function (object) {
        var stringified = JSON.stringify(object);
        localStorage.setItem(cartId, stringified);
        return true;
    },
    getCart: function() {
        return JSON.parse(localStorage.getItem(cartId));
    },
    clearCart: function () {
        localStorage.removeItem(cartId);
    }
}

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
        count.value = (patt.test(count.value)===true) ? parseInt();
    }
}