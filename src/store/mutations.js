export default {
  mchangeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {

    }
  }
}
