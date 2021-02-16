class Meta {
    get Viewport () {
      let meta = document.getElementById('viewport-meta')
      meta = meta || document.querySelector('meta[name="viewport"]')
      const content = meta.getAttribute('content').split(',')
      const attrs = {}
  
      content.forEach((attr) => {
        const [name = null, value = null] = attr.split('=')
        attrs[name.trim()] = value
      })
  
      return attrs
    }
  }
  
  export default new Meta()
  