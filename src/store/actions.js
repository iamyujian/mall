export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload 是新添加的商品
      // 查找数组中是否有该商品
      let oldGoods = context.state.cartList.find(item => item.iid === payload.iid)
      // 判断 oldGoods 
      if (oldGoods) {
        // 这里之所以放到 mutations 里执行 是为了能够跟踪，方便调试
        context.commit('addCount', oldGoods)
        resolve('当前的商品数量加1')
      } else {
        context.commit('addCart', payload)
        resolve('添加成功！')
      }
    })

  }
}