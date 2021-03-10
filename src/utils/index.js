import {widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp,} from 'react-native-responsive-screen';
import {  RFValue as rf} from "react-native-responsive-fontsize";
  
const width = 360
const height = 640

  /**
   * Width-Percentage
   * Converts width dimension to percentage
   * 360, 760 - design were made using this scale
   * @param dimension directly taken from design wireframes
   * @returns {string} percentage string e.g. '25%'
   */
  export const wp = dimension => {
    return wp2dp((dimension / width) * 100 + '%');
  };
  
  /**
   * Height-Percentage
   * Converts width dimension to percentage
   * * 360, 760 - design were made using this scale
   * @param dimension directly taken from design wireframes
   * @returns {string} percentage string e.g. '25%'
   */
  export const hp = dimension => {
    return hp2dp((dimension / height) * 100 + '%');
  };

  export const rfv = size =>{
      return rf(size,height);
  };
