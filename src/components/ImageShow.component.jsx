const ImageShow = ({ image }) => {
  const {
    urls: { small },
  } = image;
  const { alt_description } = image;
  return (
    <>
      <div>
        <img src={small} alt={alt_description} />
      </div>
    </>
  );
};

export default ImageShow;
