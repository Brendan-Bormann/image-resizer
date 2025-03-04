# Image Resizer
This project is a web-service that allows users to proxy an image url to resize it.

How to run:
- Start the project with `npm start`, which will start the service on port `3000`
- Optionally, verify the service is working by going to `localhost:3000` in your browser
- Update the URLs in the `<img src="" />` of your project (see below)


To Resize your image, take the URL in your existing `img` src such as below:
```
src="https://i.imgur.com/rtp5odd.jpeg"
```

And modify it to look like this

```
src="http://localhost:3000/image/resize?url=https%3A%2F%2Fi.imgur.com%2Frtp5odd.jpeg&height=250&width=250"
```

*Please note that you will need to URL encode the original source URL. There are many great web tools to do this.*

And that's it! your `img` tag will now be loading a resize image.
