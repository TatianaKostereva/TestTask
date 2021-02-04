import React from 'react';
import {resize} from '@/services/imageResizeService';

const ImgResize = (src, modificator) => {
  return <img src={resize(src, modificator)} />
}

export default ImgResize;