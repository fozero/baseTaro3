import { Swiper, SwiperItem, View, Image } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";

import classnames from "classnames";

import swiper_bg_1 from "@/assets/swiper_bg_1.png";
import swiper_bg_2 from "@/assets/swiper_bg_2.png";
import swiper_bg_3 from "@/assets/swiper_bg_3.png";

const BasicSwiper = () => {
  return (
    <Swiper
      className="basic-swiper"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      vertical={false}
      circular
      indicatorDots
      autoplay
    >
      <SwiperItem>
        <Image className="swiper-img" src={swiper_bg_1}></Image>
      </SwiperItem>
      <SwiperItem>
        <Image className="swiper-img" src={swiper_bg_2}></Image>
      </SwiperItem>
      <SwiperItem>
        <Image className="swiper-img" src={swiper_bg_3}></Image>
      </SwiperItem>
    </Swiper>
  );
};

const SpaceSwiper = () => {
  const [curIndex, setCurIndex] = useState(0);

  const swiperChange = (e) => {
    setCurIndex(e.detail.current);
  };

  const handleClick = (index) => {
    setCurIndex(index);
  };

  return (
    <Swiper
      className="space-swiper"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      previousMargin="50px"
      nextMargin="50px"
      vertical={false}
      onChange={swiperChange}
      circular
      current={curIndex}
      indicatorDots
      autoplay
    >
      <SwiperItem onClick={() => handleClick(0)}>
        <Image
          className={classnames("swiper-img", {
            "swiper-active": curIndex === 0,
          })}
          src={swiper_bg_1}
        />
      </SwiperItem>
      <SwiperItem onClick={() => handleClick(1)}>
        <Image
          className={classnames("swiper-img", {
            "swiper-active": curIndex === 1,
          })}
          src={swiper_bg_2}
        />
      </SwiperItem>
      <SwiperItem onClick={() => handleClick(2)}>
        <Image
          className={classnames("swiper-img", {
            "swiper-active": curIndex === 2,
          })}
          src={swiper_bg_3}
        />
      </SwiperItem>
    </Swiper>
  );
};

const FoldSwiper = () => {
  const [curIndex, setCurIndex] = useState(0);

  const swiperChange = (e) => {
    setCurIndex(e.detail.current);
  };

  const handleClick = (index) => {
    setCurIndex(index);
  };

  return (
    <Swiper
      className="fold-swiper"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      previousMargin="100px"
      nextMargin="100px"
      vertical={false}
      onChange={swiperChange}
      circular
      current={curIndex}
      indicatorDots
      autoplay={false}
    >
      <SwiperItem onClick={() => handleClick(0)}>
        <Image
          className={classnames("swiper-img", {
            "swiper-active": curIndex === 0,
          })}
          src={swiper_bg_1}
        />
      </SwiperItem>
      <SwiperItem onClick={() => handleClick(1)}>
        <Image
          className={classnames("swiper-img", {
            "swiper-active": curIndex === 1,
          })}
          src={swiper_bg_2}
        />
      </SwiperItem>
      <SwiperItem onClick={() => handleClick(2)}>
        <Image
          className={classnames("swiper-img", {
            "swiper-active": curIndex === 2,
          })}
          src={swiper_bg_3}
        />
      </SwiperItem>
    </Swiper>
  );
};

const MySwiper = () => {
  return (
    <View className="swiper-wrapper">
      <View>1.基础轮播图</View>
      <BasicSwiper />
      <View>2.间隔轮播图</View>
      <SpaceSwiper />
      <View>3.折叠效果轮播图</View>
      <FoldSwiper />
    </View>
  );
};

export default MySwiper;
