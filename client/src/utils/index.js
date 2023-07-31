export const isMobileScreen = () => window.innerWidth < 600;

export const shouldSidebarOpen = () => {
  const isMobile = isMobileScreen();

  if (isMobile) {
    return false;
  }
  return true;
};

export const sortByDate = (a, b) => {
  return new Date(b.createdAt) - new Date(a.createdAt);
};

export const getLabel = (value, obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key === value?.toUpperCase()) {
      return value;
    }
  }
  return value;
};

export const getLabelForKey = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key === key) {
      return arr[i].label;
    }
  }
  return null;
};

export const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};
