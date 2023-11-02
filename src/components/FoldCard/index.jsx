import { View, Image } from "@tarojs/components";
import "./index.scss";

const VerticleCard = () => {
  return (
    <View className="verticleCard">
      <View className="cardItem card1">招商银行</View>
      <View className="cardItem card2">邮政银行</View>
      <View className="cardItem card3">民生银行</View>
    </View>
  );
};

const VerticleCard2 = () => {
  return (
    <View className="verticleCard2">
      <View className="cardItemWrapper">
        <View className="cardItem card1">招商银行</View>
      </View>
      <View className="cardItemWrapper">
        <View className="cardItem card2">邮政银行</View>
      </View>
      <View className="cardItemWrapper">
        <View className="cardItem card3">民生银行</View>
      </View>
    </View>
  );
};

const AvatarFoldCard = () => {
  return (
    <View className="avatarFoldCard">
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
    </View>
  );
};

const AvatarFoldCard2 = () => {
  return (
    <View className="avatarFoldCard2">
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
      <View class="wrapper">
        <Image
          className="avatarImg"
          src="http://ued.test.jk.com/assets/img/example.d1961620.png"
        />
      </View>
    </View>
  );
};

const FoldCard = () => {
  return (
    <View className="foldCard">
      <View>1.头像折叠卡片1</View>
      <AvatarFoldCard />
      <View>2.头像折叠卡片2</View>
      <AvatarFoldCard2 />
      <View>3.竖着折叠卡片-实现方式1</View>
      <VerticleCard />
      <View>4.竖着折叠卡片-实现方式2</View>
      <VerticleCard2 />
    </View>
  );
};

export default FoldCard;
