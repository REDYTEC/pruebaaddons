odoo.define("pos_print_method.tour", function(require) {
    "use strict";

    var core = require("web.core");
    var tour = require("web_tour.tour");

    var _t = core._t;

    tour.register(
        "pos_print_method_tour",
        {
            url: "/web",
            test: true,
        },
        [
            {
                trigger:
                    '.o_app[data-menu-xmlid="point_of_sale.menu_point_root"], .oe_menu_toggler[data-menu-xmlid="point_of_sale.menu_point_root"]',
                content: _t(
                    "Ready to launch your <b>point of sale</b>? <i>Click here</i>."
                ),
                position: "bottom",
            },
            {
                trigger: ".o_pos_kanban button.oe_kanban_action_button",
                content: _t(
                    "<p>Click to start the point of sale interface. It <b>runs on tablets</b>, laptops, or industrial hardware.</p><p>Once the session launched, the system continues to run without an internet connection.</p>"
                ),
                position: "bottom",
            },
            {
                trigger: ".tables .table",
                content: _t("<p>Click <b>table</b></p>"),
                position: "bottom",
                timeout: 20000,
            },
            {
                trigger: "span[data-category-id='1']",
                content: _t("<p>Click <b>Fruits and Vegetables</b> category.</p>"),
                position: "bottom",
            },
            {
                trigger: ".product-list .product",
                content: _t("<p>Click product 1</p>"),
                position: "bottom",
            },
            {
                trigger: ".product-list .product:not(:first)",
                content: _t("<p>Click product 2</p>"),
                position: "bottom",
            },
            {
                trigger: ".control-buttons .order-submit",
                content: _t(
                    "<p>Click <b>Order</b> button for printing in <b>Kitchen</b></p>"
                ),
                position: "bottom",
            },
        ]
    );
});
