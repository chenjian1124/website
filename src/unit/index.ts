// 洗一个通用的获取静态资源的方法，传入路径就行
export const getStaticResource = (path: string) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};

