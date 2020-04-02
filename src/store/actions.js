export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldGoods = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldGoods) {
        context.commit('addCount', oldGoods)
        resolve('当前的商品数量加1')

      } else {
        context.commit('addCart', payload)
        resolve('添加成功！')
      }
    })

  }
}