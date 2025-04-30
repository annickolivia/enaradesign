export default function Logo({source, size}) {
    return (
        <img alt='logo' src={source} className={`shrink-0 max-w-12 md:max-w-20`}></img>
    );
  }
  