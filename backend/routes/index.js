const productRoutes = require('./productRoutes');
const { notFound, errorHandler } = require("../Middleware/Error");
const userRoutes = require('./User');
const orderRouter = require("./booking");

function route(app){
    app.use('/order', orderRouter);
    app.use('/form', userRoutes);
    app.use('/', productRoutes);
    app.use(notFound);
    app.use(errorHandler);
}        
 module.exports =route;