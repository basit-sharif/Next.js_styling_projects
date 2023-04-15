interface Hero {
    heading:string;
    subheading:string;
    button:string;
}


export default function Herosection(props:Hero) {
    const {heading , subheading , button } = props;
  return (
    <div>
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
        <button>{button}</button>
    </div>
  )
}