import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Rooms statistics</h5>
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
          src="https://charts.mongodb.com/charts-homestay-wocqt/embed/charts?id=628f52c2-0b13-4121-8b97-94ce59c8a37b&maxDataAge=3600&theme=light&autoRefresh=true">

          </iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
