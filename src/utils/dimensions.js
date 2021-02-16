import Meta from './meta'

class Dimensions {
  constructor () {
      this.xlarge = 'xlarge'
      this.large = 'large'
      this.medium = 'medium'
      this.small = 'small'
      this.xsmall = 'xsmall'
      this.xxsmall = 'xxsmall'
      this.xxxsmall = 'xxxsmall'
  }

  get width () {
    const { width: metaWidth = 'device-width' } = Meta.Viewport
    const width = parseInt(metaWidth, 10)
    if (!isNaN(width)) {
      return width
    } else {
      return window.innerWidth
    }
  }

  get height () {
    return window.innerHeight
  }

  
  get current () {
    if (this.is.xlarge) return this.xlarge
    if (this.is.large) return this.large
    if (this.is.medium) return this.medium
    if (this.is.small) return this.small
    if (this.is.xsmall) return this.xsmall
    if (this.is.xxsmall) return this.xxsmall
    if (this.is.xxxsmall) return this.xxxsmall
  }

  get is () {
    return { 
        [this.xlarge]: this.width >= 1680,
        [this.large]:	this.width >= 1280 && this.width < 1680,
        [this.medium]:	this.width >= 980 && this.width < 1280,
        [this.small]:	this.width >= 736 && this.width < 980,
        [this.xsmall]:	this.width >= 480 && this.width < 736,
        [this.xxsmall]: this.width >= 360 && this.width < 480,
        [this.xxxsmall]: this.width >= 0 && this.width < 360
     }
  }
}

export default new Dimensions()