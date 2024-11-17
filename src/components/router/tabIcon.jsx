import React from 'react';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../../utils/routes';
import {
  Category,
  Home2,
  NotificationFavorite,
  ProfileCircle,
} from 'iconsax-react-native';

const TabIcon = ({name, size, color}) => {
  if (name == HOME) {
    return <Home2 size={size} color={color} variant="Bold" />;
  } else if (name == CATEGORIES) {
    return <Category size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <ProfileCircle size={size} color={color} variant="Bold" />;
  } else if (name == FAVORITES) {
    return <NotificationFavorite size={size} color={color} variant="Bold" />;
  }
};

export default TabIcon;
