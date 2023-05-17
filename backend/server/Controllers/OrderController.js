const Order = require("../Modals/OrderModal")
const ErrorHandler = require("../Utils/ErrorHandler")
const CatchAsyncError = require("../Middleware/CatchAsyncError");
const Product = require("../Modals/ProductModal");


// Create new order
exports.newOrder = CatchAsyncError(async (req, res, next) => {

    const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    const order = await Order.create({ shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paidAt: Date.now(), user: req.user._id, })

    res.status(201).json({
        success: true,
        order,
    })
})



// Get Single Order 
exports.getSingleOrder = CatchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
        return next(new ErrorHandler("Order not found with this id", 404));
    }

    res.status(200).json({
        success: true,
        order,
    })
})



// Get logged in user Orders
exports.myOrders = CatchAsyncError(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        orders,
    })
})



// Get All Orders --Admin
exports.getAllOrders = CatchAsyncError(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice;
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    })
})



// Update Order status --Admin
exports.updateOrder = CatchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new ErrorHandler("you have already delivered this order", 400));
    }

    if (req.body.status === "Shipped") {

        order.orderItems.forEach(async (o) => {
            await updateStock(o.product, o.quantity);
        })
    }

    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now()
    }

    await order.save({ validateBeforeSave: false })
    res.status(200).json({
        success: true,
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
}

// Delete Order --Admin
exports.deleteOrder = CatchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this id", 404));
    }

    await order.deleteOne()

    res.status(200).json({
        success: true,
    })
})