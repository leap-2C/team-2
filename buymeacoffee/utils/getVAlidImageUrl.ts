export const getValidImageUrl = (url: string | undefined) => {
    if (!url || url === "null" || url === "undefined") {
      return "https://media.giphy.com/media/KeQgaiv19rCEdVFnW8/giphy.gif";
    }

    const cloudinaryUrlPattern = /^https:\/\/res\.cloudinary\.com/;
    if (cloudinaryUrlPattern.test(url)) { 
      return url;
    }
    return "https://media.giphy.com/media/KeQgaiv19rCEdVFnW8/giphy.gif";
  };