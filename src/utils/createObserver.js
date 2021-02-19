const actions = callback => (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target)
      callback()
    }
  })
}

const createObserver = (targets, callback, options = { threshold: 0.25 }) => {
  if (!!window.IntersectionObserver && targets) {
    let observer = new IntersectionObserver(actions(callback), options)
    observer.observe(targets)
  } else {
    callback() // call immediately if intersection observer is no supported
  }
}

export default createObserver
