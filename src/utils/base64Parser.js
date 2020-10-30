export const toBase64 = async (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = () => {
    resolve(reader.result);
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

export default toBase64;
