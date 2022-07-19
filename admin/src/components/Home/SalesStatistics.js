import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe style={
            {
              background: "#FFFFFF",
              border: "none",
              borderRadius:"2px",
              boxShadow:" 0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "480px"

            }
          }
           src="https://charts.mongodb.com/charts-homestay-wocqt/embed/charts?id=62908353-eb12-43e1-8d33-23cfd873a245&maxDataAge=3600&theme=light&autoRefresh=true">

           </iframe>
        </article>
      </div>
    </div>
  );
};
export default SaleStatistics;
