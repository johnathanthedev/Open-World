type Props = {};

const Camera = (props: Props) => {
  return (
    <>
      <a-scene
        vr-mode-ui='enabled: false'
        embedded
        arjs='sourceType: webcam; debugUIEnabled: false;'
      >
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </>
  );
};

export default Camera;
