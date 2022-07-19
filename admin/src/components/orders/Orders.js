import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">User_Id</th>
          <th scope="col">Total</th>
          <th scope="col">PayMentMethod</th>
          <th scope="col">Paid</th>
          <th scope="col">Date</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user}</b>
            </td>
            <td>${order.totalPrice}</td>
            <td>{order.payMentMethod}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Paid At {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Not Paid
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YY")}</td>
            <td className="d-flex justify-content-end align-item-center">
                <i className="fas fa-eye"></i>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default Orders;
