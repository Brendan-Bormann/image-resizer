import { expect, test } from 'vitest'
import ImageService from "../services/imageService";

const IMAGE_URL = "https://i.imgur.com/rtp5odd.jpeg";

test("Fetches image without issue", async () => {
    const urlEncoded = encodeURI(IMAGE_URL);
    const image = await ImageService.getImage(urlEncoded);

    expect(image.byteLength > 0);
});

test("Resizes an image", async () => {
    const urlEncoded = encodeURI(IMAGE_URL);
    const image = await ImageService.getImage(urlEncoded);
    const resizedImage = await ImageService.resizeImage(image, 100, 100);

    expect(image.byteLength > resizedImage.byteLength);
});