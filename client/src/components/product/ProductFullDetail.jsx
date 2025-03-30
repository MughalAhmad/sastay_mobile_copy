import React, { useState } from "react";
import Card from "../common/Card";
import Banner from "../common/Banner";
import Heading from "../common/Heading";
import Carousels from "../common/Carousel";
import Atributes from "./Atributes";
import Description from "./Description";
import Review from "./Reviews";
const ProductFullDetail = () => {
  const [detailSection, setDetailSection] = useState("description");
  const list = [
    "/svg/hot_product_main_svg.svg",
    "/svg/hot_product_main_svg.svg",
    "/svg/hot_product_main_svg.svg",
    "/svg/hot_product_main_svg.svg",
    "/svg/hot_product_main_svg.svg",
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 md:items-start ">
        <div className="flex flex-col gap-3">
          <div className="w-full flex-1 h-auto bg-showCaseFilter dark:bg-showCaseFilter py-7 px-8">
            <div className="flex flex-col md:flex-row gap-6 text-lg font-normal">
              <span
                className={`pb-7 ${
                  detailSection === "description"
                    ? "border-primaryColor border-b-2"
                    : ""
                } text-simpleColor cursor-pointer`}
                onClick={() => setDetailSection("description")}
              >
                Description
              </span>
              <span
                className={`pb-7 ${
                  detailSection === "atributes"
                    ? "border-primaryColor border-b-2"
                    : ""
                } text-simpleColor cursor-pointer`}
                onClick={() => setDetailSection("atributes")}
              >
                Atributes
              </span>
              <span
                className={`pb-7 ${
                  detailSection === "reviews"
                    ? "border-primaryColor border-b-2"
                    : ""
                } text-simpleColor cursor-pointer`}
                onClick={() => setDetailSection("reviews")}
              >
                Reviews (0)
              </span>
            </div>
            <div className="py-7 border-y border-neutral500">
              {detailSection === "description" && (
                <span className="text-xl md:text-3xl font-bold text-simpleColor">
                  Xiaomi Redmi 14c 2024 specification
                </span>
              )}
              {detailSection === "atributes" && (
                <span className="text-xl md:text-3xl font-bold text-simpleColor">
                  Xiaomi Redmi 14c 2024 specification
                </span>
              )}
              {detailSection === "reviews" && (
                <span className="text-xl md:text-3xl font-bold text-simpleColor">
                  REVIEWS
                </span>
              )}
            </div>

            {detailSection === "description" && <Description />}
            {detailSection === "atributes" && <Atributes />}
            {detailSection === "reviews" && <Review />}
          </div>
          <Banner werient="1" images={["../svg/hot_product_main_svg.svg"]} />
        </div>

        <div className="min-w-64 bg-showCaseFilter dark:bg-showCaseFilter flex flex-col justify-center items-center py-7 px-6">
          <span className="text-xl font-semibold border-b-2 border-neutral500 pb-7 w-full text-center text-primaryColor">
            SAME BRAND
          </span>
          <div className="flex flex-col gap-0.5 mt-5">
            <Card img="/svg/common/mobile_svg.svg" bg="bg-white"/>
            <Card img="/svg/common/mobile_svg.svg" bg="bg-white"/>
            <Card img="/svg/common/mobile_svg.svg" bg="bg-white"/>
            <Card img="/svg/common/mobile_svg.svg" bg="bg-white"/>
          </div>
        </div>
      </div>

      <div>
        <Heading
          title="related products"
          subTitle="SEE ALL RELATED PRODUCTS BELOW"
        />
        <Carousels slides={list} />
        <Carousels slides={list} />
      </div>
    </div>
  );
};

export default ProductFullDetail;
