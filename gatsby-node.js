const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const token = 'IGQVJWOUstZAjhtNXJUU2RoLXZApSmZAGNmx5VGVKMzU1WGpNT2V2QXhrcEI4ZAW5NS01mR25tUDRiRGtLb3psZAmt4YW1SUUR0czdEeWt5UkxJM3FjeVVhekdtdjhlMFRnX0RxSGhKb3h1SG45TmgyLWM0YgZDZD'
  let images = []
  await fetch('https://graph.instagram.com/me/media?access_token=' + token + '&fields=media_url,permalink,caption,media_type,children{id,media_url,permalink}', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
      'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
      .then(response => response.json())
      .then(data => {
        images = data.data
        .filter((image) => image.media_type !== 'VIDEO')
        .map((image) => { 
          return {
            url: image.media_url.replace(/\&/g, "&amp;").replace(/\'/g, "&apos;").replace(/\"/g, "&quot;").replace(/\>/g, "&gt;").replace(/\</g, "&lt;"),
            caption: image.caption,
            geoLocation: 'Sofia, Bulgaria'
          }
        })
      })


  createNode({
    id: `instagram-images`,
    parent: null,
    children: [],
    data: images,
    internal: {
      type: `Images`,
      contentDigest: createContentDigest(images)
    },
  })
}