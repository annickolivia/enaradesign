export default function Logo({source, size}) {
    return (
        <img alt='logo' src={source} className={`shrink-0 max-w-32 md:max-w-44`} data-aos="slide-right"></img>
    );
  }
  