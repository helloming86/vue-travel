let defaultCity = '洛阳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {

}

export default {
  city: defaultCity
}
