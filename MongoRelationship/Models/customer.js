const mongoose = require('mongoose');
const { Schema } = require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationship');
}

main().then(() => { console.log("connection successfull..") }).catch(err => { console.log(err) });

const orderSchema = new Schema({
    item: String,
    price: Number
});

const Order = mongoose.model('Order', orderSchema);

const addOrder = async () => {
    Order.insertMany([{
        item: 'samosa',
        price: 15
    }, {
        item: 'chips',
        price: 10
    }])
}

// addOrder();

const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        const orders = await Order.deleteMany({ _id: { $in: customer.orders } })
        console.log(orders);
        console.log('Orders deleted successfully...');
    }
});


const Customer = mongoose.model('Customer', customerSchema);


const addCustomer = async () => {
    const cust2 = new Customer({
        name: 'vishal',
    })
    cust2.orders.push(await Order.findById('687df0ba7f495c3ba6b038f4'));
    cust2.orders.push(await Order.findById('687f79122911ee7fabd1a5dd'));
    cust2.orders.push(await Order.findById('687f79122911ee7fabd1a5de'));

    let res = await cust2.save();
    console.log(res);
}

// addCustomer();


//populate term 
// const findCustomer=async ()=>{
//     const res=await Customer.find({}).populate('orders');
//     console.log(res[0]);
// }


// findCustomer();


const delCustomer = async () => {
    const res = await Customer.findByIdAndDelete('6880d8b48390d66b8a7ce58c');
    console.log(res);
}

delCustomer();

// const getInfoCustomer=async ()=>{
//     const customer=await Customer.findById('687f80df6111385ffd55bb1a');
//     console.log(customer.orders);
// }

// getInfoCustomer();