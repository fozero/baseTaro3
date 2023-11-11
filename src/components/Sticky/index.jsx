import { View, Image } from "@tarojs/components";
import  "./index.scss";

const Sticky = () => {
  return (
    <View className="sticky-container">
      <View className="tab-list">
        <View className="tab-item active">全部</View>
        <View className="tab-item">热门</View>
        <View className="tab-item">推荐</View>
      </View>

      <View className="list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <View key={item} className="list-item">
              <Image className="img" src={require("@/assets/swiper_bg_1.png")}></Image>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Sticky;
