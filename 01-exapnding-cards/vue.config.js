//這裡寫的配置會和其他配置結合
module.exports = {
  //配置別名
  configureWebpack: {
    resolve: {
      alias: {
        // "@": "src", //已經默認配置
        assets: "@/assets",
        components: "@/components",
      },
    },
  },

  publicPath:
    process.env.NODE_ENV === "production"
      ? "/50-JS-mini-projects-remade-in-Vue-/01-exapnding-cards//"
      : "/",
};
