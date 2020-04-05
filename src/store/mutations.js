export default {
  isShowTab(state, boolean) {
    state.isShowTab = boolean
  },
  addCount(state, payload) {
    payload.count++
  },
  addCart(state, payload) {
    payload.isCheck = true
    payload.count = 1
    state.cartList.push(payload)
  }
   
}