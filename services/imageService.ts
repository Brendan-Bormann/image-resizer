import sharp from 'sharp';

const ImageService = {
    /**
     * Get Image - Fetches an image file from URL
     * @param url - url for the image
     * @returns buffer array of image
     */
    getImage: async (url: string): Promise<Buffer<ArrayBuffer>> => {
        const response = await fetch(url);
        return Buffer.from(await response.arrayBuffer());
    },

    /**
     * Resize Image - Modifies the dimensions on an image buffer
     * @param buffer - original image
     * @param width - new width
     * @param height - new height
     * @returns - modified buffer array
     */
    resizeImage: async (buffer: Buffer<ArrayBuffer>, width: number, height: number): Promise<Buffer<ArrayBuffer>> => {
        return await sharp(buffer).resize(Number(width), Number(height)).toBuffer();
    }
}

export default ImageService;